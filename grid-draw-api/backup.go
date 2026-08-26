package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"time"

	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

// runBackups snapshots the SQLite DB to S3 once at startup and then hourly.
// Uses VACUUM INTO for a consistent copy while the server keeps running;
// credentials come from the EC2 instance role.
func runBackups(db *sql.DB, dbPath, bucket string) {
	cfg, err := config.LoadDefaultConfig(context.Background())
	if err != nil {
		log.Printf("backup disabled, cannot load AWS config: %v", err)
		return
	}
	client := s3.NewFromConfig(cfg)

	backup := func() {
		if err := backupOnce(context.Background(), client, db, dbPath, bucket); err != nil {
			log.Printf("backup failed: %v", err)
		}
	}

	backup()
	for range time.Tick(time.Hour) {
		backup()
	}
}

func backupOnce(ctx context.Context, client *s3.Client, db *sql.DB, dbPath, bucket string) error {
	tmp := filepath.Join(filepath.Dir(dbPath), fmt.Sprintf(".backup-%d.db", time.Now().UnixNano()))
	defer os.Remove(tmp)

	if _, err := db.ExecContext(ctx, `VACUUM INTO ?`, tmp); err != nil {
		return fmt.Errorf("vacuum into: %w", err)
	}

	f, err := os.Open(tmp)
	if err != nil {
		return err
	}
	defer f.Close()

	key := "backups/grid-draw-" + time.Now().UTC().Format("20060102-1504") + ".db"
	if _, err := client.PutObject(ctx, &s3.PutObjectInput{
		Bucket: &bucket,
		Key:    &key,
		Body:   f,
	}); err != nil {
		return fmt.Errorf("s3 put %s: %w", key, err)
	}
	log.Printf("backup uploaded: s3://%s/%s", bucket, key)
	return nil
}
