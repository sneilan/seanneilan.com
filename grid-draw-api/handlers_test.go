package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
)

func newTestServer(t *testing.T) (*server, string) {
	t.Helper()
	db, err := openDB(t.TempDir() + "/test.db")
	if err != nil {
		t.Fatal(err)
	}
	t.Cleanup(func() { db.Close() })
	if err := createUser(db, "sean", "hunter2hunter2"); err != nil {
		t.Fatal(err)
	}
	token, err := login(db, "sean", "hunter2hunter2")
	if err != nil {
		t.Fatal(err)
	}
	return &server{db: db}, token
}

func do(t *testing.T, s *server, token, method, path string, body any) *httptest.ResponseRecorder {
	t.Helper()
	var buf bytes.Buffer
	if body != nil {
		if err := json.NewEncoder(&buf).Encode(body); err != nil {
			t.Fatal(err)
		}
	}
	req := httptest.NewRequest(method, path, &buf)
	if token != "" {
		req.Header.Set("Authorization", "Bearer "+token)
	}
	w := httptest.NewRecorder()
	s.routes().ServeHTTP(w, req)
	return w
}

func decode[T any](t *testing.T, w *httptest.ResponseRecorder) T {
	t.Helper()
	var v T
	if err := json.Unmarshal(w.Body.Bytes(), &v); err != nil {
		t.Fatalf("decode %q: %v", w.Body.String(), err)
	}
	return v
}

func TestLoginAndAuth(t *testing.T) {
	s, _ := newTestServer(t)

	w := do(t, s, "", "POST", "/api/login", map[string]string{"username": "sean", "password": "wrong"})
	if w.Code != http.StatusUnauthorized {
		t.Fatalf("bad login: got %d", w.Code)
	}

	w = do(t, s, "", "POST", "/api/login", map[string]string{"username": "sean", "password": "hunter2hunter2"})
	if w.Code != http.StatusOK {
		t.Fatalf("login: got %d: %s", w.Code, w.Body.String())
	}
	token := decode[map[string]string](t, w)["token"]
	if token == "" {
		t.Fatal("empty token")
	}

	if w := do(t, s, "", "GET", "/api/designs", nil); w.Code != http.StatusUnauthorized {
		t.Fatalf("unauthenticated list: got %d", w.Code)
	}
	if w := do(t, s, token, "GET", "/api/designs", nil); w.Code != http.StatusOK {
		t.Fatalf("authenticated list: got %d", w.Code)
	}
}

func TestDesignUpsertByName(t *testing.T) {
	s, token := newTestServer(t)

	design1 := map[string]any{"name": "doodle", "design": map[string]any{"w": 10, "h": 10}}
	w := do(t, s, token, "PUT", "/api/designs", design1)
	if w.Code != http.StatusOK {
		t.Fatalf("upsert: got %d: %s", w.Code, w.Body.String())
	}
	first := decode[savedDesign](t, w)

	design2 := map[string]any{
		"name":    "doodle",
		"design":  map[string]any{"w": 20, "h": 20},
		"history": map[string]any{"undo": []any{}, "redo": []any{}},
	}
	w = do(t, s, token, "PUT", "/api/designs", design2)
	second := decode[savedDesign](t, w)
	if second.ID != first.ID {
		t.Fatalf("upsert created new row: %d != %d", second.ID, first.ID)
	}

	list := decode[[]savedDesign](t, do(t, s, token, "GET", "/api/designs", nil))
	if len(list) != 1 {
		t.Fatalf("expected 1 design, got %d", len(list))
	}
	var d struct{ W, H int }
	json.Unmarshal(list[0].Design, &d)
	if d.W != 20 {
		t.Fatalf("design not overwritten: %+v", d)
	}
	if len(list[0].History) == 0 {
		t.Fatal("history missing after upsert")
	}

	byName := do(t, s, token, "GET", "/api/designs?name=doodle", nil)
	if byName.Code != http.StatusOK {
		t.Fatalf("get by name: got %d", byName.Code)
	}
	if got := do(t, s, token, "GET", "/api/designs?name=nope", nil); got.Code != http.StatusNotFound {
		t.Fatalf("missing name: got %d", got.Code)
	}

	if w := do(t, s, token, "DELETE", "/api/designs/1", nil); w.Code != http.StatusNoContent {
		t.Fatalf("delete: got %d", w.Code)
	}
	if list := decode[[]savedDesign](t, do(t, s, token, "GET", "/api/designs", nil)); len(list) != 0 {
		t.Fatalf("expected empty gallery, got %d", len(list))
	}
}

func TestExamplesCRUDAndOrdering(t *testing.T) {
	s, token := newTestServer(t)

	ex := func(n int) map[string]any {
		return map[string]any{
			"input":  map[string]any{"cells": []any{n}},
			"output": map[string]any{"cells": []any{n * 10}},
			"delta":  []int{1, 2},
		}
	}
	for n := 1; n <= 3; n++ {
		if w := do(t, s, token, "POST", "/api/examples", ex(n)); w.Code != http.StatusOK {
			t.Fatalf("create %d: got %d: %s", n, w.Code, w.Body.String())
		}
	}

	list := decode[[]savedExample](t, do(t, s, token, "GET", "/api/examples", nil))
	if len(list) != 3 {
		t.Fatalf("expected 3 examples, got %d", len(list))
	}
	if list[0].ID != 3 || list[2].ID != 1 {
		t.Fatalf("expected newest-first ordering, got ids %d,%d,%d", list[0].ID, list[1].ID, list[2].ID)
	}

	created := list[2].CreatedAt
	w := do(t, s, token, "PUT", "/api/examples/1", ex(99))
	if w.Code != http.StatusOK {
		t.Fatalf("update: got %d: %s", w.Code, w.Body.String())
	}
	updated := decode[savedExample](t, w)
	if updated.CreatedAt != created {
		t.Fatal("update must preserve createdAt")
	}

	if w := do(t, s, token, "PUT", "/api/examples/999", ex(1)); w.Code != http.StatusNotFound {
		t.Fatalf("update missing: got %d", w.Code)
	}
	if w := do(t, s, token, "DELETE", "/api/examples/2", nil); w.Code != http.StatusNoContent {
		t.Fatalf("delete: got %d", w.Code)
	}
	if list := decode[[]savedExample](t, do(t, s, token, "GET", "/api/examples", nil)); len(list) != 2 {
		t.Fatalf("expected 2 examples after delete, got %d", len(list))
	}
}

func TestUserIsolation(t *testing.T) {
	s, token := newTestServer(t)
	if err := createUser(s.db, "other", "otherpassword"); err != nil {
		t.Fatal(err)
	}
	otherToken, err := login(s.db, "other", "otherpassword")
	if err != nil {
		t.Fatal(err)
	}

	do(t, s, token, "PUT", "/api/designs", map[string]any{"name": "mine", "design": map[string]any{"w": 1}})

	if list := decode[[]savedDesign](t, do(t, s, otherToken, "GET", "/api/designs", nil)); len(list) != 0 {
		t.Fatalf("user isolation broken: other sees %d designs", len(list))
	}
	if w := do(t, s, otherToken, "DELETE", "/api/designs/1", nil); w.Code != http.StatusNoContent {
		t.Fatalf("delete: got %d", w.Code)
	}
	// Delete scoped to other's user_id must not remove sean's design.
	if list := decode[[]savedDesign](t, do(t, s, token, "GET", "/api/designs", nil)); len(list) != 1 {
		t.Fatal("cross-user delete removed a design")
	}
}

func TestPresignImageDisabledWhenUnconfigured(t *testing.T) {
	s, token := newTestServer(t) // no s.images configured
	w := do(t, s, token, "POST", "/api/images/presign", map[string]any{"contentType": "image/png", "size": 100})
	if w.Code != http.StatusServiceUnavailable {
		t.Fatalf("presign (unconfigured): got %d, want 503: %s", w.Code, w.Body.String())
	}
}

func TestPresignImageValidatesRequest(t *testing.T) {
	s, token := newTestServer(t)
	// A non-nil uploader with a nil presigner: validation runs (and rejects)
	// before the presigner is ever touched, so these cases never dereference it.
	s.images = &imageUploader{bucket: "b", region: "us-east-2"}

	w := do(t, s, token, "POST", "/api/images/presign", map[string]any{"contentType": "application/pdf", "size": 100})
	if w.Code != http.StatusBadRequest {
		t.Fatalf("bad content type: got %d, want 400: %s", w.Code, w.Body.String())
	}

	w = do(t, s, token, "POST", "/api/images/presign", map[string]any{"contentType": "image/png", "size": int64(maxImageBytes) + 1})
	if w.Code != http.StatusRequestEntityTooLarge {
		t.Fatalf("oversize: got %d, want 413: %s", w.Code, w.Body.String())
	}
}

func TestPresignImageRequiresAuth(t *testing.T) {
	s, _ := newTestServer(t)
	w := do(t, s, "", "POST", "/api/images/presign", map[string]any{"contentType": "image/png", "size": 1})
	if w.Code != http.StatusUnauthorized {
		t.Fatalf("presign (no auth): got %d, want 401", w.Code)
	}
}
