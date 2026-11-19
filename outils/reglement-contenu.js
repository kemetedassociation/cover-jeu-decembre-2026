// Texte du règlement, source unique du fichier Word et de la page web.
// Une ligne = un paragraphe. « - » en début de ligne = puce. **texte** = gras.
// Tout ce qui est entre crochets reste à compléter.

const INSTAGRAM = '@cover_besancon';
const EMAIL = 'coverbesancon25@gmail.com';
const ADRESSE = '6 b rue Pasteur, Passages Pasteur, 25000 Besançon';

module.exports = {
  titre: 'Règlement du jeu « La roulette COVER »',
  sousTitre: 'Jeu gratuit et sans obligation d\'achat, du samedi 5 au samedi 12 décembre 2026',
  avertissement: [
    'À faire relire avant le samedi 5 décembre 2026.',
    'Ce règlement est une base de travail, pas un avis juridique : faites-le relire par un professionnel (avocat, commissaire de justice ou votre expert-comptable) et complétez toutes les mentions entre crochets. Supprimez cet encadré avant impression.',
  ],
  articles: [
    { titre: 'Article 1. Organisateur', lignes: [
      `Le jeu est organisé par **[raison sociale de COVER]**, [forme juridique] au capital de [montant] €, immatriculée au RCS de [ville] sous le numéro [numéro SIREN], dont le siège est situé [adresse du siège], exploitant la boutique COVER, ${ADRESSE} (ci-après « COVER » ou « l'organisateur »).`,
      `Contact : ${EMAIL}, 03 81 58 00 33.`,
    ] },
    { titre: 'Article 2. Dates et lieu', lignes: [
      'Le jeu se déroule du samedi 5 décembre 2026 à l\'ouverture de la boutique au samedi 12 décembre 2026 à sa fermeture, aux heures d\'ouverture habituelles, uniquement dans la boutique COVER des Passages Pasteur à Besançon.',
      'Le tirage au sort du grand lot a lieu le dimanche 13 décembre 2026, dans les conditions de l\'article 8.',
    ] },
    { titre: 'Article 3. Conditions de participation', lignes: [
      'Le jeu est gratuit et sans obligation d\'achat. Il est ouvert à toute personne physique majeure (18 ans ou plus à la date de participation), à l\'exception des salariés, stagiaires et dirigeants de COVER ainsi que des membres de leur foyer.',
      'Chaque personne ne peut remplir qu\'une seule fiche de participation pendant toute la durée du jeu. COVER peut demander une pièce d\'identité pour vérifier l\'âge et l\'identité d\'un participant, notamment au moment de la remise du grand lot.',
      'Participer implique d\'accepter le présent règlement sans réserve.',
    ] },
    { titre: 'Article 4. Déroulement du jeu et chances de gain', lignes: [
      '**Fiche.** Le participant remplit une fiche papier numérotée de 001 à 300, disponible en boutique : nom, prénom, téléphone, e-mail facultatif. Il coche la case obligatoire « J\'ai 18 ans ou plus et j\'ai pris connaissance du règlement », détache le talon numéroté qu\'il conserve, puis dépose sa fiche dans l\'urne prévue à cet effet.',
      '**Roulette.** Le participant joue ensuite une fois à la roulette affichée sur une tablette en boutique, en saisissant le numéro de sa fiche. Un numéro de fiche ne permet qu\'un seul tour, sauf tour bonus prévu à l\'article 6.',
      'La roulette comporte 12 cases : 3 cases gagnantes « -5 % » et 9 cases perdantes « Dommage ». À chaque tour, le résultat est tiré au hasard par le logiciel avant l\'animation, chaque case ayant exactement la même probabilité d\'être tirée. Le participant a donc 3 chances sur 12 (soit 25 %) de gagner un bon de réduction à chaque tour. La roue s\'arrête sur la case tirée.',
      'Le jeu de la roulette est indépendant du tirage au sort : gagner ou perdre à la roulette ne change rien aux chances de gagner le grand lot. Le talon n\'est pas nécessaire pour recevoir le grand lot.',
    ] },
    { titre: 'Article 5. Bon de réduction de 5 %', lignes: [
      'Une case gagnante donne droit à un bon de réduction de 5 % portant un numéro unique (B-001, B-002, etc.). Ce numéro s\'affiche à l\'écran et est enregistré par COVER avec le numéro de fiche. Le vendeur remet aussitôt au gagnant un bon papier portant ce numéro et la date limite. En caisse, le vendeur vérifie le numéro du bon dans le registre du jeu.',
      '- Le bon est valable 7 jours calendaires, jour de la partie compris. La date limite s\'affiche à l\'écran au moment du gain.',
      '- Il s\'utilise en un seul passage en caisse, dans la boutique COVER des Passages Pasteur, sur les articles de ce passage.',
      '- Il n\'est pas cumulable avec une autre réduction, promotion ou un autre bon.',
      '- Il ne peut être ni échangé contre de l\'argent, ni rendu en monnaie, ni prolongé, ni remplacé s\'il n\'a pas été utilisé à temps.',
      '- [Exclusions éventuelles à préciser, par exemple cartes cadeaux ou articles déjà remisés.]',
    ] },
    { titre: 'Article 6. Tour bonus par partage', lignes: [
      `Chaque participant peut obtenir un tour de roulette supplémentaire, une seule fois, en partageant pendant la durée du jeu une story Instagram ou une publication TikTok qui cite le compte COVER (${INSTAGRAM} sur Instagram, [compte TikTok de COVER] sur TikTok). Il n'est pas demandé de mentionner ou d'identifier d'autres personnes.`,
      'Le vendeur vérifie la publication sur le téléphone du participant, puis débloque le tour bonus avec son code personnel. Un participant joue donc au maximum 2 tours de roulette au total.',
      'Le tour bonus ne donne aucune chance supplémentaire au tirage au sort du grand lot : une fiche correspond à une seule chance, quel que soit le nombre de tours joués.',
    ] },
    { titre: 'Article 7. Grand lot', lignes: [
      'Le grand lot est **une doudoune de la marque Calvin Klein, d\'une valeur commerciale de 200 € TTC** (prix de vente public constaté en boutique à la date du présent règlement). [Modèle, coloris et taille à préciser, ou « taille au choix du gagnant selon le stock disponible ».]',
      'Il y a un seul grand lot. Il ne peut être ni échangé, ni repris, ni converti en argent. Si le lot devient indisponible pour une raison indépendante de la volonté de COVER, COVER peut le remplacer par un article de valeur égale ou supérieure.',
    ] },
    { titre: 'Article 8. Tirage au sort', lignes: [
      'Le tirage au sort a lieu le dimanche 13 décembre 2026 à [heure], à [lieu]. Il est réalisé par [nom, prénom et qualité de la personne qui réalise le tirage], [en présence de : nom et qualité du ou des témoins, ou du commissaire de justice le cas échéant].',
      'Toutes les fiches déposées dans l\'urne pendant la durée du jeu participent, chacune avec une seule chance. Une fiche est écartée si elle est incomplète, illisible, si la case de majorité n\'est pas cochée, ou si la même personne a rempli plusieurs fiches (dans ce cas, toutes ses fiches sont écartées).',
      'La première fiche valide tirée désigne le gagnant. Deux autres fiches valides sont ensuite tirées pour désigner, dans l\'ordre, le premier et le second suppléant.',
      'Le gagnant est prévenu par téléphone ou par e-mail à partir du lundi 14 décembre 2026. Il dispose de 15 jours à compter du tirage pour retirer son lot à la boutique, sur présentation d\'une pièce d\'identité correspondant au nom de la fiche.',
      'Si le gagnant ne peut pas être joint, ne remplit pas les conditions du règlement ou ne retire pas son lot dans ce délai, il perd son lot, qui revient au premier suppléant, puis, dans les mêmes conditions, au second suppléant. Chaque suppléant dispose à son tour de 15 jours à compter du jour où COVER le prévient. Si aucun ne retire le lot, celui-ci reste la propriété de COVER.',
      'Le nom du gagnant n\'est publié qu\'avec son accord écrit.',
    ] },
    { titre: 'Article 9. Données personnelles', lignes: [
      `Le responsable du traitement est [nom légal de COVER], ${ADRESSE}. Les données recueillies (sur la fiche et, de façon facultative, sur la tablette) sont traitées uniquement par COVER et ne sont ni vendues ni cédées.`,
      '- **Gestion du jeu :** nom, prénom, téléphone et e-mail servent à organiser le tirage au sort et à contacter le gagnant et les suppléants. Ces données sont conservées 3 mois après le tirage, puis détruites, fiches papier comprises.',
      '- **Offres et nouveautés :** uniquement si le participant coche la case dédiée, non cochée par défaut, sur la fiche ou sur la tablette, COVER utilise son e-mail et son téléphone pour lui envoyer ses offres et nouveautés par e-mail et SMS. Ces coordonnées sont conservées 3 ans après le dernier contact du participant avec COVER. Cocher ou non cette case n\'a aucun effet sur la participation au jeu. COVER garde la date, le texte exact de la case cochée et l\'origine du consentement (« roulette COVER décembre 2026 » ou fiche papier) pour pouvoir en apporter la preuve.',
      `Chaque participant peut à tout moment retirer son consentement (lien de désinscription dans chaque e-mail, réponse STOP aux SMS), et demander l'accès à ses données, leur correction, leur suppression ou s'opposer à leur usage, en écrivant à ${EMAIL}. Il peut aussi déposer une réclamation auprès de la CNIL (www.cnil.fr).`,
    ] },
    { titre: 'Article 10. Réseaux sociaux', lignes: [
      'Ce jeu n\'est ni géré ni sponsorisé par Instagram, TikTok ou Meta, et n\'est associé d\'aucune manière à ces plateformes. Les informations fournies par les participants le sont à COVER et non à ces plateformes.',
    ] },
    { titre: 'Article 11. Modification, annulation et fraude', lignes: [
      'COVER peut écourter, prolonger, modifier ou annuler le jeu en cas de force majeure ou de circonstance indépendante de sa volonté (fermeture administrative, panne de la tablette, sinistre, etc.). Toute modification fait l\'objet d\'un avenant affiché en boutique et ne peut réduire les droits déjà acquis par les participants.',
      'En cas de fraude ou de tentative de fraude (fausse identité, fiches multiples, utilisation d\'un numéro de fiche appartenant à un autre participant, publication supprimée juste après le déblocage du tour bonus, etc.), COVER peut exclure le participant, annuler ses bons de réduction et sa participation au tirage au sort, sans préjudice de poursuites.',
      'COVER ne peut être tenue responsable d\'un dysfonctionnement technique de la tablette indépendant de sa volonté. En cas de panne pendant un tour, le tour est rejoué.',
    ] },
    { titre: 'Article 12. Consultation du règlement', lignes: [
      `Le règlement peut être consulté gratuitement en boutique, en caisse, pendant toute la durée du jeu, ainsi qu'en ligne via le QR code affiché en boutique. Il est envoyé gratuitement à toute personne qui en fait la demande par e-mail à ${EMAIL} ou par courrier à COVER, ${ADRESSE}, jusqu'au 31 décembre 2026.`,
    ] },
    { titre: 'Article 13. Loi applicable et litiges', lignes: [
      `Le présent règlement est soumis à la loi française. Toute réclamation doit être adressée par écrit à COVER, à ${EMAIL} ou par courrier à l'adresse de la boutique, au plus tard le 31 janvier 2027. COVER et le participant cherchent d'abord une solution amiable. Le participant consommateur peut également recourir gratuitement au médiateur de la consommation [nom et coordonnées du médiateur de COVER]. À défaut d'accord, le litige est porté devant les tribunaux compétents.`,
    ] },
  ],
  fin: [
    'Fait à Besançon, le [date].',
    '[Nom et qualité du signataire], pour [raison sociale de COVER]',
  ],
};
