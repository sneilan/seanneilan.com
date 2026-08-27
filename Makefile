MAX_LINES := 500

.PHONY: lint
lint: lint-length lint-casts

# No TypeScript type assertions (`as T`, `<T>expr`, `as any`, ...) anywhere.
# AST-based via @typescript-eslint/consistent-type-assertions (grep can't tell
# a cast from the word "as" in a comment). grid-draw's own eslint config
# carries the same rule for src-ts; the root config covers the rest.
.PHONY: lint-casts
lint-casts:
	@cd grid-draw && npx eslint src-ts
	@grid-draw/node_modules/.bin/eslint --config eslint.casts.config.mjs \
		'test/**/*.ts' 'test/**/*.tsx' 'typst-notebook/src/**/*.ts' 'typst-notebook/src/**/*.tsx' vitest.config.ts
	@echo "OK: no type assertions"

.PHONY: lint-length
lint-length:
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
