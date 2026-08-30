// Browser end-to-end test for in-place text editing (the double-click flow).
//
// Drives REAL headless Chrome over raw CDP (no test deps) against a REAL built
// bundle, because the unit suite mocks both the browser and WASM — a regression
// in event wiring (onDoubleClick), coordinate translation, or the deployed
// bundle itself is invisible to it. Flow exercised:
//   text tool → click → type "567" → Enter    (creates a text shape)
//   select tool → double-click the text → type "89",
//   ArrowLeft ×2 + Backspace (deletes the '7' mid-string),
//   Shift+End + "2" (replaces the selected "89") → Enter
// and asserts, via the API stub's recorded autosaves, that the design ends with
// ONE text shape reading "562" at the original position. Editing happens in the
// TextEditOverlay <input>, so caret/selection behavior is the browser's own.
//
// Usage:
//   VITE_API_URL=http://127.0.0.1:8791 npx vite build --outDir /tmp/gd-e2e --emptyOutDir
//   node scripts/e2e-text-edit.mjs /tmp/gd-e2e   (E2E_PORT overrides the port)
//
// Requires google-chrome on PATH. Serves the bundle AND the API stub from one
// port (8787) so no CORS is involved.

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { mkdtempSync, rmSync, readFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, extname } from 'node:path';

const DIST = process.argv[2] ?? '/tmp/gd-e2e';
const PORT = Number(process.env.E2E_PORT ?? 8791);
const MIME = {
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
  '.wasm': 'application/wasm', '.ttf': 'font/ttf', '.json': 'application/json',
};

// ---------------------------------------------------------------- API stub --
// Records every autosave (PUT /api/designs) so assertions can inspect the
// exact DesignJSON the app persisted after each gesture.
const saves = [];

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
  const json = (code, body) => {
    res.writeHead(code, { 'content-type': 'application/json' });
    res.end(JSON.stringify(body));
  };
  if (url.pathname === '/api/login' && req.method === 'POST') {
    return json(200, { token: 'e2e-token' });
  }
  if (url.pathname === '/api/designs' && req.method === 'PUT') {
    let body = '';
    for await (const chunk of req) body += chunk;
    const saved = JSON.parse(body);
    saves.push(saved);
    if (process.env.E2E_DEBUG) console.log('[stub] PUT /api/designs', JSON.stringify(saved.design?.texts));
    return json(200, { id: 1, createdAt: '2026-01-01T00:00:00Z', name: saved.name, design: saved.design });
  }
  if (url.pathname.startsWith('/api/')) {
    if (process.env.E2E_DEBUG) console.log('[stub]', req.method, url.pathname, '-> 404');
    return json(404, { error: 'not found' });
  }

  // Static: serve the built bundle under /grid-draw/.
  let p = url.pathname.replace(/^\/grid-draw\/?/, '') || 'index.html';
  if (!extname(p)) p = 'index.html';
  try {
    const data = await readFile(join(DIST, p));
    res.writeHead(200, { 'content-type': MIME[extname(p)] ?? 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404); res.end('missing: ' + p);
  }
});

// ------------------------------------------------------------- CDP client --
function connectCdp(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let nextId = 1;
  const pending = new Map();
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
    } else if (process.env.E2E_DEBUG && msg.method === 'Runtime.consoleAPICalled') {
      console.log('[page]', ...msg.params.args.map((a) => a.value ?? a.description ?? ''));
    } else if (process.env.E2E_DEBUG && msg.method === 'Runtime.exceptionThrown') {
      console.log('[page-error]', msg.params.exceptionDetails.text,
        msg.params.exceptionDetails.exception?.description ?? '');
    }
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = nextId++;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
  return new Promise((resolve, reject) => {
    ws.onopen = () => resolve(send);
    ws.onerror = () => reject(new Error('CDP websocket failed'));
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  await new Promise((r) => server.listen(PORT, r));

  const profile = mkdtempSync(join(tmpdir(), 'gd-e2e-'));
  const chrome = spawn('google-chrome', [
    '--headless=new', '--remote-debugging-port=0', `--user-data-dir=${profile}`,
    '--no-first-run', '--no-sandbox', '--window-size=1200,800', 'about:blank',
  ], { stdio: ['ignore', 'ignore', 'pipe'] });
  let stderr = '';
  chrome.stderr.on('data', (d) => { stderr += d; });

  try {
    // Chrome writes its ephemeral debug port to DevToolsActivePort.
    const portFile = join(profile, 'DevToolsActivePort');
    let debugPort = null;
    for (let i = 0; i < 100 && !debugPort; i++) {
      await sleep(100);
      if (existsSync(portFile)) debugPort = readFileSync(portFile, 'utf8').split('\n')[0];
    }
    if (!debugPort) throw new Error('Chrome did not expose a debug port.\n' + stderr);

    const list = await (await fetch(`http://127.0.0.1:${debugPort}/json/list`)).json();
    const page = list.find((t) => t.type === 'page');
    const cdp = await connectCdp(page.webSocketDebuggerUrl);

    await cdp('Page.enable');
    await cdp('Runtime.enable');
    // Pre-seed the auth token so the app skips the login screen.
    await cdp('Page.addScriptToEvaluateOnNewDocument', {
      source: `localStorage.setItem('grid-draw-token', 'e2e-token');`,
    });
    await cdp('Page.navigate', { url: `http://127.0.0.1:${PORT}/grid-draw/` });

    // Wait for the editor canvas (WASM loaded, grid constructed).
    const evalJs = async (expression) =>
      (await cdp('Runtime.evaluate', { expression, returnByValue: true })).result.value;
    let ready = false;
    for (let i = 0; i < 100 && !ready; i++) {
      await sleep(100);
      ready = await evalJs(`!!document.querySelector('canvas')`);
    }
    if (!ready) throw new Error('canvas never appeared');
    await sleep(1000); // let async WASM init + first render settle

    const rect = await evalJs(
      `(() => { const r = document.querySelector('canvas').getBoundingClientRect();
        return { x: r.x, y: r.y }; })()`
    );

    // Text editing now happens in a REAL DOM <input> (TextEditOverlay), so key
    // events must carry virtual key codes — the browser's own editing commands
    // (caret movement, shift-selection, backspace) are keyed off them, not
    // `key`. modifiers bit 8 = Shift, so Shift+End selects to the end natively.
    const VKEYS = { ArrowLeft: 37, ArrowRight: 39, Home: 36, End: 35, Backspace: 8, Delete: 46, Enter: 13 };
    const key = (k, { modifiers = 0 } = {}) => {
      const base = {
        key: k,
        modifiers,
        text: k.length === 1 ? k : (k === 'Enter' ? '\r' : ''),
        windowsVirtualKeyCode: VKEYS[k] ?? k.toUpperCase().charCodeAt(0),
      };
      return cdp('Input.dispatchKeyEvent', { type: 'keyDown', ...base })
        .then(() => cdp('Input.dispatchKeyEvent', { type: 'keyUp', ...base, text: '' }));
    };
    const mouse = (type, x, y, clickCount) => cdp('Input.dispatchMouseEvent', {
      type, x, y, button: 'left', clickCount, pointerType: 'mouse',
    });
    const click = async (x, y, clickCount = 1) => {
      await mouse('mousePressed', x, y, clickCount);
      await mouse('mouseReleased', x, y, clickCount);
    };

    // World px == viewport px at the initial camera (0,0, zoom 1); cells snap
    // to a 16px lattice. The point must dodge the floating panels that overlay
    // the canvas (Tools on the left, Selection/Training on the right) — clicks
    // there hit the panel, not the canvas.
    const P = { x: rect.x + 500, y: rect.y + 300 };

    // --- Create a text: 't' tool, click, type 567, Enter -------------------
    await key('t');
    await click(P.x, P.y);
    await sleep(150); // overlay input mounts + takes focus
    for (const ch of '567') await key(ch);
    await key('Enter');
    await sleep(1200); // autosave debounce (600ms) + request
    if (saves.length === 0) {
      if (process.env.E2E_DEBUG) {
        const shot = await cdp('Page.captureScreenshot', { format: 'png' });
        const { writeFileSync } = await import('node:fs');
        writeFileSync('/tmp/gd-e2e-fail.png', Buffer.from(shot.data, 'base64'));
        console.log('[debug] page text:', await evalJs('document.body.innerText.slice(0, 400)'));
        console.log('[debug] screenshot: /tmp/gd-e2e-fail.png');
      }
      throw new Error('no autosave after creating the text');
    }
    const created = saves[saves.length - 1].design;
    if (created.texts.length !== 1 || created.texts[0][8] !== '567') {
      throw new Error('creation failed: ' + JSON.stringify(created.texts));
    }

    // --- Double-click it with the select tool, append 89, Enter ------------
    await key('s');
    // Aim at the exact center of the frame the autosave reported:
    // texts[0] = [r, c, color, size, boxW, boxH, halign, valign, text] in fine
    // units; world px = fine * 2 (cell size), viewport = world + canvas origin.
    const [tr, tc, , , tw, th] = created.texts[0];
    const inGlyph = { x: rect.x + (tc + tw / 2) * 2, y: rect.y + (tr + th / 2) * 2 };
    await click(inGlyph.x, inGlyph.y, 1);
    await click(inGlyph.x, inGlyph.y, 2); // second click of the pair → dblclick
    if (process.env.E2E_DEBUG) {
      await sleep(300);
      const shot = await cdp('Page.captureScreenshot', { format: 'png', clip: { x: 380, y: 180, width: 400, height: 300, scale: 2 } });
      const { writeFileSync } = await import('node:fs');
      writeFileSync('/tmp/gd-e2e-after-dblclick.png', Buffer.from(shot.data, 'base64'));
    }
    await sleep(150); // overlay input mounts + takes focus
    // The in-place edit must now be active in the overlay input: typing appends
    // to the EXISTING text ("567" → "56789"); the caret moves left past "89"
    // and Backspace deletes the '7' mid-string ("5689"); Shift+End SELECTS the
    // trailing "89" and typing replaces the selection ("562").
    for (const ch of '89') await key(ch);
    await key('ArrowLeft');
    await key('ArrowLeft');
    await key('Backspace');
    await key('End', { modifiers: 8 }); // Shift+End: select "89"
    await key('2');                     // replaces the selection
    await key('Enter');
    await sleep(1200);

    const final = saves[saves.length - 1].design;
    if (final.texts.length !== 1) {
      throw new Error(`expected 1 text after in-place edit, got ${final.texts.length}: ` +
        JSON.stringify(final.texts));
    }
    const [r, c, , , , , , , text] = final.texts[0];
    if (text !== '562') {
      throw new Error(`in-place edit with caret/selection did not work: text is ${JSON.stringify(text)}, expected "562"`);
    }
    if (r !== created.texts[0][0] || c !== created.texts[0][1]) {
      throw new Error('text moved during in-place edit');
    }

    console.log('PASS: double-click in-place edit with caret movement + shift-selection ("567" → +"89", ←←⌫ → "5689", ⇧End+"2" → "562", same position, one shape)');
  } finally {
    chrome.kill();
    server.close();
    rmSync(profile, { recursive: true, force: true });
  }
}

main().catch((err) => { console.error('FAIL:', err.message); process.exit(1); });
