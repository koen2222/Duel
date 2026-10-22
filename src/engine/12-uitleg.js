// ===== "Hoe speel je" — de regels zoals ze ECHT in deze code zitten =====
const HELP_NL = [
  { h:'Het doel', p:[
    'Je wint door met één van je figuren op het <b>doelpunt van je tegenstander</b> te eindigen — de gloeiende cirkel aan de overkant.',
    'Je wint ook als je tegenstander <b>niets meer kan doen</b>, of als zijn <b>bedenktijd</b> op is.',
    'Je wint <b>niet</b> door alle vijanden te verslaan. Verslagen figuren komen namelijk gewoon terug.' ]},
  { h:'Je beurt: één actie', p:[
    'Per beurt doe je <b>precies één ding</b>: een figuur verplaatsen, een figuur inzetten vanaf de zijkant, of met een figuur aanvallen.',
    'Een <b>kaart</b> (rechtsonder op tafel) kost géén actie — je mag er één per beurt spelen. Speel hem <b>vóór</b> je zet, want zodra je zet erop zit gaat de beurt vanzelf door.',
    'De kaarten van je tegenstander liggen linksboven met de rug omhoog: je ziet wel hoevéél hij er heeft, niet welke.',
    'De allereerste zet van het potje kost <b>1 MP extra</b>, zodat wie begint geen gratis voorsprong krijgt.' ]},
  { h:'Je moet elke beurt iets doen', p:[
    'Passen bestaat niet: elke beurt verplaats je één figuur, of je zet er één in. Kun je helemaal <b>niets</b> meer, dan verlies je.',
    'Dat kan lelijk uitpakken: staat je laatste figuur op je eigen doel en kun je niemand meer inzetten, dan móét je er toch vanaf stappen. Dat is geen bug — zo werkt het in Duel ook.',
    'De tegenstander kan dat afdwingen door <b>al je startpunten te bezetten</b>. De kaart <b>Tegenaanval</b> is daar precies voor: zolang dat zo is krijgen je figuren +1 MP om eruit te breken.' ]},
  { h:'Bewegen en inzetten', p:[
    'Elk figuur heeft <b>MP</b> (het gouden getal): zoveel punten mag hij per beurt afleggen.',
    'Inzetten doe je via je eigen <b>entry-punten</b> in de hoeken. Dat kost 1 MP; met je resterende MP mag je meteen doorlopen naar een leeg punt.',
    'Je kunt niet op een bezet punt landen. Sommige figuren hebben een ability waarmee ze er wél <b>doorheen</b> lopen.' ]},
  { h:'Gevechten: de draaischijf', p:[
    'Loop je op een vijand af, dan draaien <b>beide schijven</b>. Waar de pijl landt, bepaalt wat er gebeurt.',
    'De grootte van een vak is precies de kans erop — een groot wit vak betekent dus vaak raak.',
    'Wil je een schijf van tevoren zien? <b>Houd een figuur even vast</b> op het bord — ook die van je tegenstander. Je ziet dan de schijf zoals hij nú draait, inclusief het effect van een status.' ]},
  { h:'Wat je ziet tijdens een gevecht', p:[
    'Zodra beide wielen stilstaan <b>licht het vak op dat telt</b>. Meestal is dat het vak onder de pijl — maar met <b>Verwarring</b> of <b>Scherpschutter</b> schuift het geldende vak een plek op, en dan licht het vak op dat écht meedoet.',
    'Daarna vliegt er iets van de aanvaller naar de verdediger: een vonk, een golf, een vlam, bliksem — wat er vliegt hangt af van de <b>naam</b> van de aanval die je draaide.',
    'Blokkeer je met blauw, dan vangt een <b>schild</b> de klap op. Draai je rood, dan blijft er <b>MIS</b> boven je hoofd hangen. Wie het niet overleeft licht wit op en valt om.',
    'Na afloop slaat de klap ook nog in <b>op het bord</b>, op het punt waar hij landt. Vuur, hamer en bliksem laten een krater achter die langzaam vervaagt.',
    'Hoeft dit allemaal niet? Zet de <b>animatiesnelheid</b> in de instellingen op snel of uit.' ]},
  { h:'De vijf kleuren', swatches:[
    ['#e5e7eb','<b>Wit — aanval.</b> Het getal is de kracht. Hoogste getal wint; gelijk = niemand valt.'],
    ['#fbbf24','<b>Goud — doorbraak.</b> Slaat dwars door paars, blauw én mis heen. Alleen een sterkere aanval stopt hem.'],
    ['#3b82f6','<b>Blauw — verdediging.</b> Blokt wit en paars. Verliest wél van goud.'],
    ['#8b5cf6','<b>Paars — vloek.</b> Geen schade, maar een status. Twee paarse tegen elkaar: de meeste sterren wint.'],
    ['#ef4444','<b>Rood — mis.</b> Je doet niets. De ander kan je wel raken.'] ]},
  { h:'Statussen', p:[
    'Een figuur kan <b>één status tegelijk</b> hebben; een nieuwe vervangt de oude.',
    '<b>Gif</b> verzwakt je aanvallen, <b>zwaar gif</b> nog meer — en aan het begin van jouw beurt is een vergiftigd figuur op het veld <b>KO</b>. <b>Brand</b> maakt aanvallen van 10 of minder een mis en haalt 10 van je schade af. <b>Verlamming</b> maakt je kleinste aanval een mis.',
    '<b>Verwarring</b> laat de schijf één vakje verspringen. <b>Slaap</b> houdt je stil tot een bondgenoot naast je staat. <b>Bevroren</b> laat je wel lopen maar niet aanvallen, en gaat na één gevecht vanzelf weg.',
    'Genezen doe je met de kaart <b>Genezing</b>, via het P.C., of met een ability.',
    '<b>Wacht</b> is geen gewone status: het figuur blijft op het bord maar mag de volgende beurt niet lopen of vechten. Wacht gaat vanzelf weg ná die overgeslagen beurt.' ]},
  { h:'Omsingelen', p:[
    'Een figuur gaat KO als de <b>tegenstander alle punten bezet</b> waar hij heen zou kunnen. Zonder gevecht.',
    'Ingesloten raken door je <b>eigen</b> figuren is geen KO — dan kun je alleen niet meer lopen.' ]},
  { h:'P.C.', p:[
    'Verslagen figuren gaan naar het <b>P.C.</b> (herstelcentrum). Aan het begin van je volgende beurt komen ze terug op de zijlijn, statussen gewist, level behouden.',
    'Met de kaart <b>Herrijzenis</b> haal je iemand meteen uit het P.C., ook midden in een beurt.' ]},
  { h:'Evolueren', p:[
    'Elk figuur hoort bij een <b>evolutieketen</b> — meestal common via uncommon naar rare. Sommige, zoals Pluimstaart, splitsen in drie richtingen: je hangt één tak eronder.',
    'Je stelt <b>alleen basisvormen</b> op. Een geëvolueerde vorm koop je niet om hem neer te zetten, maar om hem te kúnnen worden — je verdient hem tijdens het potje.',
    'Om te kunnen evolueren moet je <b>allebei de figuren bezitten</b>. Zet de basisvorm in je team en hang z\'n evolutie eronder in de sleuf die dan verschijnt. Hangt de derde vorm er óók onder, dan kan hij in hetzelfde potje <b>twee keer</b> evolueren. Een figuur dat klaar is krijgt een <b>blauw stipje</b>.',
    'Tijdens het potje evolueert hij zodra hij een <b>gevecht wint</b> — of hij de ander nou verslaat of van z\'n plek verdringt. Je mag <b>weigeren</b>: dan groeit z\'n huidige schijf gewoon een level.',
    'Wie mid-potje evolueert krijgt een bonus die je NIET krijgt als je met de eindvorm begint: <b>+10 op elk wit en goud vak</b> en <b>+1 ★ op elk paars vak</b>. Klein beginnen en doorgroeien loont dus.' ]},
  { h:'Sterker worden', p:[
    'Versla je een vijand, dan gaat je figuur <b>een level omhoog</b> (tot level 4): zijn sterkste aanval groeit met 8/96 van het wiel en er verdwijnt evenveel mis.',
    'In de <b>Collectie</b> kun je units met credits permanent upgraden. Die levels blijven voor altijd.' ]},
  { h:'Je kaarten', p:[
    'Elke kaart heeft een <b>kostprijs</b> van 1, 2 of 3 punten. Je mag voor maximaal <b>8 punten</b> aan kaarten meenemen — dus veel goedkope of een paar dure.',
    'Er zijn vijf soorten: <b>herstel</b> (statussen wissen, iemand uit het P.C. halen), <b>draaien</b> (jij of je tegenstander moet opnieuw draaien), <b>gevecht</b> (meer schade, of juist niet verslagen kunnen worden), <b>beweging</b> (terugroepen, wisselen, springen) en <b>bijzonder</b>.',
    '<b>Verworp</b> zet iemand van de zijlijn neer, één vak naast je entry. <b>Doelwacht</b> teleporteert een eigen figuur naar je vrije doel. Beide beëindigen je beurt.',
    'Elke kaart werkt <b>één keer per potje</b>. Met <b>Hergebruik</b> maak je al je gebruikte kaarten weer bruikbaar.' ]},
  { h:'Abilities', p:[
    'Sommige figuren hebben een <b>ability</b>: een eigen kracht die vanzelf werkt, bijvoorbeeld door units heen lopen, buren extra MP geven, of een vijand vergiftigen die met ze vecht.',
    'Je ziet de ability van elke unit in de <b>Collectie</b>, onder de schijf.' ]},
  { h:'De klok', p:[
    'Elke speler heeft <b>bedenktijd</b> (standaard 5 minuten, net als in Duel). Je klok loopt alleen tijdens je eigen beurt en staat stil tijdens gevechten.',
    'Is je tijd op, dan verlies je. Zo loopt een potje nooit eindeloos vast. Je kunt de kloktijd aanpassen bij <b>Instellingen</b>.' ]},
];

const HELP_EN = [
  { h:'The goal', p:[
    'You win by ending on your <b>opponent’s goal</b> — the glowing circle on their side.',
    'You also win if your opponent <b>cannot act</b>, or if their <b>think time</b> runs out.',
    'You do <b>not</b> win by knocking out every foe. Knocked-out figures come back.' ]},
  { h:'Your turn: one action', p:[
    'Each turn you do <b>exactly one thing</b>: move a figure, send one in from the side, or attack with a figure.',
    'A <b>plate</b> (bottom-right of the table) costs no action — you may play one per turn. Play it <b>before</b> you move, because as soon as your move lands the turn passes.',
    'Your opponent’s plates sit top-left face-down: you see how many, not which.',
    'The very first move of the match costs <b>1 extra MP</b>, so going first is not a free lead.' ]},
  { h:'You must act every turn', p:[
    'Passing is not allowed: every turn you move a figure, or you send one in. If you can do <b>nothing</b> at all, you lose.',
    'That can sting: if your last figure is on your own goal and you cannot send anyone in, you still have to step off. That is not a bug — the original disc duel works the same way.',
    'The opponent can force this by <b>occupying all your entry points</b>. The plate <b>Counter</b> exists for that: while that is true, your figures gain +1 MP to break out.' ]},
  { h:'Moving and sending in', p:[
    'Every figure has <b>MP</b> (the gold number): how many points it may travel this turn.',
    'You send in through your own <b>entry points</b> in the corners. That costs 1 MP; leftover MP can walk onto an empty point right away.',
    'You cannot land on an occupied point. Some figures have an ability that lets them walk <b>through</b> others.' ]},
  { h:'Battles: the spinning disc', p:[
    'Walk onto an enemy and <b>both discs</b> spin. Where the pointer lands decides what happens.',
    'The size of a wedge is exactly its chance — a big white wedge means you often hit.',
    'Want to see a disc first? <b>Hold a figure</b> on the board — including the opponent’s. You see the disc as it spins now, including status.' ]},
  { h:'What you see in a battle', p:[
    'Once both wheels stop, <b>the wedge that counts lights up</b>. Usually that is the one under the pointer — but <b>Confusion</b> or <b>True Aim</b> shift the counting wedge, and then the real one lights up.',
    'Then something flies from attacker to defender: a spark, a wave, a flame, lightning — what flies depends on the <b>name</b> of the attack you spun.',
    'If you block with blue, a <b>shield</b> catches the hit. Spin red and <b>MISS</b> hangs over your head. Whoever does not survive flashes white and falls.',
    'Afterwards the hit also lands <b>on the board</b>, on the point it struck. Fire, hammer and lightning leave a crater that fades.',
    'Don’t need all that? Set <b>animation speed</b> in Settings to fast or off.' ]},
  { h:'The five colours', swatches:[
    ['#e5e7eb','<b>White — attack.</b> The number is power. Highest wins; a tie means nobody falls.'],
    ['#fbbf24','<b>Gold — breakthrough.</b> Cuts through purple, blue and miss. Only a stronger attack stops it.'],
    ['#3b82f6','<b>Blue — defence.</b> Blocks white and purple. Still loses to gold.'],
    ['#8b5cf6','<b>Purple — curse.</b> No damage, but a status. Two purples: most stars wins.'],
    ['#ef4444','<b>Red — miss.</b> You do nothing. The other can still hit you.'] ]},
  { h:'Statuses', p:[
    'A figure can have <b>one status at a time</b>; a new one replaces the old.',
    '<b>Poison</b> weakens your attacks, <b>badly poisoned</b> even more — and at the start of your turn a poisoned figure on the field is <b>KO</b>. <b>Burn</b> turns attacks of 10 or less into miss and subtracts 10 damage. <b>Paralysis</b> turns your smallest attack into miss.',
    '<b>Confusion</b> shifts the disc one wedge. <b>Sleep</b> keeps you still until an ally stands next to you. <b>Frozen</b> lets you walk but not attack, and wears off after one battle.',
    'Heal with the plate <b>Cleanse</b>, via the P.C., or with an ability.',
    '<b>Wait</b> is not a normal status: the figure stays on the board but may not walk or fight next turn. Wait wears off after that skipped turn.' ]},
  { h:'Surround', p:[
    'A figure is KO if the <b>opponent occupies every point</b> it could move to. No battle.',
    'Being boxed in by your <b>own</b> figures is not a KO — you just cannot walk.' ]},
  { h:'P.C.', p:[
    'Knocked-out figures go to the <b>P.C.</b> (recovery). At the start of your next turn they return to the bench, statuses cleared, level kept.',
    'The plate <b>Revival</b> pulls someone out of the P.C. immediately, even mid-turn.' ]},
  { h:'Evolving', p:[
    'Every figure belongs to an <b>evolution line</b> — usually common through uncommon to rare. Some, like Plumetail, split three ways: you hang one branch underneath.',
    'You field <b>base forms only</b>. You do not buy an evolved form to place it — you earn it during the match.',
    'To evolve you must <b>own both figures</b>. Put the base form in your team and hang its evolution in the slot that appears. Hang the third form too and it can evolve <b>twice</b> in the same match. A ready figure gets a <b>blue dot</b>.',
    'During the match it evolves when it <b>wins a battle</b> — whether it knocks the other out or pushes it off its spot. You may <b>refuse</b>: then its current disc simply levels up.',
    'Whoever evolves mid-match gets a bonus you do NOT get if you start as the final form: <b>+10 on every white and gold wedge</b> and <b>+1 ★ on every purple wedge</b>. Starting small and growing pays off.' ]},
  { h:'Getting stronger', p:[
    'Knock out an enemy and your figure <b>gains a level</b> (up to 4): its strongest attack grows by 8/96 of the wheel and the same amount of miss disappears.',
    'In the <b>Collection</b> you can upgrade figures with credits permanently. Those levels stay forever.' ]},
  { h:'Your plates', p:[
    'Each plate has a <b>cost</b> of 1, 2 or 3. You may bring plates totalling at most <b>8 points</b> — lots of cheap ones or a few expensive ones.',
    'There are five kinds: <b>recovery</b> (clear status, pull from the P.C.), <b>spin</b> (you or your opponent must respin), <b>battle</b> (more damage, or cannot be KO’d), <b>movement</b> (recall, swap, jump) and <b>special</b>.',
    '<b>Long Toss</b> places someone from the bench one point next to your entry. <b>Goal Guard</b> teleports one of yours onto your empty goal. Both end your turn.',
    'Each plate works <b>once per match</b>. <b>Recycle</b> makes all your spent plates usable again.' ]},
  { h:'Abilities', p:[
    'Some figures have an <b>ability</b>: a power that works on its own, such as walking through units, giving neighbours extra MP, or poisoning an enemy that battles them.',
    'You see each figure’s ability in the <b>Collection</b>, under the disc.' ]},
  { h:'The clock', p:[
    'Each player has <b>think time</b> (default 5 minutes). Your clock only runs on your turn and pauses during battles.',
    'When your time is up, you lose. A match never stalls forever. You can change the clock in <b>Settings</b>.' ]},
];

function helpSections() { return isEn() ? HELP_EN : HELP_NL; }

function renderHelp() {
  const body = document.getElementById('help-body'); body.innerHTML = '';
  for (const sec of helpSections()) {
    const d = document.createElement('div'); d.className = 'help-sec';
    let html = `<h3>${sec.h}</h3>`;
    for (const p of (sec.p || [])) html += `<p>${p}</p>`;
    for (const [color, txt] of (sec.swatches || [])) {
      html += `<div class="help-key"><div class="help-swatch" style="background:${color}"></div><div>${txt}</div></div>`;
    }
    d.innerHTML = html;
    body.appendChild(d);
  }
}

