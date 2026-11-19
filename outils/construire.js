// Fabrique le règlement (Word et page web) et le QR code, puis copie les fichiers à imprimer sur le Bureau.
// Usage : node outils/construire.js
const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel, LevelFormat,
  BorderStyle, ShadingType, Footer, PageNumber,
} = require('docx');
const R = require('./reglement-contenu');

const RACINE = path.join(__dirname, '..');
const BUREAU = '/Users/mass/Desktop/COVER SHOP/jeu-decembre-2026';
const URL_REGLEMENT = 'https://kemetedassociation.github.io/cover-jeu-decembre-2026/';
const ROUGE = 'C8102E';

// « **gras** » -> morceaux [{texte, gras}]
function morceaux(ligne) {
  return ligne.split(/(\*\*[^*]+\*\*)/).filter(Boolean).map((m) =>
    m.startsWith('**') ? { texte: m.slice(2, -2), gras: true } : { texte: m, gras: false });
}
const estPuce = (l) => l.startsWith('- ');
const sansPuce = (l) => (estPuce(l) ? l.slice(2) : l);

/* ---------- Word ---------- */
function paragrapheWord(ligne) {
  const runs = morceaux(sansPuce(ligne)).map((m) => new TextRun({ text: m.texte, bold: m.gras }));
  return estPuce(ligne)
    ? new Paragraph({ numbering: { reference: 'puces', level: 0 }, spacing: { after: 80, line: 280 }, children: runs })
    : new Paragraph({ spacing: { after: 120, line: 290 }, children: runs });
}

async function word() {
  const enfants = [
    new Paragraph({
      spacing: { after: 360 },
      shading: { type: ShadingType.CLEAR, color: 'auto', fill: 'FDECEF' },
      border: { left: { style: BorderStyle.SINGLE, size: 24, color: ROUGE, space: 8 } },
      children: [
        new TextRun({ text: R.avertissement[0] + ' ', bold: true, color: ROUGE }),
        new TextRun(R.avertissement[1]),
      ],
    }),
    new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun(R.titre)] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 360 }, children: [new TextRun({ text: R.sousTitre, bold: true, size: 24 })] }),
  ];
  for (const a of R.articles) {
    enfants.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(a.titre)] }));
    a.lignes.forEach((l) => enfants.push(paragrapheWord(l)));
  }
  enfants.push(new Paragraph({ spacing: { before: 360, after: 80 }, children: [new TextRun(R.fin[0])] }));
  enfants.push(new Paragraph({ spacing: { after: 120 }, children: [new TextRun(R.fin[1])] }));

  const pied = (opts) => new TextRun({ size: 16, color: '777777', ...opts });
  const doc = new Document({
    creator: 'COVER',
    title: R.titre,
    styles: {
      default: { document: { run: { font: 'Arial', size: 21 } } },
      paragraphStyles: [
        { id: 'Normal', name: 'Normal', quickFormat: true, run: { font: 'Arial', size: 21 } },
        { id: 'Title', name: 'Title', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { font: 'Arial', size: 40, bold: true, allCaps: true, color: '111111' },
          paragraph: { alignment: AlignmentType.CENTER, spacing: { before: 0, after: 120 }, keepNext: true } },
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { font: 'Arial', size: 24, bold: true, color: ROUGE, allCaps: true },
          paragraph: { spacing: { before: 300, after: 120 }, keepNext: true, outlineLevel: 0 } },
      ],
    },
    numbering: {
      config: [{ reference: 'puces', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 540, hanging: 270 } } } }] }],
    },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1300, bottom: 1300, left: 1300, right: 1300 } } },
      footers: {
        default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
          pied({ text: 'Règlement du jeu « La roulette COVER », décembre 2026. Page ' }),
          pied({ children: [PageNumber.CURRENT] }),
          pied({ text: ' sur ' }),
          pied({ children: [PageNumber.TOTAL_PAGES] }),
        ] })] }),
      },
      children: enfants,
    }],
  });
  const sortie = path.join(BUREAU, 'reglement_jeu_COVER_decembre_2026.docx');
  fs.writeFileSync(sortie, await Packer.toBuffer(doc));
  return sortie;
}

/* ---------- Page web ---------- */
const echap = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function html() {
  const enLigne = (l) => morceaux(l).map((m) => (m.gras ? `<strong>${echap(m.texte)}</strong>` : echap(m.texte))).join('');
  const articles = R.articles.map((a) => {
    let corps = '';
    let liste = false;
    for (const l of a.lignes) {
      if (estPuce(l) && !liste) { corps += '<ul>'; liste = true; }
      if (!estPuce(l) && liste) { corps += '</ul>'; liste = false; }
      corps += estPuce(l) ? `<li>${enLigne(sansPuce(l))}</li>` : `<p>${enLigne(l)}</p>`;
    }
    if (liste) corps += '</ul>';
    return `<section><h2>${echap(a.titre)}</h2>${corps}</section>`;
  }).join('\n');
  const modele = fs.readFileSync(path.join(__dirname, 'modele-reglement.html'), 'utf8');
  const page = modele
    .replace('{{TITRE}}', echap(R.titre))
    .replace('{{SOUS_TITRE}}', echap(R.sousTitre))
    .replace('{{ARTICLES}}', articles)
    .replace('{{FIN}}', R.fin.map((l) => `<p>${echap(l)}</p>`).join(''));
  fs.writeFileSync(path.join(RACINE, 'index.html'), page);
}

/* ---------- QR code ---------- */
async function qr() {
  const opts = { errorCorrectionLevel: 'M', margin: 2, color: { dark: '#111111', light: '#FFFFFF' } };
  const svg = await QRCode.toString(URL_REGLEMENT, { ...opts, type: 'svg' });
  fs.writeFileSync(path.join(BUREAU, 'qr_reglement.svg'), svg);
  await QRCode.toFile(path.join(BUREAU, 'qr_reglement.png'), URL_REGLEMENT, { ...opts, width: 1200 });
  // QR intégré dans l'affiche et le chevalet
  const af = path.join(RACINE, 'imprimer', 'affiche_chevalet.html');
  const contenu = fs.readFileSync(af, 'utf8').replace(/<div class="qr">[\s\S]*?<\/div>/g, `<div class="qr">${svg.replace(/<\?xml[^>]*>/, '')}</div>`);
  fs.writeFileSync(af, contenu);
}

(async () => {
  fs.mkdirSync(BUREAU, { recursive: true });
  const docx = await word();
  html();
  await qr();
  for (const f of ['roulette.html', 'manifest.webmanifest', 'icone-180.png', 'icone-192.png', 'icone-512.png']) fs.copyFileSync(path.join(RACINE, f), path.join(BUREAU, f));
  for (const f of fs.readdirSync(path.join(RACINE, 'imprimer'))) fs.copyFileSync(path.join(RACINE, 'imprimer', f), path.join(BUREAU, f));
  console.log('Word :', docx);
  console.log('Page web : index.html');
  console.log('QR :', URL_REGLEMENT);
})();
