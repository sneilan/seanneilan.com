/// <reference types="vite/client" />
// HTTP client for the grid-draw API server (grid-draw-api/, deployed at
// api.seanneilan.com — an EC2 box with SQLite, see infra/grid-draw-api/).
// Mirrors the localDb.ts function signatures so store/serverStore.ts is the
// only funnel components read through. Auth is a bearer session token from
// POST /api/login, kept in localStorage.

import type { DesignJSON } from '../store/gridStore';
import type { SavedDesign, SavedExample, HistoryStacks } from './localDb';

// --- Runtime validators (network boundary) ----------------------------------
// Responses are untrusted JSON; narrow `unknown` to the expected shape with
// type guards instead of asserting. Each guard checks the fields we actually
// rely on and throws (via request) on mismatch, so malformed responses fail
// loudly at the boundary rather than corrupting state downstream.

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null;
}

function isSavedDesign(v: unknown): v is SavedDesign {
  return (
    isRecord(v) &&
    typeof v.id === 'number' &&
    typeof v.createdAt === 'string' &&
    typeof v.name === 'string' &&
    isRecord(v.design)
  );
}

function isSavedDesignArray(v: unknown): v is SavedDesign[] {
  return Array.isArray(v) && v.every(isSavedDesign);
}

function isSavedExample(v: unknown): v is SavedExample {
  return (
    isRecord(v) &&
    typeof v.id === 'number' &&
    typeof v.createdAt === 'string' &&
    isRecord(v.input) &&
    isRecord(v.output)
  );
}

function isSavedExampleArray(v: unknown): v is SavedExample[] {
  return Array.isArray(v) && v.every(isSavedExample);
}

type PresignedUpload = { uploadUrl: string; publicUrl: string; key: string };

function isPresignedUpload(v: unknown): v is PresignedUpload {
  return (
    isRecord(v) &&
    typeof v.uploadUrl === 'string' &&
    typeof v.publicUrl === 'string' &&
    typeof v.key === 'string'
  );
}

// MUST be the literal text `import.meta.env.VITE_API_URL` — Vite substitutes
// exactly that expression at build time. A dynamic `env[key]` lookup (or even
// optional chaining on `env`) is left as-is in the bundle and always misses,
// so the override silently never takes effect.
const envUrl: unknown = import.meta.env.VITE_API_URL;
const BASE: string = typeof envUrl === 'string' && envUrl !== '' ? envUrl : 'https://api.seanneilan.com';

const TOKEN_KEY = 'grid-draw-token';

/** Fired on window whenever the server rejects our token (expired/revoked). */
export const AUTH_EXPIRED_EVENT = 'grid-draw-auth-expired';

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function logout(): void {
  localStorage.removeItem(TOKEN_KEY);
}

export async function login(username: string, password: string): Promise<void> {
  const res = await fetch(`${BASE}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (res.status === 401) throw new Error('invalid username or password');
  if (!res.ok) throw new Error(`login failed (${res.status})`);
  const data: unknown = await res.json();
  if (!isRecord(data) || typeof data.token !== 'string') {
    throw new Error('login failed (malformed response)');
  }
  localStorage.setItem(TOKEN_KEY, data.token);
}

// Send a request and handle the shared 401 / non-ok cases; returns the Response
// for the caller to read (or ignore, for 204/no-content endpoints).
async function send(method: string, path: string, body?: unknown): Promise<Response> {
  const headers: Record<string, string> = {};
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  if (body !== undefined) headers['Content-Type'] = 'application/json';

  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (res.status === 401) {
    logout();
    window.dispatchEvent(new Event(AUTH_EXPIRED_EVENT));
    throw new Error('session expired — please log in again');
  }
  if (!res.ok) {
    const detail: unknown = await res.json().catch(() => null);
    const message = isRecord(detail) && typeof detail.error === 'string' ? detail.error : undefined;
    throw new Error(message ?? `${method} ${path} failed (${res.status})`);
  }
  return res;
}

// Send a request and validate the JSON response against `guard`, throwing on a
// shape mismatch so a T is only ever returned when the payload really is a T.
async function request<T>(
  method: string,
  path: string,
  guard: (d: unknown) => d is T,
  body?: unknown,
): Promise<T> {
  const res = await send(method, path, body);
  const data: unknown = await res.json();
  if (!guard(data)) throw new Error(`${method} ${path}: unexpected response shape`);
  return data;
}

// Send a request whose response body we don't read (204 No Content or ignored).
async function requestVoid(method: string, path: string, body?: unknown): Promise<void> {
  await send(method, path, body);
}

// --- Designs (gallery) ------------------------------------------------------

export function listDesigns(): Promise<SavedDesign[]> {
  return request('GET', '/api/designs', isSavedDesignArray);
}

export function getDesign(id: number): Promise<SavedDesign> {
  return request('GET', `/api/designs/${id}`, isSavedDesign);
}

export function getDesignByName(name: string): Promise<SavedDesign> {
  return request('GET', `/api/designs?name=${encodeURIComponent(name)}`, isSavedDesign);
}

/** Upsert by name (autosave-critical: same name updates one row). */
export async function saveDesign(
  name: string,
  design: DesignJSON,
  history?: HistoryStacks,
): Promise<number> {
  const saved = await request('PUT', '/api/designs', isSavedDesign, { name, design, history });
  return saved.id;
}

export function deleteDesign(id: number): Promise<void> {
  return requestVoid('DELETE', `/api/designs/${id}`);
}

// --- Training examples ------------------------------------------------------

export function listExamples(): Promise<SavedExample[]> {
  return request('GET', '/api/examples', isSavedExampleArray); // server returns newest first
}

export async function saveExample(
  input: DesignJSON,
  output: DesignJSON,
  delta?: [number, number],
): Promise<number> {
  const saved = await request('POST', '/api/examples', isSavedExample, { input, output, delta });
  return saved.id;
}

export function updateExample(
  id: number,
  input: DesignJSON,
  output: DesignJSON,
  delta?: [number, number],
): Promise<void> {
  return requestVoid('PUT', `/api/examples/${id}`, { input, output, delta });
}

export function deleteExample(id: number): Promise<void> {
  return requestVoid('DELETE', `/api/examples/${id}`);
}

// --- Image objects (uploaded to public S3 via a presigned PUT) --------------

/**
 * Upload an image blob to the public bucket and return its public URL, which
 * becomes an image object's source. Flow: ask the API for a short-lived
 * presigned PUT (server holds the AWS creds), then PUT the bytes straight to
 * S3 — the bytes never touch the API box. The Content-Type must match what was
 * signed. Throws with a readable message on any step's failure.
 */
export async function uploadImage(file: Blob): Promise<string> {
  const contentType = file.type || 'application/octet-stream';
  const { uploadUrl, publicUrl } = await request('POST', '/api/images/presign', isPresignedUpload, {
    contentType,
    size: file.size,
  });
  const res = await fetch(uploadUrl, {
    method: 'PUT',
    body: file,
    headers: { 'Content-Type': contentType },
  });
  if (!res.ok) throw new Error(`image upload failed (${res.status})`);
  return publicUrl;
}
