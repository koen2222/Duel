#!/usr/bin/env python3
"""Haalt losse snippers van buurfiguren uit figuurplaatjes.

De plaatjes zijn uit grote vellen geknipt; soms staat er aan de rand nog een
stukje van de figuur ernaast. Dit script zoekt in elk plaatje de losse
'eilandjes' (aaneengesloten niet-transparante pixels) die de rand raken en
kleiner zijn dan de figuur zelf, en maakt die doorzichtig.

Gebruik:  python3 tools/snippers.py --check public/art/*.png                 (alleen melden)
          python3 tools/snippers.py public/art/p014.png public/art/p017.png   (schrijft terug)

Controleer altijd eerst met --check en bekijk het plaatje: een los onderdeel van
de figuur zelf dat tegen de rand staat (zoals de vlammetjes van skeleton.png of
de belletjes van p109.png) ziet het script ook als snipper.
Vereist Pillow:  pip install pillow
"""
import sys
from collections import deque
from PIL import Image

MIN_PIXELS = 30  # kleinere eilandjes zijn ruis, niet de moeite


def eilanden(alpha, w, h):
    """Geeft per eilandje (lijst van pixel-indexen, raakt-rand)."""
    gezien = bytearray(w * h)
    uit = []
    for start in range(w * h):
        if not alpha[start] or gezien[start]:
            continue
        gezien[start] = 1
        q, pixels, rand = deque([start]), [], False
        while q:
            i = q.popleft()
            pixels.append(i)
            x, y = i % w, i // w
            if x in (0, w - 1) or y in (0, h - 1):
                rand = True
            for dx in (-1, 0, 1):
                for dy in (-1, 0, 1):
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < w and 0 <= ny < h:
                        j = ny * w + nx
                        if alpha[j] and not gezien[j]:
                            gezien[j] = 1
                            q.append(j)
        uit.append((pixels, rand))
    return uit


def snippers(img):
    w, h = img.size
    alpha = img.getchannel('A').tobytes()
    eil = eilanden(alpha, w, h)
    grootste = max(len(p) for p, _ in eil)
    return [p for p, rand in eil if rand and MIN_PIXELS <= len(p) < grootste]


def main(args):
    check = '--check' in args
    gevonden = 0
    for pad in [a for a in args if a != '--check']:
        img = Image.open(pad).convert('RGBA')
        weg = snippers(img)
        if not weg:
            continue
        gevonden += 1
        print(f'{pad}: {len(weg)} snipper(s), {sum(map(len, weg))} pixels')
        if not check:
            px = img.load()
            w = img.size[0]
            for p in weg:
                for i in p:
                    r, g, b, _ = px[i % w, i // w]
                    px[i % w, i // w] = (r, g, b, 0)
            img.save(pad, optimize=True)
    print(f'{gevonden} plaatje(s) met snippers' + (' (alleen gecontroleerd)' if check else ' opgeschoond'))


if __name__ == '__main__':
    main(sys.argv[1:])
