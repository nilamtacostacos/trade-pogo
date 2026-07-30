// ============================================================
//  C'EST LE SEUL FICHIER À MODIFIER.
//  Ne touche pas à index.html ni style.css.
// ============================================================

// Ton nom et ton code ami (visible en haut de la page)
const trainerName = "NilamTacos";
const trainerCode = "1898 4790 6821";

// Date de dernière mise à jour (juste affichée, change-la à chaque event)
const dateMaj = "29/07/2026";

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
// -----------------------------------------------------------

const introText = {
  fr: "Salut ! \nJe m'appelle Florent (ou Flo pour que ce soit plus simple). \nC'est ma première fois au Portugal ! \n\nTu trouveras ci-dessous la liste de ce que je recherche, et en swipant sur la droite, la liste de ce que je propose. \nCe n'est pas exclusif je peux être intéressé par d'autres choses ! \n\nN'hésite donc pas à me proposer un trade 🙂",
  en: "Hi ! \nMy name is Florent (Flo might be easier). \nFirst time here in Portugal ! \n\nYou can find below what I'm looking for, and by swiping to your right, what I can offer. \nThat's not exclusive so I could be interessed by something else ! \n\nAnyway, do not hesitate to ask for a trade 🙂",
  pt: "Olá ! \nChamo-me Florent (ou Flo, para simplificar). \nÉ a minha primeira vez em Portugal (só falo francês, inglês e um pouco de espanhol)! \n\nAbaixo encontrarás a lista do que procuro e, ao deslizar para a direita, a lista do que tenho para oferecer. \nNão é uma lista exaustiva, posso estar interessado noutras coisas! \n\nPor isso, não hesites em propor-me uma troca 🙂 🙂",
  es: "¡Hola! \nMe llamo Florent (o Flo, para simplificar). \nEntiendo español pero hace mucho tiempo que no lo he hablado jaja \n¡Es la primera vez que vengo a Portugal! \n\nAbajo encontrarás la lista de lo que busco y, si deslizas hacia la derecha, la lista de lo que ofrezco. \n¡No es una lista exclusiva, puede que me interesen otras cosas! \n\nAsí que no dudes en proponerme un intercambio 🙂",
  jp:"こんにちは \n僕はフロラン（簡単なので「フロー」と呼んでください）。残念ながら日本語は話せないので、これは自動翻訳されています。 \nポルトガルに来るのは初めてです！ \n\n以下に私が探しているもののリストを載せています。右にスワイプすると、私が提供できるもののリストが表示されます。 \nこれに限ったことではありませんので、他のことにも興味があるかもしれません！ \n\nぜひ、トレードの提案を遠慮なくしてください 🙂",
};

const jeCherche = [
  { name: "Mewtwo", id: 150, gif: "mewtwo", bg:"gofest2026copenhagen",tags: ["shiny", "location"] },    //, tags: ["shiny"]}//
  { name: "Pokémon 2", id: "", tags: ["shiny"] },    //, tags: ["lucky"] //
  { name: "Pokémon 3", id: "", tags: ["location"] },    //, tags: [] 
  { name: "Pokémon 4", id: "", tags: ["pvp"] },    //tags: [] 
  { name: "Pokémon 5", id: "", tags: [] },    //, tags: ["pvp"] 
];

const jEchange = [
  { name: "Pokémon A", id: "", tags: ["shiny", "location"] },
  { name: "Pokémon B", id: "", tags: ["region"] },
  { name: "Pokémon C", id: "", tags: ["special","event"] },
  { name: "Pokémon D", id: "", tags: [] },
];
