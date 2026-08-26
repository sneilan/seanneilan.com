package main

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"log"
	"net/http"
	"slices"
	"strconv"
	"strings"
	"time"
)

// Wire shapes mirror the frontend's SavedDesign / SavedExample
// (grid-draw/src-ts/lib/localDb.ts). design/history/input/output/delta are
// opaque JSON blobs to the server.
type savedDesign struct {
	ID        int64           `json:"id"`
	CreatedAt string          `json:"createdAt"`
	Name      string          `json:"name"`
	Design    json.RawMessage `json:"design"`
	History   json.RawMessage `json:"history,omitempty"`
}

type savedExample struct {
	ID        int64           `json:"id"`
	CreatedAt string          `json:"createdAt"`
	Input     json.RawMessage `json:"input"`
	Output    json.RawMessage `json:"output"`
	Delta     json.RawMessage `json:"delta,omitempty"`
}

type server struct {
	db *sql.DB
	// Presigner for image-object uploads to the public S3 bucket; nil when
	// GRID_DRAW_IMAGES_BUCKET is unset (uploads then return 503).
	images *imageUploader
}

type ctxKey int

const userIDKey ctxKey = 0

func (s *server) routes() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("GET /healthz", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("ok"))
	})
	mux.HandleFunc("POST /api/login", s.handleLogin)

	mux.Handle("GET /api/designs", s.auth(s.handleListDesigns))
	mux.Handle("PUT /api/designs", s.auth(s.handleUpsertDesign))
	mux.Handle("GET /api/designs/{id}", s.auth(s.handleGetDesign))
	mux.Handle("DELETE /api/designs/{id}", s.auth(s.handleDeleteDesign))

	mux.Handle("GET /api/examples", s.auth(s.handleListExamples))
	mux.Handle("POST /api/examples", s.auth(s.handleCreateExample))
	mux.Handle("PUT /api/examples/{id}", s.auth(s.handleUpdateExample))
	mux.Handle("DELETE /api/examples/{id}", s.auth(s.handleDeleteExample))

	// Presigned upload for image objects (bytes go straight to public S3).
	mux.Handle("POST /api/images/presign", s.auth(s.handlePresignImage))
	return mux
}

func corsMiddleware(origins []string, next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if origin := r.Header.Get("Origin"); origin != "" && slices.Contains(origins, origin) {
			w.Header().Set("Access-Control-Allow-Origin", origin)
			w.Header().Set("Vary", "Origin")
		}
		if r.Method == http.MethodOptions {
			w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
			w.Header().Set("Access-Control-Allow-Headers", "Authorization, Content-Type")
			w.Header().Set("Access-Control-Max-Age", "86400")
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func (s *server) auth(next http.HandlerFunc) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		token, ok := strings.CutPrefix(r.Header.Get("Authorization"), "Bearer ")
		if !ok || token == "" {
			jsonError(w, http.StatusUnauthorized, "missing bearer token")
			return
		}
		userID, ok := userForToken(s.db, token)
		if !ok {
			jsonError(w, http.StatusUnauthorized, "invalid or expired token")
			return
		}
		next(w, r.WithContext(context.WithValue(r.Context(), userIDKey, userID)))
	})
}

func userID(r *http.Request) int64 {
	return r.Context().Value(userIDKey).(int64)
}

func writeJSON(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(v)
}

func jsonError(w http.ResponseWriter, status int, msg string) {
	writeJSON(w, status, map[string]string{"error": msg})
}

func decodeBody(w http.ResponseWriter, r *http.Request, v any) bool {
	r.Body = http.MaxBytesReader(w, r.Body, 32<<20)
	if err := json.NewDecoder(r.Body).Decode(v); err != nil {
		jsonError(w, http.StatusBadRequest, "invalid JSON body: "+err.Error())
		return false
	}
	return true
}

func now() string {
	return time.Now().UTC().Format(time.RFC3339)
}

// --- auth ---

func (s *server) handleLogin(w http.ResponseWriter, r *http.Request) {
	var req struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}
	if !decodeBody(w, r, &req) {
		return
	}
	token, err := login(s.db, req.Username, req.Password)
	if errors.Is(err, errBadCredentials) {
		time.Sleep(500 * time.Millisecond) // brute-force friction
		jsonError(w, http.StatusUnauthorized, "invalid username or password")
		return
	}
	if err != nil {
		log.Printf("login: %v", err)
		jsonError(w, http.StatusInternalServerError, "internal error")
		return
	}
	writeJSON(w, http.StatusOK, map[string]string{"token": token})
}

// --- designs ---

func scanDesign(row interface{ Scan(...any) error }) (savedDesign, error) {
	var d savedDesign
	var history sql.NullString
	err := row.Scan(&d.ID, &d.CreatedAt, &d.Name, (*rawJSON)(&d.Design), &history)
	if history.Valid {
		d.History = json.RawMessage(history.String)
	}
	return d, err
}

// rawJSON lets database/sql scan a TEXT column straight into json.RawMessage.
type rawJSON json.RawMessage

func (r *rawJSON) Scan(src any) error {
	switch v := src.(type) {
	case string:
		*r = rawJSON(v)
	case []byte:
		*r = rawJSON(slices.Clone(v))
	case nil:
		*r = nil
	default:
		return errors.New("unsupported type for JSON column")
	}
	return nil
}

func (s *server) handleListDesigns(w http.ResponseWriter, r *http.Request) {
	if name := r.URL.Query().Get("name"); name != "" {
		row := s.db.QueryRow(`SELECT id, created_at, name, design, history FROM designs
			WHERE user_id = ? AND name = ?`, userID(r), name)
		d, err := scanDesign(row)
		if errors.Is(err, sql.ErrNoRows) {
			jsonError(w, http.StatusNotFound, "design not found")
			return
		}
		if err != nil {
			log.Printf("get design by name: %v", err)
			jsonError(w, http.StatusInternalServerError, "internal error")
			return
		}
		writeJSON(w, http.StatusOK, d)
		return
	}

	rows, err := s.db.Query(`SELECT id, created_at, name, design, history FROM designs
		WHERE user_id = ? ORDER BY id ASC`, userID(r))
	if err != nil {
		log.Printf("list designs: %v", err)
		jsonError(w, http.StatusInternalServerError, "internal error")
		return
	}
	defer rows.Close()
	designs := []savedDesign{}
	for rows.Next() {
		d, err := scanDesign(rows)
		if err != nil {
			log.Printf("scan design: %v", err)
			jsonError(w, http.StatusInternalServerError, "internal error")
			return
		}
		designs = append(designs, d)
	}
	writeJSON(w, http.StatusOK, designs)
}

func (s *server) handleGetDesign(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.ParseInt(r.PathValue("id"), 10, 64)
	if err != nil {
		jsonError(w, http.StatusBadRequest, "invalid id")
		return
	}
	row := s.db.QueryRow(`SELECT id, created_at, name, design, history FROM designs
		WHERE user_id = ? AND id = ?`, userID(r), id)
	d, err := scanDesign(row)
	if errors.Is(err, sql.ErrNoRows) {
		jsonError(w, http.StatusNotFound, "design not found")
		return
	}
	if err != nil {
		log.Printf("get design: %v", err)
		jsonError(w, http.StatusInternalServerError, "internal error")
		return
	}
	writeJSON(w, http.StatusOK, d)
}

// handleUpsertDesign inserts or overwrites by (user, name) — the frontend's
// autosave depends on upsert-by-name semantics.
func (s *server) handleUpsertDesign(w http.ResponseWriter, r *http.Request) {
	var req struct {
		Name    string          `json:"name"`
		Design  json.RawMessage `json:"design"`
		History json.RawMessage `json:"history"`
	}
	if !decodeBody(w, r, &req) {
		return
	}
	if req.Name == "" || len(req.Design) == 0 {
		jsonError(w, http.StatusBadRequest, "name and design are required")
		return
	}
	var history any
	if len(req.History) > 0 {
		history = string(req.History)
	}
	row := s.db.QueryRow(`
		INSERT INTO designs (user_id, name, created_at, design, history)
		VALUES (?, ?, ?, ?, ?)
		ON CONFLICT(user_id, name) DO UPDATE SET
			design = excluded.design,
			history = excluded.history
		RETURNING id, created_at, name, design, history`,
		userID(r), req.Name, now(), string(req.Design), history)
	d, err := scanDesign(row)
	if err != nil {
		log.Printf("upsert design: %v", err)
		jsonError(w, http.StatusInternalServerError, "internal error")
		return
	}
	writeJSON(w, http.StatusOK, d)
}

func (s *server) handleDeleteDesign(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.ParseInt(r.PathValue("id"), 10, 64)
	if err != nil {
		jsonError(w, http.StatusBadRequest, "invalid id")
		return
	}
	if _, err := s.db.Exec(`DELETE FROM designs WHERE user_id = ? AND id = ?`, userID(r), id); err != nil {
		log.Printf("delete design: %v", err)
		jsonError(w, http.StatusInternalServerError, "internal error")
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

// --- examples ---

func scanExample(row interface{ Scan(...any) error }) (savedExample, error) {
	var e savedExample
	var delta sql.NullString
	err := row.Scan(&e.ID, &e.CreatedAt, (*rawJSON)(&e.Input), (*rawJSON)(&e.Output), &delta)
	if delta.Valid {
		e.Delta = json.RawMessage(delta.String)
	}
	return e, err
}

func (s *server) handleListExamples(w http.ResponseWriter, r *http.Request) {
	// Newest first — matches localDb.listExamples().reverse() in the frontend.
	rows, err := s.db.Query(`SELECT id, created_at, input, output, delta FROM examples
		WHERE user_id = ? ORDER BY id DESC`, userID(r))
	if err != nil {
		log.Printf("list examples: %v", err)
		jsonError(w, http.StatusInternalServerError, "internal error")
		return
	}
	defer rows.Close()
	examples := []savedExample{}
	for rows.Next() {
		e, err := scanExample(rows)
		if err != nil {
			log.Printf("scan example: %v", err)
			jsonError(w, http.StatusInternalServerError, "internal error")
			return
		}
		examples = append(examples, e)
	}
	writeJSON(w, http.StatusOK, examples)
}

type exampleRequest struct {
	Input  json.RawMessage `json:"input"`
	Output json.RawMessage `json:"output"`
	Delta  json.RawMessage `json:"delta"`
}

func (req *exampleRequest) validate(w http.ResponseWriter) bool {
	if len(req.Input) == 0 || len(req.Output) == 0 {
		jsonError(w, http.StatusBadRequest, "input and output are required")
		return false
	}
	return true
}

func nullable(raw json.RawMessage) any {
	if len(raw) == 0 || string(raw) == "null" {
		return nil
	}
	return string(raw)
}

func (s *server) handleCreateExample(w http.ResponseWriter, r *http.Request) {
	var req exampleRequest
	if !decodeBody(w, r, &req) || !req.validate(w) {
		return
	}
	row := s.db.QueryRow(`
		INSERT INTO examples (user_id, created_at, input, output, delta)
		VALUES (?, ?, ?, ?, ?)
		RETURNING id, created_at, input, output, delta`,
		userID(r), now(), string(req.Input), string(req.Output), nullable(req.Delta))
	e, err := scanExample(row)
	if err != nil {
		log.Printf("create example: %v", err)
		jsonError(w, http.StatusInternalServerError, "internal error")
		return
	}
	writeJSON(w, http.StatusOK, e)
}

func (s *server) handleUpdateExample(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.ParseInt(r.PathValue("id"), 10, 64)
	if err != nil {
		jsonError(w, http.StatusBadRequest, "invalid id")
		return
	}
	var req exampleRequest
	if !decodeBody(w, r, &req) || !req.validate(w) {
		return
	}
	// Preserves id and created_at — matches localDb.updateExample.
	row := s.db.QueryRow(`
		UPDATE examples SET input = ?, output = ?, delta = ?
		WHERE user_id = ? AND id = ?
		RETURNING id, created_at, input, output, delta`,
		string(req.Input), string(req.Output), nullable(req.Delta), userID(r), id)
	e, err := scanExample(row)
	if errors.Is(err, sql.ErrNoRows) {
		jsonError(w, http.StatusNotFound, "example not found")
		return
	}
	if err != nil {
		log.Printf("update example: %v", err)
		jsonError(w, http.StatusInternalServerError, "internal error")
		return
	}
	writeJSON(w, http.StatusOK, e)
}

func (s *server) handleDeleteExample(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.ParseInt(r.PathValue("id"), 10, 64)
	if err != nil {
		jsonError(w, http.StatusBadRequest, "invalid id")
		return
	}
	if _, err := s.db.Exec(`DELETE FROM examples WHERE user_id = ? AND id = ?`, userID(r), id); err != nil {
		log.Printf("delete example: %v", err)
		jsonError(w, http.StatusInternalServerError, "internal error")
		return
	}
	w.WriteHeader(http.StatusNoContent)
}
