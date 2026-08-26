package main

import (
	"crypto/rand"
	"crypto/sha256"
	"database/sql"
	"encoding/hex"
	"errors"
	"time"

	"golang.org/x/crypto/bcrypt"
)

const sessionTTL = 30 * 24 * time.Hour

var errBadCredentials = errors.New("invalid username or password")

func createUser(db *sql.DB, username, password string) error {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	_, err = db.Exec(`INSERT INTO users (username, pw_hash) VALUES (?, ?)`, username, string(hash))
	return err
}

func hashToken(token string) string {
	sum := sha256.Sum256([]byte(token))
	return hex.EncodeToString(sum[:])
}

// login verifies credentials and returns a new session token. The token is
// only ever returned to the client; the DB stores its SHA-256.
func login(db *sql.DB, username, password string) (string, error) {
	var userID int64
	var pwHash string
	err := db.QueryRow(`SELECT id, pw_hash FROM users WHERE username = ?`, username).
		Scan(&userID, &pwHash)
	if errors.Is(err, sql.ErrNoRows) {
		return "", errBadCredentials
	}
	if err != nil {
		return "", err
	}
	if bcrypt.CompareHashAndPassword([]byte(pwHash), []byte(password)) != nil {
		return "", errBadCredentials
	}

	raw := make([]byte, 32)
	if _, err := rand.Read(raw); err != nil {
		return "", err
	}
	token := hex.EncodeToString(raw)
	expires := time.Now().UTC().Add(sessionTTL).Format(time.RFC3339)
	if _, err := db.Exec(`INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)`,
		hashToken(token), userID, expires); err != nil {
		return "", err
	}
	return token, nil
}

// userForToken returns the user id for a valid, unexpired session token.
func userForToken(db *sql.DB, token string) (int64, bool) {
	var userID int64
	var expiresAt string
	err := db.QueryRow(`SELECT user_id, expires_at FROM sessions WHERE token_hash = ?`,
		hashToken(token)).Scan(&userID, &expiresAt)
	if err != nil {
		return 0, false
	}
	exp, err := time.Parse(time.RFC3339, expiresAt)
	if err != nil || time.Now().UTC().After(exp) {
		db.Exec(`DELETE FROM sessions WHERE token_hash = ?`, hashToken(token))
		return 0, false
	}
	return userID, true
}
