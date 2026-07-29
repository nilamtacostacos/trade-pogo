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
//        -shiny
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

const jeCherche = [
  { name: "Pokémon 1", id: "", tags: [] },    //, tags: ["shiny"]}//
  { name: "Pokémon 2", id: "", tags: [] },    //, tags: ["lucky"] //
  { name: "Pokémon 3", id: "", tags: [] },    //, tags: [] 
  { name: "Pokémon 4", id: "", tags: [] },    //tags: [] 
  { name: "Pokémon 5", id: "", tags: [] },    //, tags: ["pvp"] 
];

const jEchange = [
  { name: "Pokémon A", id: "", tags: ["shiny"] },
  { name: "Pokémon B", id: "", tags: [] },
  { name: "Pokémon C", id: "", tags: [] },
  { name: "Pokémon D", id: "", tags: [] },
];
