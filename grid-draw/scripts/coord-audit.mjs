// Coordinate-refactor audit codemod (TypeScript Compiler API, no extra deps).
//
// Enumerates every `CELL_SIZE`, `cellSize`, and `get_cell_size(...)` reference in
// src-ts and classifies it by AST context so the fine-unit refactor has a
// verified worklist:
//   COORD_MUL  X * CELL_SIZE     coordinate -> world px   (fine-unit safe / rename target)
//   COORD_DIV  X / CELL_SIZE     world px -> coordinate    (snapping; needs step logic)
//   SCALE      other arithmetic  cell-scale (font, handle size) -> needs *CELL_UNITS
//   DECL/REF   declaration or bare reference
//
// Usage:  node scripts/coord-audit.mjs [--json]
import ts from 'typescript';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('../src-ts', import.meta.url).pathname;
const NAMES = new Set(['CELL_SIZE', 'cellSize']);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.tsx?$/.test(p) && !/\.test\.tsx?$/.test(p)) out.push(p);
  }
  return out;
}

function classify(node) {
  const p = node.parent;
  if (ts.isBinaryExpression(p)) {
    const op = p.operatorToken.kind;
    if (op === ts.SyntaxKind.AsteriskToken) return 'COORD_MUL';
    if (op === ts.SyntaxKind.SlashToken) return p.right === node ? 'COORD_DIV' : 'SCALE';
    return 'SCALE';
  }
  if (ts.isVariableDeclaration(p) || ts.isPropertyAssignment(p)) return 'DECL';
  return 'REF';
}

const findings = [];
for (const file of walk(ROOT)) {
  const text = readFileSync(file, 'utf8');
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const rel = file.slice(ROOT.length - 6);
  const visit = (node) => {
    // Bare identifiers named CELL_SIZE / cellSize.
    if (ts.isIdentifier(node) && NAMES.has(node.text) && !ts.isPropertyAccessExpression(node.parent)) {
      const { line } = sf.getLineAndCharacterOfPosition(node.getStart(sf));
      const src = text.split('\n')[line].trim();
      findings.push({ file: rel, line: line + 1, kind: classify(node), name: node.text, src });
    }
    // get_cell_size() calls.
    if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression)
        && node.expression.name.text === 'get_cell_size') {
      const { line } = sf.getLineAndCharacterOfPosition(node.getStart(sf));
      const src = text.split('\n')[line].trim();
      findings.push({ file: rel, line: line + 1, kind: classify(node), name: 'get_cell_size()', src });
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
}

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(findings, null, 2));
} else {
  const by = {};
  for (const f of findings) (by[f.kind] ??= []).push(f);
  for (const kind of ['COORD_MUL', 'COORD_DIV', 'SCALE', 'DECL', 'REF']) {
    const items = by[kind] ?? [];
    console.log(`\n### ${kind}  (${items.length})`);
    for (const f of items) console.log(`  ${f.file}:${f.line}  ${f.name}\n      ${f.src}`);
  }
  console.log(`\nTOTAL ${findings.length}`);
}
