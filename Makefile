MAX_LINES := 500

.PHONY: lint
lint:
	@over=$$(git ls-files \
		':!static/' ':!themes/' ':!public/' \
		':!*package-lock.json' \
		':!*.png' ':!*.jpg' ':!*.gif' ':!*.wasm' ':!*.ico' ':!*.svg' \
	| while read -r f; do \
		[ -f "$$f" ] || continue; \
		lines=$$(wc -l < "$$f"); \
		if [ "$$lines" -gt $(MAX_LINES) ]; then echo "$$lines	$$f"; fi; \
	done | sort -rn); \
	if [ -n "$$over" ]; then \
		echo "Files over $(MAX_LINES) lines:"; \
		echo "$$over"; \
		exit 1; \
	else \
		echo "OK: no files over $(MAX_LINES) lines"; \
	fi
