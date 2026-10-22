// Startpunt van Schijfduel.
// De engine is één klassiek script met globale functies (de engine zelf en de
// rooktest rekenen daarop). Daarom voeren we hem uit als gewone scripttekst,
// precies zoals de oude Grok-build deed, en niet als ES-module.
// De engine staat in delen in src/engine/ (zie src/engine/README.md); die worden
// hier op volgorde van bestandsnaam aan elkaar geplakt tot dat ene script.
import './styles.css';
import dex from './dex.json';
import { initOnline } from './online.js';

const delen = import.meta.glob('./engine/*.js', { query: '?raw', import: 'default', eager: true });
const engine = Object.keys(delen).sort().map((k) => delen[k]).join('');

window.RONDEL_DEX = dex;
const script = document.createElement('script');
script.id = 'rondel-engine-script';
script.text = engine;
document.body.appendChild(script);
// Online spelen (kamercode); de versie-hash zorgt dat beide spelers dezelfde engine draaien.
initOnline(engine + JSON.stringify(dex));
