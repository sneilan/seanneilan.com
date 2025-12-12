export function encodeEquationsToURL(equations: string[]): string {
  const data = equations;
  const encoded = btoa(encodeURIComponent(JSON.stringify(data)));
  return `${window.location.origin}${window.location.pathname}?eq=${encoded}`;
}

export function decodeEquationsFromURL(): string[] | null {
  const params = new URLSearchParams(window.location.search);
  const encoded = params.get('eq');
  if (!encoded) return null;
  try {
    const decoded = decodeURIComponent(atob(encoded));
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}
