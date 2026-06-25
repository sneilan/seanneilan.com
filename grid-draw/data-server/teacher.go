package main

// The "teacher" path: a large model (Qwen3-Coder-480B via OpenRouter) drafts the
// OUTPUT design for a given INPUT, learning the transformation from the stored
// examples as few-shot demonstrations. Its output is schema-validated and can be
// auto-accepted into the training set — a distillation flywheel where the big
// teacher labels data for the small local student model.

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"time"
)

// Mirrors prompts.py SYSTEM so the teacher sees the same framing as the trainer.
const teacherSystem = "You transform grid drawings. A design is JSON with integer-coordinate " +
	"shapes: cells [r,c,color], lines [r1,c1,r2,c2,color], rects [r1,c1,r2,c2,fill,outline]. " +
	"Colors: 0 black 1 white 2 red 3 yellow 4 blue 5 green 6 none. Given an INPUT design, " +
	"produce the OUTPUT design. Reply with only the output JSON."

func teacherModel() string {
	if m := os.Getenv("TEACHER_MODEL"); m != "" {
		return m
	}
	return "qwen/qwen3-coder"
}

func openrouterURL() string {
	if u := os.Getenv("OPENROUTER_URL"); u != "" {
		return u
	}
	return "https://openrouter.ai/api/v1/chat/completions"
}

// designSchema is the JSON Schema handed to OpenRouter's strict structured-output
// mode, so the teacher can only emit valid DesignJSON. It mirrors schema.py.
var designSchema = map[string]any{
	"type": "object",
	"properties": map[string]any{
		"w":     map[string]any{"type": "integer"},
		"h":     map[string]any{"type": "integer"},
		"cells": arrayOfIntTuples(3),
		"lines": arrayOfIntTuples(5),
		"rects": arrayOfIntTuples(6),
		"texts": map[string]any{"type": "array", "items": map[string]any{"type": "object"}},
	},
	"required":             []string{"w", "h", "cells", "lines", "rects", "texts"},
	"additionalProperties": false,
}

func arrayOfIntTuples(n int) map[string]any {
	return map[string]any{
		"type": "array",
		"items": map[string]any{
			"type": "array", "items": map[string]any{"type": "integer"},
			"minItems": n, "maxItems": n,
		},
	}
}

type chatMessage struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

// handleTeacher reads {input, save?}, builds a few-shot prompt from the stored
// examples, asks the teacher model for the OUTPUT under the Design schema,
// validates it, optionally auto-accepts it into the training set, and returns
// {"output": <design>}. 501 when OPENROUTER_API_KEY is unset.
func handleTeacher(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "POST only", http.StatusMethodNotAllowed)
		return
	}
	key := os.Getenv("OPENROUTER_API_KEY")
	if key == "" {
		http.Error(w, "no teacher configured (set OPENROUTER_API_KEY)", http.StatusNotImplemented)
		return
	}
	var in struct {
		Input json.RawMessage `json:"input"`
		Save  bool            `json:"save"`
	}
	if err := json.NewDecoder(r.Body).Decode(&in); err != nil || len(in.Input) == 0 {
		http.Error(w, "input required", http.StatusBadRequest)
		return
	}

	messages, err := teacherMessages(in.Input)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	output, err := callTeacher(key, messages)
	if err != nil {
		http.Error(w, "teacher: "+err.Error(), http.StatusBadGateway)
		return
	}
	if err := validateDesign(output); err != nil {
		http.Error(w, "teacher returned invalid design: "+err.Error(), http.StatusBadGateway)
		return
	}

	// Auto-accept: the schema check above guarantees a well-formed pair, so it is
	// safe to store as training data without a human in the loop.
	if in.Save {
		_, _ = db.Exec(
			`INSERT INTO examples (created_at, input, output) VALUES (?, ?, ?)`,
			time.Now().UTC().Format(time.RFC3339), string(in.Input), string(output),
		)
	}
	// Always log the teacher round-trip for audit (same table as /predict).
	storePrediction(append(append([]byte(`{"input":`), in.Input...), '}'),
		append(append([]byte(`{"output":`), output...), '}'))

	writeJSON(w, map[string]any{"output": json.RawMessage(output), "saved": in.Save})
}

// teacherMessages builds [system, (demo in, demo out)*, input] from the stored
// examples — the same few-shot framing the local serve.py uses.
func teacherMessages(input json.RawMessage) ([]chatMessage, error) {
	rows, err := db.Query(`SELECT input, output FROM examples ORDER BY id`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	msgs := []chatMessage{{Role: "system", Content: teacherSystem}}
	for rows.Next() {
		var di, do string
		if err := rows.Scan(&di, &do); err != nil {
			return nil, err
		}
		msgs = append(msgs,
			chatMessage{Role: "user", Content: "INPUT:\n" + compactJSON(di)},
			chatMessage{Role: "assistant", Content: compactJSON(do)},
		)
	}
	msgs = append(msgs, chatMessage{Role: "user", Content: "INPUT:\n" + compactJSON(string(input))})
	return msgs, nil
}

// callTeacher posts the chat request to OpenRouter with strict json_schema output
// and returns the raw content string (a DesignJSON document).
func callTeacher(key string, messages []chatMessage) (json.RawMessage, error) {
	body, _ := json.Marshal(map[string]any{
		"model":    teacherModel(),
		"messages": messages,
		"response_format": map[string]any{
			"type": "json_schema",
			"json_schema": map[string]any{
				"name": "Design", "strict": true, "schema": designSchema,
			},
		},
	})
	req, _ := http.NewRequest("POST", openrouterURL(), bytes.NewReader(body))
	req.Header.Set("Authorization", "Bearer "+key)
	req.Header.Set("Content-Type", "application/json")
	client := &http.Client{Timeout: 120 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	respBody, _ := io.ReadAll(resp.Body)
	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("openrouter %d: %s", resp.StatusCode, string(respBody))
	}
	var parsed struct {
		Choices []struct {
			Message struct {
				Content string `json:"content"`
			} `json:"message"`
		} `json:"choices"`
	}
	if err := json.Unmarshal(respBody, &parsed); err != nil || len(parsed.Choices) == 0 {
		return nil, fmt.Errorf("unexpected openrouter response: %s", string(respBody))
	}
	return json.RawMessage(parsed.Choices[0].Message.Content), nil
}

// compactJSON re-encodes a JSON string compactly (matching prompts.py to_json's
// separators); on any parse error it returns the input unchanged.
func compactJSON(s string) string {
	var buf bytes.Buffer
	if err := json.Compact(&buf, []byte(s)); err != nil {
		return s
	}
	return buf.String()
}

// validateDesign rejects anything that is not a well-formed DesignJSON: w/h
// integers and cells/lines/rects as fixed-arity integer tuples (3/5/6). This is
// the gate that makes auto-accept safe (format only — not semantic correctness).
func validateDesign(raw json.RawMessage) error {
	var d struct {
		W     *int            `json:"w"`
		H     *int            `json:"h"`
		Cells [][]int         `json:"cells"`
		Lines [][]int         `json:"lines"`
		Rects [][]int         `json:"rects"`
		Texts json.RawMessage `json:"texts"`
	}
	if err := json.Unmarshal(raw, &d); err != nil {
		return err
	}
	if d.W == nil || d.H == nil {
		return fmt.Errorf("missing w/h")
	}
	for _, c := range d.Cells {
		if len(c) != 3 {
			return fmt.Errorf("cell arity %d != 3", len(c))
		}
	}
	for _, l := range d.Lines {
		if len(l) != 5 {
			return fmt.Errorf("line arity %d != 5", len(l))
		}
	}
	for _, rc := range d.Rects {
		if len(rc) != 6 {
			return fmt.Errorf("rect arity %d != 6", len(rc))
		}
	}
	return nil
}
