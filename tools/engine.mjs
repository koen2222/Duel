// Plakt de delen van de engine (src/engine/*.js) aan elkaar, precies zoals
// src/main.js dat in de browser doet: op volgorde van bestandsnaam.
// Voor scripts die regels uit de engine lezen (tools/balans.mjs, test/online.mjs).
import fs from 'node:fs';
import path from 'node:path';

export const ENGINE_MAP = path.join(import.meta.dirname, '..', 'src', 'engine');

export function leesEngine() {
  return fs.readdirSync(ENGINE_MAP)
    .filter((f) => f.endsWith('.js'))
    .sort()
    .map((f) => fs.readFileSync(path.join(ENGINE_MAP, f), 'utf8'))
    .join('');
}
