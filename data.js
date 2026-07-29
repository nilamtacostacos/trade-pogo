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
  fr: "Salut ! \n\nJe m'appelle Florent (ou Flo pour que ce soit plus simple). \nC'est ma première fois au Portugal ! \n\nTu trouveras ci-dessous la liste de ce que je recherche, et en swipant sur la droite, la liste de ce que je propose. \nCe n'est pas exclusif je peux être intéressé par d'autres choses ! \nN'hésite donc pas à me proposer un trade 🙂",
  en: "Hi! My name is Florent (Flo might be easier). Firs time here in Portugal ! You can find below what I'm looking for, and by swiping to your right, what I can offer. That's not exclusive so I could be interessed by something else ! In anyway, do not hesitate to ask for a trade 🙂",
  pt: "Olá! Chamo-me Florent (ou Flo, para simplificar). É a minha primeira vez em Portugal (só falo francês, inglês e um pouco de espanhol)! Abaixo encontrarás a lista do que procuro e, ao deslizar para a direita, a lista do que tenho para oferecer. Não é uma lista exaustiva, posso estar interessado noutras coisas! Por isso, não hesites em propor-me uma troca 🙂 🙂",
  es: "¡Hola! Me llamo Florent (o Flo, para simplificar). Entiendo español pero hace mucho tiempo que no lo he hablado jaja ¡Es la primera vez que vengo a Portugal (solo hablo francés, inglés y un poco de español)! A continuación encontrarás la lista de lo que busco y, si deslizas hacia la derecha, la lista de lo que ofrezco. ¡No es una lista exclusiva, puede que me interesen otras cosas! Así que no dudes en proponerme un intercambio 🙂",
};

const jeCherche = [
  { name: "Pokémon 1", id: "", tags: ["shiny"] },    //, tags: ["shiny"]}//
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
