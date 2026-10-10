// Startpunt van Schijfduel.
// De engine is één klassiek script met globale functies (de engine zelf en de
// rooktest rekenen daarop). Daarom voeren we hem uit als gewone scripttekst,
// precies zoals de oude Grok-build deed, en niet als ES-module.
import './styles.css';
import dex from './dex.json';
import engine from './engine.js?raw';
import { initOnline } from './online.js';

window.RONDEL_DEX = dex;
const script = document.createElement('script');
script.id = 'rondel-engine-script';
script.text = engine;
document.body.appendChild(script);
// Online spelen (kamercode); de versie-hash zorgt dat beide spelers dezelfde engine draaien.
initOnline(engine + JSON.stringify(dex));
