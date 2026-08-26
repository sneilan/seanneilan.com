package main

import (
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/aws/aws-sdk-go-v2/service/s3"
)

// Image objects in a drawing store their pixels in a public S3 bucket; the
// design JSON only references the object by URL. The browser can't hold AWS
// credentials, so it asks this endpoint for a short-lived presigned PUT URL,
// uploads the bytes straight to S3, and then uses the returned public URL as the
// image object's source. Keeping the credentials server-side (the EC2 instance
// role) is why uploads route through here.

// Allowed upload content types → object extension. Restricting the set keeps the
// public bucket to real images and gives S3 a correct Content-Type to serve.
var imageExts = map[string]string{
	"image/png":  "png",
	"image/jpeg": "jpg",
	"image/webp": "webp",
	"image/gif":  "gif",
}

// Cap uploads so a single object can't fill the bucket / rack up cost.
const maxImageBytes = 15 << 20 // 15 MiB

// imageUploader presigns PUTs to the public images bucket. nil when
// GRID_DRAW_IMAGES_BUCKET is unset (uploads then report "not configured").
type imageUploader struct {
	presigner *s3.PresignClient
	bucket    string
	region    string
}

func newImageUploader(client *s3.Client, bucket, region string) *imageUploader {
	return &imageUploader{
		presigner: s3.NewPresignClient(client),
		bucket:    bucket,
		region:    region,
	}
}

func randHex(n int) (string, error) {
	b := make([]byte, n)
	if _, err := rand.Read(b); err != nil {
		return "", err
	}
	return hex.EncodeToString(b), nil
}

// handlePresignImage validates the requested content type/size, mints a random
// object key, and returns a presigned PUT URL plus the eventual public GET URL.
func (s *server) handlePresignImage(w http.ResponseWriter, r *http.Request) {
	if s.images == nil {
		jsonError(w, http.StatusServiceUnavailable, "image uploads are not configured")
		return
	}
	var req struct {
		ContentType string `json:"contentType"`
		Size        int64  `json:"size"`
	}
	if !decodeBody(w, r, &req) {
		return
	}
	ext, ok := imageExts[req.ContentType]
	if !ok {
		jsonError(w, http.StatusBadRequest, "unsupported image type (png, jpeg, webp, gif)")
		return
	}
	if req.Size > maxImageBytes {
		jsonError(w, http.StatusRequestEntityTooLarge, "image too large (max 15 MiB)")
		return
	}

	id, err := randHex(16)
	if err != nil {
		log.Printf("presign image: rand: %v", err)
		jsonError(w, http.StatusInternalServerError, "internal error")
		return
	}
	key := fmt.Sprintf("images/%s.%s", id, ext)

	// Signing the content type makes it a signed header, so the browser must PUT
	// with exactly this Content-Type — which is also what S3 then serves on GET.
	presigned, err := s.images.presigner.PresignPutObject(r.Context(), &s3.PutObjectInput{
		Bucket:      &s.images.bucket,
		Key:         &key,
		ContentType: &req.ContentType,
	}, s3.WithPresignExpires(5*time.Minute))
	if err != nil {
		log.Printf("presign image: %v", err)
		jsonError(w, http.StatusInternalServerError, "internal error")
		return
	}

	publicURL := fmt.Sprintf("https://%s.s3.%s.amazonaws.com/%s", s.images.bucket, s.images.region, key)
	writeJSON(w, http.StatusOK, map[string]string{
		"uploadUrl": presigned.URL,
		"publicUrl": publicURL,
		"key":       key,
	})
}
