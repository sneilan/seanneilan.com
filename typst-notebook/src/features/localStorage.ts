import { Equation } from '../types';

interface SavedNotebook {
  equations: Equation[];
  savedAt: string;
  name: string;
}

const NOTEBOOK_LIST_KEY = 'typst-notebook-list';
const NOTEBOOK_PREFIX = 'typst-notebook-';

export function saveNotebook(name: string, equations: Equation[]): void {
  const notebooks = getNotebookList();
  const notebook: SavedNotebook = {
    equations,
    savedAt: new Date().toISOString(),
    name,
  };
  localStorage.setItem(`${NOTEBOOK_PREFIX}${name}`, JSON.stringify(notebook));
  if (!notebooks.includes(name)) {
    notebooks.push(name);
    localStorage.setItem(NOTEBOOK_LIST_KEY, JSON.stringify(notebooks));
  }
}

export function loadNotebook(name: string): SavedNotebook | null {
  const data = localStorage.getItem(`${NOTEBOOK_PREFIX}${name}`);
  return data ? JSON.parse(data) : null;
}

export function getNotebookList(): string[] {
  const list = localStorage.getItem(NOTEBOOK_LIST_KEY);
  return list ? JSON.parse(list) : [];
}

export function deleteNotebook(name: string): void {
  localStorage.removeItem(`${NOTEBOOK_PREFIX}${name}`);
  const notebooks = getNotebookList().filter(n => n !== name);
  localStorage.setItem(NOTEBOOK_LIST_KEY, JSON.stringify(notebooks));
}
