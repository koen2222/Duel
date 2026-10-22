# Schijfduel

**Draai de schijf. Verover het doel.**

Schijfduel is de opvolger van [Rondel](https://github.com/koen2222/Rondel): een tactisch bordspel met draaiende schijven, geïnspireerd op Pokémon Duel (Kanto-stijl). Het spel wordt zowel fysiek als digitaal gemaakt.

## Spelen

Speel online: https://koen2222.github.io/Duel/

Tegen een vriend: tik op **Online** → **Kamer maken** en geef de code van 4 tekens door. Je vriend tikt **Online**, vult de code in en kiest **Meedoen**.

## Kernmechaniek

- 28-punts stadium
- Vinyl-monsters (draaischijven)
- Attack wheels
- Rood/blauw teams
- Gebaseerd op public domain / open mythologie

## Branding

- Palet: navy, cream, gold, rood/blauw
- Slogan: "Draai de schijf. Verover het doel."
- Verwant aan Apsis Orbital Sandbox (gravity/trails)

## Structuur

- `src/` de broncode (engine, schermen, dex, stijlen); `npm run dev` om te spelen tijdens het ontwikkelen, `npm run build` voor de site
- `public/` bestanden die ongewijzigd op de site komen, zoals `public/art/` met de figuurplaatjes
- `docs/` documentatie:
  - [Architectuur](docs/ARCHITECTUUR.md)
  - [Spelregels](docs/REGELS.md)
  - [Roadmap](docs/ROADMAP.md)
  - [Onlinemodus](docs/ONLINE.md)
  - [Samenwerkingslog](docs/LOG.md)
  - [Palet](docs/palet.md)
- `print/` printbestanden voor het bordspel

## Meewerken

AI-medewerkers (en mensen): lees eerst [AGENTS.md](AGENTS.md).
