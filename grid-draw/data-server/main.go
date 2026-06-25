// Command data-server is a tiny HTTP service that stores grid-draw training
// examples (input→output design pairs) in a local SQLite database and exposes
// them as JSONL for the trainer. It optionally proxies /predict to a separate
// model-inference server.
//
// Endpoints:
//
//	POST /examples      body: {"input":<design>,"output":<design>}  -> {"id":N,"count":M}
//	GET  /count                                                      -> {"count":M}
//	GET  /examples.jsonl  -> one {"input":...,"output":...} per line (for training)
//	POST /predict       body: {"input":<design>}                     -> {"output":<design>}
//	                    (proxied to $PREDICT_URL; 501 if unset)
//
// Storage is a single SQLite file (default ./grid-draw.db). All responses send
// permissive CORS headers so the Vite dev server / browser app can call it.
package main

import (
	"bytes"
	"database/sql"
	"encoding/json"
	"io"
	"log"
	"net/http"
	"os"
	"os/exec"
	"sort"
	"strings"
	"sync"
	"time"

	_ "modernc.org/sqlite"
)

// A design is stored verbatim as JSON; the server never needs to interpret it,
// so we keep the columns as opaque JSON text and let the app/trainer parse.
type example struct {
	Input  json.RawMessage `json:"input"`
	Output json.RawMessage `json:"output"`
}

var db *sql.DB

// Training-job progress is held in memory (not persisted): it's live status the
// trainer pushes and the app polls, meaningful only while a run is in flight.
type job struct {
	ID        string  `json:"id"`
	Status    string  `json:"status"` // running | done | error
	Step      int     `json:"step"`
	Total     int     `json:"total"`
	Loss      float64 `json:"loss"`
	Message   string  `json:"message"`
	UpdatedAt string  `json:"updatedAt"`
}

var (
	jobsMu sync.Mutex
	jobs   = map[string]job{}
)

func main() {
	addr := envOr("ADDR", ":7843")
	dbPath := envOr("DB_PATH", "grid-draw.db")

	var err error
	db, err = sql.Open("sqlite", dbPath)
	if err != nil {
		log.Fatalf("open db: %v", err)
	}
	defer db.Close()
	if _, err := db.Exec(`CREATE TABLE IF NOT EXISTS examples (
		id         INTEGER PRIMARY KEY AUTOINCREMENT,
		created_at TEXT NOT NULL,
		input      TEXT NOT NULL,
		output     TEXT NOT NULL
	)`); err != nil {
		log.Fatalf("create table: %v", err)
	}
	// Saved whole-grid drawings for the in-app gallery. `history` holds the
	// serialized undo/redo stacks so reopening a drawing restores its edit
	// history. `name` is unique: saving the same name upserts (auto-save).
	if _, err := db.Exec(`CREATE TABLE IF NOT EXISTS designs (
		id         INTEGER PRIMARY KEY AUTOINCREMENT,
		created_at TEXT NOT NULL,
		name       TEXT NOT NULL,
		design     TEXT NOT NULL,
		history    TEXT
	)`); err != nil {
		log.Fatalf("create designs table: %v", err)
	}
	// Migration for DBs created before the history column existed.
	if !columnExists(db, "designs", "history") {
		if _, err := db.Exec(`ALTER TABLE designs ADD COLUMN history TEXT`); err != nil {
			log.Fatalf("add designs.history column: %v", err)
		}
	}
	// Every model prediction (the input sent and the output returned) is logged
	// here — an audit trail and a source of extra training data.
	if _, err := db.Exec(`CREATE TABLE IF NOT EXISTS predictions (
		id         INTEGER PRIMARY KEY AUTOINCREMENT,
		created_at TEXT NOT NULL,
		input      TEXT NOT NULL,
		output     TEXT NOT NULL
	)`); err != nil {
		log.Fatalf("create predictions table: %v", err)
	}

	mux := http.NewServeMux()
	mux.HandleFunc("POST /examples", handleExamples)
	mux.HandleFunc("GET /examples", handleExamplesList)
	mux.HandleFunc("DELETE /examples/{id}", handleExampleDelete)
	mux.HandleFunc("/count", handleCount)
	mux.HandleFunc("/examples.jsonl", handleJSONL)
	mux.HandleFunc("/predict", handlePredict)
	mux.HandleFunc("/teacher", handleTeacher)
	mux.HandleFunc("/predictions.jsonl", handlePredictionsJSONL)
	mux.HandleFunc("/jobs", handleJobs)
	mux.HandleFunc("/train", handleTrain)
	mux.HandleFunc("POST /designs", handleDesignCreate)
	mux.HandleFunc("GET /designs", handleDesignList)
	mux.HandleFunc("GET /designs/by-name/{name}", handleDesignByName)
	mux.HandleFunc("GET /designs/{id}", handleDesignGet)
	mux.HandleFunc("DELETE /designs/{id}", handleDesignDelete)

	log.Printf("data-server listening on %s (db=%s)", addr, dbPath)
	log.Fatal(http.ListenAndServe(addr, cors(mux)))
}

// cors wraps a handler with permissive CORS and short-circuits preflight.
func cors(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func handleExamples(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "POST only", http.StatusMethodNotAllowed)
		return
	}
	var ex example
	if err := json.NewDecoder(r.Body).Decode(&ex); err != nil {
		http.Error(w, "bad json: "+err.Error(), http.StatusBadRequest)
		return
	}
	if len(ex.Input) == 0 || len(ex.Output) == 0 {
		http.Error(w, "input and output are required", http.StatusBadRequest)
		return
	}
	res, err := db.Exec(
		`INSERT INTO examples (created_at, input, output) VALUES (?, ?, ?)`,
		time.Now().UTC().Format(time.RFC3339), string(ex.Input), string(ex.Output),
	)
	if err != nil {
		http.Error(w, "insert: "+err.Error(), http.StatusInternalServerError)
		return
	}
	id, _ := res.LastInsertId()
	writeJSON(w, map[string]any{"id": id, "count": countRows()})
}

// handleExamplesList returns every stored training example with its id, for the
// training-data viewer (browse/inspect/delete). Newest first.
func handleExamplesList(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query(`SELECT id, created_at, input, output FROM examples ORDER BY id DESC`)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()
	out := []map[string]any{}
	for rows.Next() {
		var id int64
		var created, in, outp string
		if err := rows.Scan(&id, &created, &in, &outp); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		out = append(out, map[string]any{
			"id": id, "createdAt": created,
			"input": json.RawMessage(in), "output": json.RawMessage(outp),
		})
	}
	writeJSON(w, map[string]any{"examples": out})
}

// handleExampleDelete removes one training example (to prune bad/auto-accepted
// pairs from the viewer).
func handleExampleDelete(w http.ResponseWriter, r *http.Request) {
	if _, err := db.Exec(`DELETE FROM examples WHERE id = ?`, r.PathValue("id")); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	writeJSON(w, map[string]any{"count": countRows()})
}

func handleCount(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, map[string]any{"count": countRows()})
}

// handleJSONL streams every stored example as newline-delimited JSON, the format
// the Python trainer reads directly (one {"input":...,"output":...} per line).
func handleJSONL(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query(`SELECT input, output FROM examples ORDER BY id`)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()
	w.Header().Set("Content-Type", "application/x-ndjson")
	enc := json.NewEncoder(w)
	for rows.Next() {
		var in, out string
		if err := rows.Scan(&in, &out); err != nil {
			return
		}
		_ = enc.Encode(map[string]json.RawMessage{
			"input":  json.RawMessage(in),
			"output": json.RawMessage(out),
		})
	}
}

// handlePredict forwards the request to the model-inference server named by
// $PREDICT_URL and relays its response. Without that env var there is no model
// to call, so we return 501 to make the wiring gap obvious.
func handlePredict(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "POST only", http.StatusMethodNotAllowed)
		return
	}
	target := os.Getenv("PREDICT_URL")
	if target == "" {
		http.Error(w, "no model configured (set PREDICT_URL to the inference server)", http.StatusNotImplemented)
		return
	}
	reqBody, _ := io.ReadAll(r.Body)
	resp, err := http.Post(target, "application/json", bytes.NewReader(reqBody))
	if err != nil {
		http.Error(w, "predict upstream: "+err.Error(), http.StatusBadGateway)
		return
	}
	defer resp.Body.Close()
	respBody, _ := io.ReadAll(resp.Body)

	// Log the input→output round-trip on success (audit + extra training data).
	if resp.StatusCode == http.StatusOK {
		storePrediction(reqBody, respBody)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(resp.StatusCode)
	_, _ = w.Write(respBody)
}

// storePrediction records the request's `input` design and the response's
// `output` design. Best-effort: a malformed body just skips the insert.
func storePrediction(reqBody, respBody []byte) {
	var req struct {
		Input json.RawMessage `json:"input"`
	}
	var res struct {
		Output json.RawMessage `json:"output"`
	}
	if json.Unmarshal(reqBody, &req) != nil || json.Unmarshal(respBody, &res) != nil {
		return
	}
	if len(req.Input) == 0 || len(res.Output) == 0 {
		return
	}
	_, _ = db.Exec(
		`INSERT INTO predictions (created_at, input, output) VALUES (?, ?, ?)`,
		time.Now().UTC().Format(time.RFC3339), string(req.Input), string(res.Output),
	)
}

// handlePredictionsJSONL streams logged predictions as newline-delimited JSON
// ({"input":..,"output":..}), the same shape as /examples.jsonl so they can be
// folded into training.
func handlePredictionsJSONL(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query(`SELECT input, output FROM predictions ORDER BY id`)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()
	w.Header().Set("Content-Type", "application/x-ndjson")
	enc := json.NewEncoder(w)
	for rows.Next() {
		var in, out string
		if err := rows.Scan(&in, &out); err != nil {
			return
		}
		_ = enc.Encode(map[string]json.RawMessage{
			"input":  json.RawMessage(in),
			"output": json.RawMessage(out),
		})
	}
}

// handleJobs upserts a job's progress on POST (called by the trainer) and lists
// all jobs on GET (polled by the app). Finished/errored jobs linger so the app
// can show the final state; restart the server to clear them.
func handleJobs(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodPost:
		var j job
		if err := json.NewDecoder(r.Body).Decode(&j); err != nil || j.ID == "" {
			http.Error(w, "bad job (id required)", http.StatusBadRequest)
			return
		}
		j.UpdatedAt = time.Now().UTC().Format(time.RFC3339)
		jobsMu.Lock()
		jobs[j.ID] = j
		jobsMu.Unlock()
		writeJSON(w, j)
	case http.MethodGet:
		jobsMu.Lock()
		list := make([]job, 0, len(jobs))
		for _, j := range jobs {
			list = append(list, j)
		}
		jobsMu.Unlock()
		sort.Slice(list, func(i, k int) bool { return list[i].UpdatedAt > list[k].UpdatedAt })
		writeJSON(w, map[string]any{"jobs": list})
	default:
		http.Error(w, "GET or POST", http.StatusMethodNotAllowed)
	}
}

// columnExists reports whether table has a column of the given name.
func columnExists(db *sql.DB, table, column string) bool {
	rows, err := db.Query(`SELECT name FROM pragma_table_info(?)`, table)
	if err != nil {
		return false
	}
	defer rows.Close()
	for rows.Next() {
		var name string
		if err := rows.Scan(&name); err != nil {
			return false
		}
		if name == column {
			return true
		}
	}
	return false
}

// A saved gallery drawing. `design` is the whole-grid DesignJSON the app emits;
// `history` is the serialized {undo, redo} edit stacks (may be null/omitted).
type design struct {
	ID        int64           `json:"id"`
	CreatedAt string          `json:"createdAt"`
	Name      string          `json:"name"`
	Design    json.RawMessage `json:"design"`
	History   json.RawMessage `json:"history,omitempty"`
}

// handleDesignCreate upserts by name: saving an existing name updates that
// drawing in place (auto-save), so a design has a single stable row and URL.
func handleDesignCreate(w http.ResponseWriter, r *http.Request) {
	var in struct {
		Name    string          `json:"name"`
		Design  json.RawMessage `json:"design"`
		History json.RawMessage `json:"history"`
	}
	if err := json.NewDecoder(r.Body).Decode(&in); err != nil || len(in.Design) == 0 {
		http.Error(w, "name and design required", http.StatusBadRequest)
		return
	}
	if in.Name == "" {
		in.Name = "Untitled"
	}
	now := time.Now().UTC().Format(time.RFC3339)
	var history any
	if len(in.History) > 0 {
		history = string(in.History)
	}

	// Update the newest row of this name if one exists; otherwise insert.
	res, err := db.Exec(
		`UPDATE designs SET design = ?, history = ?, created_at = ?
		 WHERE id = (SELECT id FROM designs WHERE name = ? ORDER BY id DESC LIMIT 1)`,
		string(in.Design), history, now, in.Name,
	)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	if n, _ := res.RowsAffected(); n > 0 {
		var id int64
		db.QueryRow(`SELECT id FROM designs WHERE name = ? ORDER BY id DESC LIMIT 1`, in.Name).Scan(&id)
		writeJSON(w, map[string]any{"id": id})
		return
	}
	res, err = db.Exec(
		`INSERT INTO designs (created_at, name, design, history) VALUES (?, ?, ?, ?)`,
		now, in.Name, string(in.Design), history,
	)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	id, _ := res.LastInsertId()
	writeJSON(w, map[string]any{"id": id})
}

func handleDesignList(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query(`SELECT id, created_at, name, design FROM designs ORDER BY id DESC`)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()
	out := []design{}
	for rows.Next() {
		var d design
		var raw string
		if err := rows.Scan(&d.ID, &d.CreatedAt, &d.Name, &raw); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		d.Design = json.RawMessage(raw)
		out = append(out, d)
	}
	writeJSON(w, map[string]any{"designs": out})
}

func handleDesignGet(w http.ResponseWriter, r *http.Request) {
	var d design
	var raw string
	var hist sql.NullString
	err := db.QueryRow(`SELECT id, created_at, name, design, history FROM designs WHERE id = ?`, r.PathValue("id")).
		Scan(&d.ID, &d.CreatedAt, &d.Name, &raw, &hist)
	if err == sql.ErrNoRows {
		http.Error(w, "not found", http.StatusNotFound)
		return
	} else if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	d.Design = json.RawMessage(raw)
	if hist.Valid {
		d.History = json.RawMessage(hist.String)
	}
	writeJSON(w, d)
}

// handleDesignByName looks a drawing up by its (random) name, so each design
// has a shareable URL (<app>/d/<name>). Returns the newest match on collision.
func handleDesignByName(w http.ResponseWriter, r *http.Request) {
	var d design
	var raw string
	var hist sql.NullString
	err := db.QueryRow(
		`SELECT id, created_at, name, design, history FROM designs WHERE name = ? ORDER BY id DESC LIMIT 1`,
		r.PathValue("name"),
	).Scan(&d.ID, &d.CreatedAt, &d.Name, &raw, &hist)
	if err == sql.ErrNoRows {
		http.Error(w, "not found", http.StatusNotFound)
		return
	} else if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	d.Design = json.RawMessage(raw)
	if hist.Valid {
		d.History = json.RawMessage(hist.String)
	}
	writeJSON(w, d)
}

func handleDesignDelete(w http.ResponseWriter, r *http.Request) {
	if _, err := db.Exec(`DELETE FROM designs WHERE id = ?`, r.PathValue("id")); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	writeJSON(w, map[string]any{"ok": true})
}

func setJob(j job) {
	j.UpdatedAt = time.Now().UTC().Format(time.RFC3339)
	jobsMu.Lock()
	jobs[j.ID] = j
	jobsMu.Unlock()
}

func jobStatus(id string) string {
	jobsMu.Lock()
	defer jobsMu.Unlock()
	return jobs[id].Status
}

// handleTrain launches a QLoRA training run as a subprocess. The trainer reports
// step/loss back via POST /jobs (ProgressCallback), so the app's Training Jobs
// panel tracks it live. The command/working-dir are env-configurable:
//
//	TRAIN_CMD  default "uv run python train.py"
//	TRAIN_DIR  default "../trainer"
func handleTrain(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "POST only", http.StatusMethodNotAllowed)
		return
	}
	if countRows() == 0 {
		http.Error(w, "no training data captured yet", http.StatusBadRequest)
		return
	}
	id := "train-" + time.Now().UTC().Format("20060102-150405")
	trainCmd := envOr("TRAIN_CMD", "uv run python train.py")
	trainDir := envOr("TRAIN_DIR", "../trainer")

	cmd := exec.Command("sh", "-c", trainCmd+" --job-id "+id)
	cmd.Dir = trainDir
	cmd.Env = append(os.Environ(), "DATA_SERVER=http://localhost"+envOr("ADDR", ":7843"))

	setJob(job{ID: id, Status: "starting", Message: "launching trainer"})
	go func() {
		out, err := cmd.CombinedOutput()
		// If the process died before the trainer reported "done", surface the
		// failure (with the tail of its output) so the panel shows why.
		if err != nil && jobStatus(id) != "done" {
			tail := string(out)
			if len(tail) > 300 {
				tail = "…" + tail[len(tail)-300:]
			}
			setJob(job{ID: id, Status: "error", Message: strings.TrimSpace(tail)})
		}
	}()
	writeJSON(w, map[string]any{"id": id})
}

func countRows() int {
	var n int
	_ = db.QueryRow(`SELECT COUNT(*) FROM examples`).Scan(&n)
	return n
}

func writeJSON(w http.ResponseWriter, v any) {
	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(v)
}

func envOr(key, def string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return def
}
