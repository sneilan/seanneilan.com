// HTTP client for the grid-draw API server (grid-draw-api/, deployed at
// api.seanneilan.com — an EC2 box with SQLite, see infra/grid-draw-api/).
// Mirrors the localDb.ts function signatures so store/serverStore.ts is the
// only funnel components read through. Auth is a bearer session token from
// POST /api/login, kept in localStorage.

import type { DesignJSON } from '../store/gridStore';
import type { SavedDesign, SavedExample, HistoryStacks } from './localDb';

const BASE: string =
  (import.meta as { env?: Record<string, string | undefined> }).env?.VITE_API_URL ??
  'https://api.seanneilan.com';

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
  const { token } = (await res.json()) as { token: string };
  localStorage.setItem(TOKEN_KEY, token);
}

async function request<T>(method: string, path: string, body?: unknown): Promise<T> {
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
    const detail = (await res.json().catch(() => null)) as { error?: string } | null;
    throw new Error(detail?.error ?? `${method} ${path} failed (${res.status})`);
  }
  if (res.status === 204) return undefined as T;
  return (await res.json()) as T;
}

// --- Designs (gallery) ------------------------------------------------------

export function listDesigns(): Promise<SavedDesign[]> {
  return request('GET', '/api/designs');
}

export function getDesign(id: number): Promise<SavedDesign> {
  return request('GET', `/api/designs/${id}`);
}

export function getDesignByName(name: string): Promise<SavedDesign> {
  return request('GET', `/api/designs?name=${encodeURIComponent(name)}`);
}

/** Upsert by name (autosave-critical: same name updates one row). */
export async function saveDesign(
  name: string,
  design: DesignJSON,
  history?: HistoryStacks,
): Promise<number> {
  const saved = await request<SavedDesign>('PUT', '/api/designs', { name, design, history });
  return saved.id;
}

export function deleteDesign(id: number): Promise<void> {
  return request('DELETE', `/api/designs/${id}`);
}

// --- Training examples ------------------------------------------------------

export function listExamples(): Promise<SavedExample[]> {
  return request('GET', '/api/examples'); // server returns newest first
}

export async function saveExample(
  input: DesignJSON,
  output: DesignJSON,
  delta?: [number, number],
): Promise<number> {
  const saved = await request<SavedExample>('POST', '/api/examples', { input, output, delta });
  return saved.id;
}

export function updateExample(
  id: number,
  input: DesignJSON,
  output: DesignJSON,
  delta?: [number, number],
): Promise<void> {
  return request('PUT', `/api/examples/${id}`, { input, output, delta }).then(() => undefined);
}

export function deleteExample(id: number): Promise<void> {
  return request('DELETE', `/api/examples/${id}`);
}

// --- Image objects (uploaded to public S3 via a presigned PUT) --------------

type PresignedUpload = { uploadUrl: string; publicUrl: string; key: string };

/**
 * Upload an image blob to the public bucket and return its public URL, which
 * becomes an image object's source. Flow: ask the API for a short-lived
 * presigned PUT (server holds the AWS creds), then PUT the bytes straight to
 * S3 — the bytes never touch the API box. The Content-Type must match what was
 * signed. Throws with a readable message on any step's failure.
 */
export async function uploadImage(file: Blob): Promise<string> {
  const contentType = file.type || 'application/octet-stream';
  const { uploadUrl, publicUrl } = await request<PresignedUpload>('POST', '/api/images/presign', {
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
