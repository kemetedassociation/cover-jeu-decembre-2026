# Roulette COVER, décembre 2026

Jeu en boutique COVER (Passages Pasteur, Besançon), du 5 au 12 décembre 2026, tirage le 13 décembre.

- `index.html` : règlement en ligne (cible du QR code de l'affiche). Généré, ne pas modifier à la main.
- `roulette.html` : la roue pour la tablette (fonctionne hors ligne après une première ouverture).
- `imprimer/` : bons papier (B pour -5 %, D pour la doudoune à 99,99 €), affiche A3 et chevalet A5. Plus de fiches papier : l'inscription se fait par téléphone sur la tablette.
- `outils/reglement-contenu.js` : texte du règlement. Après modification : `cd outils && npm i && node construire.js` (refait le Word sur le Bureau, la page web et le QR code).

Ne pas renommer ce dépôt : l'adresse est imprimée dans le QR code.
