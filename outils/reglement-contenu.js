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
      'Chaque personne participe avec un seul numéro de téléphone, qui lui est propre. Un numéro de téléphone correspond à un seul joueur. COVER peut demander une pièce d\'identité pour vérifier l\'âge et l\'identité d\'un participant, notamment au moment de la remise d\'un lot.',
      'Participer implique d\'accepter le présent règlement sans réserve.',
    ] },
    { titre: 'Article 4. Inscription, déroulement du jeu et chances de gain', lignes: [
      '**Inscription.** Le participant s\'inscrit sur la tablette mise à disposition en boutique. Il indique obligatoirement son numéro de téléphone (10 chiffres) et, s\'il le souhaite, son prénom, son nom et son e-mail. Il coche la case obligatoire « J\'ai 18 ans ou plus et j\'ai pris connaissance du règlement ». La tablette lui attribue alors un numéro de joueur (001, 002, etc.), qui s\'affiche à l\'écran.',
      '**Roulette.** Une fois inscrit, le participant joue une fois à la roulette. Un numéro de téléphone ne permet qu\'un seul tour, sauf tour bonus prévu à l\'article 6.',
      'La roulette comporte 12 cases : 3 cases « -5 % », 1 case « Doudoune 99,99 € » et 8 cases perdantes « Dommage ». À chaque tour, le résultat est tiré au hasard par le logiciel avant l\'animation, chaque case ayant exactement la même probabilité d\'être tirée. À chaque tour, le participant a donc 3 chances sur 12 (25 %) de gagner un bon de réduction de 5 % et 1 chance sur 12 (environ 8,3 %) de gagner l\'offre doudoune à 99,99 €. La roue s\'arrête sur la case tirée.',
      'La roulette est indépendante du tirage au sort de l\'article 8 : gagner ou perdre à la roulette ne change rien aux chances de gagner le grand lot.',
    ] },
    { titre: 'Article 5. Lots de la roulette', lignes: [
      'Chaque case gagnante donne droit à un bon portant un numéro unique, qui s\'affiche à l\'écran et est enregistré par COVER avec le numéro de joueur : B-001, B-002, etc. pour le bon de 5 %, D-001, D-002, etc. pour l\'offre doudoune. Le vendeur remet aussitôt au gagnant un bon papier portant ce numéro et la date limite. En caisse, le vendeur vérifie le numéro du bon dans le registre du jeu.',
      '**Bon de 5 %** : 5 % de réduction sur les articles d\'un passage en caisse.',
      '**Offre doudoune** : l\'achat d\'une doudoune Calvin Klein [modèle(s) concerné(s)] au prix de 99,99 € TTC au lieu de 199,99 € TTC, prix de vente pratiqué en boutique [à vérifier : prix le plus bas pratiqué pendant les 30 jours précédant le jeu]. Une seule doudoune par bon, [dans la limite de X pièces disponibles à ce prix / taille selon le stock disponible]. Le gagnant reste libre de ne pas utiliser l\'offre.',
      'Pour les deux bons :',
      '- valable 7 jours calendaires, jour de la partie compris ; la date limite s\'affiche à l\'écran au moment du gain ;',
      '- utilisable en un seul passage en caisse, dans la boutique COVER des Passages Pasteur ;',
      '- non cumulable avec une autre réduction, promotion ou un autre bon ;',
      '- ni échangeable contre de l\'argent, ni rendu en monnaie, ni prolongé, ni remplacé s\'il n\'a pas été utilisé à temps ;',
      '- [exclusions éventuelles à préciser pour le bon de 5 %, par exemple cartes cadeaux ou articles déjà remisés].',
    ] },
    { titre: 'Article 6. Défi photo : tour bonus et inscription au tirage', lignes: [
      'Pendant la durée du jeu, le participant peut relever le défi photo :',
      `- s'abonner au compte Instagram ${INSTAGRAM} ;`,
      '- se prendre en photo dans la boutique COVER en portant un article de la boutique (un article essayé sur place suffit, aucun achat n\'est nécessaire) ;',
      '- publier cette photo en story ou en publication Instagram, ou sur TikTok, avec le mot-dièse #coverbesancon.',
      'Le vendeur vérifie l\'abonnement et la publication sur le téléphone du participant, puis valide le défi sur la tablette avec son code personnel. Il n\'est pas demandé de mentionner ou d\'identifier d\'autres personnes.',
      'Le défi validé donne droit, une seule fois par participant, à un tour de roulette supplémentaire (soit 2 tours au maximum au total) et à l\'inscription au tirage au sort du grand lot (article 8), avec une seule chance par participant.',
      'Le participant publie sur son propre compte et reste seul responsable de sa publication. Si d\'autres personnes apparaissent sur la photo, il doit avoir leur accord. COVER ne réutilise pas la photo sans l\'accord écrit du participant.',
    ] },
    { titre: 'Article 7. Grand lot', lignes: [
      'Le grand lot est **une doudoune de la marque Calvin Klein, d\'une valeur commerciale de 199,99 € TTC** (prix de vente pratiqué en boutique). [Modèle, coloris et taille à préciser, ou « taille au choix du gagnant selon le stock disponible ».]',
      'Il y a un seul grand lot. Il ne peut être ni échangé, ni repris, ni converti en argent. Si le lot devient indisponible pour une raison indépendante de la volonté de COVER, COVER peut le remplacer par un article de valeur égale ou supérieure.',
    ] },
    { titre: 'Article 8. Tirage au sort', lignes: [
      'Le tirage au sort a lieu le dimanche 13 décembre 2026 à [heure], à [lieu]. Il est réalisé sur la tablette du jeu, qui tire au hasard parmi les participants inscrits au tirage, par [nom, prénom et qualité de la personne qui réalise le tirage], [en présence de : nom et qualité du ou des témoins, ou du commissaire de justice le cas échéant].',
      'Participent au tirage uniquement les joueurs dont le défi photo (article 6) a été validé pendant la durée du jeu, chacun avec une seule chance. Le premier joueur tiré est le gagnant. Deux autres joueurs sont ensuite tirés pour désigner, dans l\'ordre, le premier et le second suppléant.',
      'Le gagnant est prévenu par téléphone (appel ou SMS) au numéro utilisé pour jouer, à partir du dimanche 13 décembre 2026. Il dispose de 15 jours à compter du tirage pour retirer son lot à la boutique, sur présentation d\'une pièce d\'identité et du téléphone dont le numéro a servi à jouer.',
      'Si le gagnant ne peut pas être joint, ne remplit pas les conditions du règlement ou ne retire pas son lot dans ce délai, il perd son lot, qui revient au premier suppléant, puis, dans les mêmes conditions, au second suppléant. Chaque suppléant dispose à son tour de 15 jours à compter du jour où COVER le prévient. Si aucun ne retire le lot, celui-ci reste la propriété de COVER.',
      'Le nom du gagnant n\'est publié qu\'avec son accord écrit.',
    ] },
    { titre: 'Article 9. Données personnelles', lignes: [
      `Le responsable du traitement est [nom légal de COVER], ${ADRESSE}. Les données saisies sur la tablette (téléphone obligatoire ; prénom, nom et e-mail facultatifs) sont enregistrées sur la tablette du jeu et traitées uniquement par COVER. Elles ne sont ni vendues ni cédées.`,
      '- **Gestion du jeu :** le téléphone sert à attribuer le numéro de joueur, à éviter qu\'une même personne joue plusieurs fois, à vérifier les bons en caisse et à contacter le gagnant et les suppléants du tirage. Ces données sont conservées 3 mois après le tirage, puis effacées.',
      '- **Offres et nouveautés :** uniquement si le participant coche la case dédiée, non cochée par défaut, COVER utilise son e-mail et son téléphone pour lui envoyer ses offres et nouveautés par e-mail et SMS. Ces coordonnées sont conservées 3 ans après le dernier contact du participant avec COVER. Cocher ou non cette case n\'a aucun effet sur la participation au jeu. COVER garde la date, le texte exact de la case cochée et l\'origine du consentement (« roulette COVER décembre 2026 ») pour pouvoir en apporter la preuve.',
      `Chaque participant peut à tout moment retirer son consentement (lien de désinscription dans chaque e-mail, réponse STOP aux SMS), et demander l'accès à ses données, leur correction, leur suppression ou s'opposer à leur usage, en écrivant à ${EMAIL}. Il peut aussi déposer une réclamation auprès de la CNIL (www.cnil.fr).`,
    ] },
    { titre: 'Article 10. Réseaux sociaux', lignes: [
      'Ce jeu n\'est ni géré ni sponsorisé par Instagram, TikTok ou Meta, et n\'est associé d\'aucune manière à ces plateformes. Les informations fournies par les participants le sont à COVER et non à ces plateformes. Les publications restent soumises aux conditions d\'utilisation d\'Instagram et de TikTok.',
    ] },
    { titre: 'Article 11. Modification, annulation et fraude', lignes: [
      'COVER peut écourter, prolonger, modifier ou annuler le jeu en cas de force majeure ou de circonstance indépendante de sa volonté (fermeture administrative, panne de la tablette, sinistre, etc.). Toute modification fait l\'objet d\'un avenant affiché en boutique et ne peut réduire les droits déjà acquis par les participants.',
      'En cas de fraude ou de tentative de fraude (fausse identité, utilisation de plusieurs numéros de téléphone ou du numéro d\'une autre personne, publication supprimée juste après la validation du défi photo, etc.), COVER peut exclure le participant, annuler ses bons de réduction et sa participation au tirage au sort, sans préjudice de poursuites.',
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
