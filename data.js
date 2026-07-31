// ============================================================
//  C'EST LE SEUL FICHIER À MODIFIER.
//  Ne touche pas à index.html ni style.css.
// ============================================================

// Ton nom et ton code ami (visible en haut de la page)
const trainerName = "NilamTacos";
const trainerCode = "1898 4790 6821";

// Date de dernière mise à jour (juste affichée, change-la à chaque event)
const dateMaj = "01/08/2026";

// -----------------------------------------------------------
// Pour chaque Pokémon :
//   name  → le nom affiché
//   id    → le numéro du Pokédex national (pour la photo automatique)
//           laisse "" (vide) si tu ne veux pas de photo
//   tags  → liste parmi :
//        - shiny
//        - location
//        - special
//        - event
//        - region
//        - pvp
//
//"shiny", "lucky", "pvp" (ou [] si aucun)
//
// Exemple : { name: "Pikachu", id: 25, tags: ["shiny"] }
//
//   notes    → (optionnel) texte libre affiché dans la popup au clic sur la ligne
//              (ex: précision, condition d'échange...). Laisse "" si rien à dire.
//   variants → (optionnel) liste d'autres formes du même Pokémon à montrer dans la
//              popup (ex: une version costumée en plus du shiny). Chaque entrée :
//              { label: "Nom affiché", gif: "nom-showdown", shiny: true/false }
//              Laisse [] si tu n'en as pas besoin.
//   images   → (optionnel) galerie de photos fixes affichées dans la popup — utile pour
//              les Pokémon costumés de Pokémon GO (pas de sprite animé disponible pour ceux-là).
//              Chaque entrée : { label: "Nom affiché", url: "https://..." }
//              (trouve l'image sur une fiche Pokédex Pokémon GO, ex. Serebii, clic droit →
//              copier l'adresse de l'image). Laisse [] si tu n'en as pas besoin.
//   spriteOffsetX → (optionnel) décalage horizontal en pixels du sprite animé si tu le
//              trouves mal centré (ex: -10 pour décaler vers la gauche, 10 vers la droite).
//              S'applique à la fois sur la ligne de la liste et dans la popup de détail.
// -----------------------------------------------------------

const introText = {
  fr: "Salut ! \nJe m'appelle Florent (ou Flo pour que ce soit plus simple). \nC'est ma première fois au Portugal ! \n\nTu trouveras ci-dessous la liste de ce que je recherche, et en swipant sur la droite, la liste de ce que je propose. \nCe n'est pas exclusif je peux être intéressé par d'autres choses ! \n\nN'hésite donc pas à me proposer un trade 🙂",
  en: "Hi ! \nMy name is Florent (Flo might be easier). \nFirst time here in Portugal ! \n\nYou can find below what I'm looking for, and by swiping to your right, what I can offer. \nThat's not exclusive so I could be interessed by something else ! \n\nAnyway, do not hesitate to ask for a trade 🙂",
  pt: "Olá ! \nChamo-me Florent (ou Flo, para simplificar). \nÉ a minha primeira vez em Portugal (só falo francês, inglês e um pouco de espanhol)! \n\nAbaixo encontrarás a lista do que procuro e, ao deslizar para a direita, a lista do que tenho para oferecer. \nNão é uma lista exaustiva, posso estar interessado noutras coisas! \n\nPor isso, não hesites em propor-me uma troca 🙂 🙂",
  es: "¡Hola! \nMe llamo Florent (o Flo, para simplificar). \nEntiendo español pero hace mucho tiempo que no lo he hablado jaja \n¡Es la primera vez que vengo a Portugal! \n\nAbajo encontrarás la lista de lo que busco y, si deslizas hacia la derecha, la lista de lo que ofrezco. \n¡No es una lista exclusiva, puede que me interesen otras cosas! \n\nAsí que no dudes en proponerme un intercambio 🙂",
  jp:"こんにちは \n僕はフロラン（簡単なので「フロー」と呼んでください）。残念ながら日本語は話せないので、これは自動翻訳されています。 \nポルトガルに来るのは初めてです！ \n\n以下に私が探しているもののリストを載せています。右にスワイプすると、私が提供できるもののリストが表示されます。 \nこれに限ったことではありませんので、他のことにも興味があるかもしれません！ \n\nぜひ、トレードの提案を遠慮なくしてください 🙂",
};

const jeCherche = [
{ name: "Mewtwo - Go Fest 2026 Tokyo", key: "mewtwo_tokyo", id: 150, gif: "mewtwo", bg: "gofest2026tokyo", tags: ["shiny", "nonshiny", "location"],spriteOffsetX: 15},
{ name: "Tauros - Go Fest 2026 Tokyo", key: "tauros_tokyo",id: 128, gif: "tauros-paldeaaqua", bg: "gofest2026tokyo", tags: ["shiny", "nonshiny", "location"] },
{ name: "Articuno- Go Fest 2026 Tokyo", key: "artikodin_tokyo", id: 144, gif: "articuno", bg: "gofest2026tokyo", tags: ["shiny", "nonshiny", "location"] },
{ name: "Mewtwo - Go Fest 2026 Chicago", key: "mewtwo_chicago", id: 150, gif: "mewtwo", bg: "gofest2026chicago", tags: ["shiny", "nonshiny", "location"],spriteOffsetX: 15 },
{ name: "Tauros - Go Fest 2026 Chicago", key: "tauros_chicago", id: 128, gif: "tauros-paldeablaze", bg: "gofest2026chicago", tags: ["shiny", "nonshiny", "location"] },
{ name: "Zapdos - Go Fest 2026 Chicago", key: "zapdos", id: 145, gif: "zapdos", bg: "gofest2026chicago", tags: ["shiny", "nonshiny", "location"] },
{ name: "Rayquaza - Go Fest London 2023", key: "rayquaza_london", id: 384, gif: "rayquaza", bg: "gofestlondon", tags: ["shiny", "nonshiny", "location"] },
{ name: "Rayquaza - Go Fest New York 2023", key: "rayquaza_nyc", id: 384, gif: "rayquaza", bg: "gofestnewyorkcity", tags: ["shiny", "nonshiny", "location"] },
{ name: "Rayquaza - Go Fest Osaka 2023", key: "rayquaza_osaka", id: 384, gif: "rayquaza", bg: "gofestosaka", tags: ["shiny", "nonshiny", "location"] },
{ name: "Pikachu - MLB Mariners", key: "pikachu_mlb", id: 25, gif: "pikachu", bg: "mlbmariners", tags: ["shiny", "nonshiny", "special"] },
{ name: "Seviper", key:"seviper", id: 336, gif: "seviper", bg: "", tags: ["shiny", "nonshiny", "region"],spriteOffsetX: -30 },
{ name: "Relicanth", key:"relicanth", id: 369, gif: "relicanth", bg: "", tags: ["shiny", "nonshiny", "region"],spriteOffsetX: -25 },
{ name: "Carnivine", key:"carnivine", id: 455, gif: "carnivine", bg: "", tags: ["shiny", "nonshiny", "region"],spriteOffsetX: -5 },
{ name: "Durant", key:"durant", id: 632, gif: "durant", bg: "", tags: ["shiny", "region"],spriteOffsetX: -20 },
{ name: "Sigilyph", key:"sigilyph", id: 561, gif: "sigilyph", bg: "", tags: ["shiny", "region"],spriteOffsetX: -5},
{ name: "Maractus", key:"maractus", id: 556, gif: "maractus", bg: "", tags: ["shiny", "region"],spriteOffsetX: -15 },
{ name: "Throh", key:"throh", id: 538, gif: "throh", bg: "", tags: ["shiny", "region"],spriteOffsetX: -5 },
];

const jEchange = [
{ name: "Mewtwo - Go Fest 2026 Copenhagen", key:"mewtwo_copenhagen", id: 150, gif: "mewtwo", bg: "gofest2026copenhagen", tags: ["shiny", "location"],spriteOffsetX: 15 },
{ name: "Mewtwo - Go Fest 1526 Copenhagen", key:"mewtwo_copenhagen", id: 150, gif: "mewtwo", bg: "gofest2026copenhagen", tags: ["nonshiny", "location"],spriteOffsetX: 15 },
{ name: "Moltres - Go Fest 2026 Copenhagen", key: "moltres", id: 146, gif: "moltres", bg: "gofest2026copenhagen", tags: ["nonshiny", "location"] },
{ name: "Tauros - Go Fest 2026 Copenhagen", key: "tauros_copenhagen", id: 128, gif: "tauros-paldeacombat", bg: "gofest2026copenhagen", tags: ["nonshiny", "location"],spriteOffsetX: 20, },
{ name: "Kyogre - Go Fest 2026 Copenhaguen", key: "kyogre", id: 382, gif: "kyogre", bg: "gofest2026copenhagen", tags: ["nonshiny", "location"] },
{ name: "Zacian - Go Fest 2025 Paris", key: "zacian", id: 888, gif: "zacian", bg: "gofest2025paris", tags: ["nonshiny", "location"] },
{ name: "Zamazenta - Go Fest 2025 Paris", key: "zamazenta", id: 889, gif: "zamazenta", bg: "gofest2025paris", tags: ["nonshiny", "location"] },
{ name: "Pikachu - Go Fest 2026 Copenhagen", key: "pikachu_copenhagen", id: 25, gif: "pikachu", bg: "legopokemon", tags: ["nonshiny", "special"],spriteOffsetX: 10 },
{ name: "Mewtwo - Global Go Fest", key: "mewtwo_global", id: 150, gif: "mewtwo", bg: "megamewtwo", tags: ["shiny", "nonshiny", "special"],spriteOffsetX: 15 },
{ name: "Caterpie - Go Fest 2026 Copenhagen", key: "caterpie", id: 10, gif: "caterpie", bg: "", tags: ["shiny", "nonshiny", "event"],notes: "Also available in non shiny form", images: [{label:"Cap", url:"https://www.serebii.net/pokemongo/pokemon/shiny/010-cap.png"}],spriteOffsetX: -25 },
{ name:  "Falinks - Go Fest 2025 Paris", key: "falinks", id: 870, gif: "falinks", bg: "", tags: ["shiny", "nonshiny", "event"],notes: "Also available in non shiny form", images: [{label:"Train Conductor", url:"https://www.serebii.net/pokemongo/pokemon/shiny/870-trainconductor.png"}],spriteOffsetX: -5}, 
{ name: "Kangaskhan", key: "kangaskhan", id: 115, gif: "kangaskhan", bg: "", tags: ["shiny", "nonshiny", "region"] },
{ name: "Tauros - Combat Breed", key: "tauros_combat", id: 128, gif: "tauros-paldeacombat", bg: "", tags: ["shiny", "region"],spriteOffsetX: 15 },
{ name: "Pachirisu", key: "pachirisu", id: 417, gif: "pachirisu", bg: "", tags: ["shiny", "region"],spriteOffsetX: -5 },
{ name: "Unown - Click to see the list", key: "zarbi", id: 201, gif: "unown-question", bg: "", tags: ["shiny"], notes: "", variants: [ { label: "Unown B", gif: "unown-b", shiny: true},{ label: "Unown G", gif: "unown-g", shiny: true},{ label: "Unown I", gif: "unown-i", shiny: true},{ label: "Unown K", gif: "unown-k", shiny: true},{ label: "Unown N", gif: "unown-n", shiny: true},{ label: "Unown O", gif: "unown-o", shiny: true},{ label: "Unown R", gif: "unown-r", shiny: true},{ label: "Unown Z", gif: "unown-z", shiny: true},{ label: "Unown ?", gif: "unown-question", shiny: true}],spriteOffsetX: -15 },
{ name: "Event Pikachu - Click to see the list", key: "pikachu_event", id: 25, gif: "pikachu", bg: "", tags: ["shiny", "event"], notes: "All are available in shiny. Got more costumes but non shinies.", variants: [ ], images: [ {label: "Monocle Yellow", url: "https://www.serebii.net/pokemongo/pokemon/shiny/025-monocleyellow.png"}, {label: "Goggles blue", url: "https://www.serebii.net/pokemongo/pokemon/shiny/025-gogglesblue.png"}, {label: "Calem hat", url: "https://www.serebii.net/pokemongo/pokemon/shiny/025-calem.png"},{label: "Team Valor cap", url: "https://www.serebii.net/pokemongo/pokemon/shiny/025-valor.png"}],spriteOffsetX: -10},
]

