#!/usr/bin/env python3
"""Cache-busting voor de build: geeft index-*.js, routes-*.js en styles-*.css in
assets/ een nieuwe naam met een hash van de inhoud en werkt alle verwijzingen bij
(index.html en de JS-bestanden die elkaar importeren).

Draai dit na ELKE wijziging in assets/:  python3 tools/rehash.py
Een nieuwe bestandsnaam = browsers halen gegarandeerd de nieuwe versie op.
"""
import hashlib, pathlib, re
root = pathlib.Path(__file__).resolve().parent.parent
A = root / 'assets'
files = {}
for pre, ext in [('index', 'js'), ('routes', 'js'), ('styles', 'css')]:
    m = sorted(A.glob(f'{pre}-v*.{ext}'))
    assert len(m) == 1, (pre, m); files[pre] = (m[0].name, ext)
texts = {p: (A / n).read_text() for p, (n, _) in files.items()}
html = (root / 'index.html').read_text()
def norm(t):
    for p, (n, _) in files.items(): t = t.replace(n, f'@@{p}@@')
    return t
texts = {p: norm(t) for p, t in texts.items()}
html = norm(html)
# Eén versiehash over alle bestanden samen (index en routes importeren elkaar).
h = hashlib.sha256(''.join(texts[p] for p in sorted(texts)).encode()).hexdigest()[:8]
new = {p: f'{p}-v{h}.{e}' for p, (_, e) in files.items()}
def fill(t):
    for p, n in new.items(): t = t.replace(f'@@{p}@@', n)
    return t
for p, (old, _) in files.items():
    (A / old).unlink()
    (A / new[p]).write_text(fill(texts[p]))
(root / 'index.html').write_text(fill(html))
# Oude namen uit de eerste Grok-build: een browser met een verouderde index.html
# vraagt die nog op. Ze krijgen een kopie van de huidige versie, zodat ook die
# meteen de nieuwe code draait in plaats van een 404 of oude code.
for p, legacy in {'index': 'index-C7hcOzN5.js', 'routes': 'routes-Dr8XJVnO.js', 'styles': 'styles-B08ocPAI.css'}.items():
    (A / legacy).write_text((A / new[p]).read_text())
print('versie', h, new)
