import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { login } from '../lib/apiClient';

/** Username/password gate shown until a session token exists. */
export default function Login({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      await login(username, password);
      onSuccess();
    } catch (err) {
      setError(String(err instanceof Error ? err.message : err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-6">
      <form onSubmit={submit} className="bg-white rounded border p-6 w-80 flex flex-col gap-3">
        <h1 className="text-lg font-semibold">grid-draw</h1>
        <input
          className="border rounded px-3 py-2 text-sm"
          placeholder="username"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border rounded px-3 py-2 text-sm"
          type="password"
          placeholder="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button type="submit" disabled={busy || !username || !password}>
          {busy ? 'Signing in…' : 'Sign in'}
        </Button>
      </form>
    </div>
  );
}
