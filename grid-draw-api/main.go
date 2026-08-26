// grid-draw-api: session-token auth + SQLite-backed storage for grid-draw
// gallery designs and ML training examples, with hourly S3 backups.
//
// Subcommands:
//
//	grid-draw-api serve              run the HTTP server
//	grid-draw-api adduser <name>     create a user (prompts for password)
//
// Config (env): GRID_DRAW_DB, GRID_DRAW_ADDR, GRID_DRAW_BACKUP_BUCKET,
// GRID_DRAW_CORS_ORIGINS (comma-separated extra origins).
package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	"golang.org/x/term"
)

func envOr(key, def string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return def
}

func main() {
	if len(os.Args) < 2 {
		fmt.Fprintln(os.Stderr, "usage: grid-draw-api serve | adduser <username>")
		os.Exit(2)
	}

	dbPath := envOr("GRID_DRAW_DB", "grid-draw.db")

	switch os.Args[1] {
	case "serve":
		db, err := openDB(dbPath)
		if err != nil {
			log.Fatalf("open db: %v", err)
		}
		defer db.Close()

		if bucket := os.Getenv("GRID_DRAW_BACKUP_BUCKET"); bucket != "" {
			go runBackups(db, dbPath, bucket)
		} else {
			log.Print("GRID_DRAW_BACKUP_BUCKET not set; S3 backups disabled")
		}

		origins := []string{"https://seanneilan.com", "http://localhost:5173"}
		if extra := os.Getenv("GRID_DRAW_CORS_ORIGINS"); extra != "" {
			origins = append(origins, strings.Split(extra, ",")...)
		}

		addr := envOr("GRID_DRAW_ADDR", "127.0.0.1:8080")
		srv := &server{db: db}
		log.Printf("listening on %s", addr)
		log.Fatal(http.ListenAndServe(addr, corsMiddleware(origins, srv.routes())))

	case "adduser":
		if len(os.Args) != 3 {
			fmt.Fprintln(os.Stderr, "usage: grid-draw-api adduser <username>")
			os.Exit(2)
		}
		db, err := openDB(dbPath)
		if err != nil {
			log.Fatalf("open db: %v", err)
		}
		defer db.Close()

		fmt.Print("password: ")
		pw, err := term.ReadPassword(int(os.Stdin.Fd()))
		fmt.Println()
		if err != nil {
			log.Fatalf("read password: %v", err)
		}
		if len(pw) < 8 {
			log.Fatal("password must be at least 8 characters")
		}
		if err := createUser(db, os.Args[2], string(pw)); err != nil {
			log.Fatalf("create user: %v", err)
		}
		fmt.Printf("user %q created\n", os.Args[2])

	default:
		fmt.Fprintf(os.Stderr, "unknown command %q\n", os.Args[1])
		os.Exit(2)
	}
}
