package main

import (
	"database/sql"
	"fmt"

	_ "modernc.org/sqlite"
)

const schema = `
CREATE TABLE IF NOT EXISTS users (
	id       INTEGER PRIMARY KEY,
	username TEXT NOT NULL UNIQUE,
	pw_hash  TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS sessions (
	token_hash TEXT PRIMARY KEY,
	user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	expires_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS designs (
	id         INTEGER PRIMARY KEY,
	user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	name       TEXT NOT NULL,
	created_at TEXT NOT NULL,
	design     TEXT NOT NULL,
	history    TEXT,
	UNIQUE(user_id, name)
);
CREATE TABLE IF NOT EXISTS examples (
	id         INTEGER PRIMARY KEY,
	user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	created_at TEXT NOT NULL,
	input      TEXT NOT NULL,
	output     TEXT NOT NULL,
	delta      TEXT
);
`

func openDB(path string) (*sql.DB, error) {
	dsn := fmt.Sprintf("file:%s?_pragma=journal_mode(WAL)&_pragma=busy_timeout(5000)&_pragma=foreign_keys(1)", path)
	db, err := sql.Open("sqlite", dsn)
	if err != nil {
		return nil, err
	}
	// modernc.org/sqlite serializes writes; a single connection avoids
	// SQLITE_BUSY between the API and the backup goroutine.
	db.SetMaxOpenConns(1)
	if _, err := db.Exec(schema); err != nil {
		db.Close()
		return nil, err
	}
	return db, nil
}
