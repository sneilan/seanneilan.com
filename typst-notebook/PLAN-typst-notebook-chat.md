# Plan: Create typst-notebook-chat Page

## Overview
Create a new chat-focused math assistant page at `/typst-notebook-chat/`. This is a separate React app that duplicates the typst-notebook structure but replaces equation rows with a chat interface that can render Typst equations in messages.

## Key Decisions
- **Separate project folder** (not a second Vite entry point) - cleaner separation, independent builds
- **Share WASM files** from typst-notebook to avoid duplicating 20MB+ assets
- **Support multiple models** - Claude Sonnet + small math model via config
- **Streaming responses** - incremental state updates as chunks arrive
- **PDF/textbook feature** - deferred to Phase 2

## Project Structure
```
typst-notebook-chat/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── types.ts
    ├── hooks/
    │   ├── useTypst.ts          # Copied, paths point to shared WASM
    │   ├── useChat.ts           # Chat state management
    │   └── useStreamingResponse.ts
    ├── components/
    │   ├── ChatContainer.tsx    # Main layout
    │   ├── MessageList.tsx      # Scrollable history
    │   ├── ChatMessage.tsx      # Single message
    │   ├── MessageContent.tsx   # Parse text + render Typst blocks
    │   ├── TypstBlock.tsx       # Inline Typst SVG rendering
    │   ├── ChatInput.tsx        # Text input
    │   └── ModelSelector.tsx    # Model dropdown
    ├── features/
    │   ├── api.ts               # Model configs + API calls
    │   ├── localStorage.ts      # Save/load chat history
    │   └── messageParser.ts     # Extract $...$ Typst blocks
    └── styles/
        └── chat.css
```

## Type Definitions
```typescript
type ModelId = 'claude-sonnet' | 'math-small';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  model?: ModelId;
}

interface ContentBlock {
  type: 'text' | 'typst';
  content: string;
}
```

## Implementation Steps

### Phase 1: Project Setup
1. Create `/typst-notebook-chat/` directory
2. Copy and adapt from typst-notebook:
   - `package.json` (update name, keep deps)
   - `vite.config.ts` (change base to `/typst-notebook-chat/`, output to `../static/typst-notebook-chat`)
   - `tsconfig.json`, `tsconfig.node.json`
3. Copy `src/hooks/useTypst.ts`, update WASM paths to point to `/typst-notebook/` (shared)

### Phase 2: Core Components
1. Create `src/types.ts` with ChatMessage, ModelId, ContentBlock types
2. Create `src/features/messageParser.ts` - regex to split content into text/typst blocks
3. Create `src/features/api.ts` - model configs with endpoints
4. Create `src/components/TypstBlock.tsx` - inline Typst rendering using useTypst

### Phase 3: Chat UI
1. Create `ChatInput.tsx` - textarea with submit on Enter
2. Create `MessageContent.tsx` - parse content, render TypstBlocks inline
3. Create `ChatMessage.tsx` - message bubble with role styling
4. Create `MessageList.tsx` - scrollable container, auto-scroll to bottom
5. Create `ModelSelector.tsx` - dropdown for model selection
6. Create `ChatContainer.tsx` - layout shell

### Phase 4: State & Streaming
1. Create `src/hooks/useStreamingResponse.ts` - fetch with ReadableStream
2. Create `src/hooks/useChat.ts` - messages state, sendMessage(), streaming state
3. Wire up in `App.tsx`

### Phase 5: Hugo Integration
1. Create `/themes/typo/layouts/partials/projects/typst-notebook-chat.html`
2. Create `/content/typst-notebook-chat.md` with frontmatter
3. Update `/themes/typo/layouts/_default/baseof.html` to include partial when `typstNotebookChat: true`

### Phase 6: Styling
1. Copy base CSS variables from typst-notebook.css
2. Add chat-specific styles (message bubbles, streaming indicator)
3. Ensure dark mode support

## Files to Copy/Reference
- `typst-notebook/src/hooks/useTypst.ts`
- `typst-notebook/vite.config.ts`
- `typst-notebook/package.json`
- `typst-notebook/src/styles/typst-notebook.css`
- `themes/typo/layouts/partials/projects/typst-notebook.html`

## WASM Sharing Strategy
The chat app references WASM from the notebook app:
```typescript
$typst.setCompilerInitOptions({
  getModule: () => '/typst-notebook/typst_ts_web_compiler_bg.wasm',
});
```
This avoids duplicating large WASM files but requires typst-notebook to be deployed.

## Future: Phase 2 - PDF/Textbook Integration
- PDF upload and parsing
- Equation image extraction from textbooks
- Chat with textbook sections loaded as context
