const translations = {
  fr: {
    intro_label: "Message",
    looking_for: "Je recherche",
    to_trade: "J'offre",
    filters_btn: "Filtres",
    tag_shiny: "Shiny",
    tag_nonshiny: "Normal",
    tag_location: "Fond de lieu",
    tag_special: "Fond spécial",
    tag_event: "Event / costumé",
    tag_region: "Régional",
    tag_pvp: "PVP",
    reset_filter: "Réinitialiser",
    footer_hint: "Venez échanger !",
    open_app: "Ouvrir Pokémon GO",
  },
  en: {
    intro_label: "Message",
    looking_for: "Looking for",
    to_trade: "To trade",
    filters_btn: "Filters",
    tag_shiny: "Shiny",
    tag_nonshiny: "Standard",
    tag_location: "Location Background",
    tag_special: "Special Background",
    tag_event: "Event / costumed",
    tag_region: "Region exclusive",
    tag_pvp: "PVP",
    reset_filter: "Reset filter",
    footer_hint: "Let's trade !",
    open_app: "Open Pokémon GO",
  },
  pt: {
    intro_label: "Mensagem",
    looking_for: "Estou à procura de",
    to_trade: "Ofereço",
    filters_btn: "Filtros",
    tag_shiny: "Shiny",
    tag_nonshiny: "Padrão",
    tag_location: "Fundo do local",
    tag_special: "Fundo especial",
    tag_event: "Evento / Fantasias",
    tag_region: "Exclusividade regional",
    tag_pvp: "PVP",
    reset_filter: "Reiniciar",
    footer_hint: "Venham trocar!",
    open_app: "Abrir o Pokémon GO",
  },
  es: {
    intro_label: "Mensaje",
    looking_for: "Busco",
    to_trade: "Intercambio",
    filters_btn: "Filtros",
    tag_shiny: "Shiny",
    tag_nonshiny: "Estándar",
    tag_location: "Fondo de lugar",
    tag_special: "Fondo especial",
    tag_event: "Evento / disfraz",
    tag_region: "Exclusivo regional",
    tag_pvp: "PVP",
    reset_filter: "Restablecer",
    footer_hint: "¡Vamos a intercambiar!",
    open_app: "Abrir Pokémon GO",
  },
  jp: {
    intro_label: "メッセージ",
    looking_for: "探しています",
    to_trade: "提供します",
    filters_btn: "フィルター",
    tag_shiny: "色違い",
    tag_nonshiny: "標準",
    tag_location: "ロケーション背景",
    tag_special: "特別背景",
    tag_event: "イベント／コスプレ",
    tag_region: "リージョンフォーム",
    tag_pvp: "ピーブイピー",
    reset_filter: "リセット",
    footer_hint: "ぜひ交換しましょう",
    open_app: "ポケモンGOを開く",
  },
};

// ============================================================
//  TRADUCTIONS DES ITEMS (name / notes) DE data.js
//  Clé = le champ "key" défini dans data.js pour l'item concerné
// ============================================================
const itemTexts = {
  mewtwo_tokyo: {
    fr: { name: "Mewtwo - Go Fest 2026 Tokyo"},
    en: { name: "Mewtwo - Go Fest 2026 Tokyo"},
    pt: { name: "Mewtwo - Go Fest 2026 Tóquio"},
    es: { name: "Mewtwo - Go Fest 2026 Tokio"},
    jp: { name: "ミュウツー - Go Fest 2026 東京"},
  },
  // Ajoute une entrée par item que tu veux traduire, avec la même structure.
  // Tu peux ne mettre que "name" si tu n'as pas de notes à traduire.
  tauros_tokyo: {
    jp: {name: "ケンタロス - Go Fest 2026 東京"},
  },
  artikodin_tokyo: {
    fr: { name: "Artikodin- Go Fest 2026 Tokyo"},
    jp: { name: "フリーザー - Go Fest 2026 東京"},
  },
  mewtwo_chicago: {
    jp: { name: "ミュウツー - Go Fest 2026 シカゴ"},
  },
  tauros_chicago: {
    jp: { name: "ケンタロス - Go Fest 2026 シカゴ"},
  },
  zapdos: {
    fr: { name: "Électhor - Go Fest 2026 Chicago"},
    jp: { name: "サンダー - Go Fest 2026 シカゴ"},
  },
  rayquaza_london: {
    jp: { name: "レックウザ - Go Fest 2023 ロンドン"},
  },
  rayquaza_nyc: {
    jp: { name: "レックウザ - Go Fest 2023 ニューヨーク市"},
  },
  rayquaza_osaka: {
    jp: { name: "レックウザ - Go Fest 2023 大阪市"},
  },
  pikachu_mlb: {

    jp: { name: "ピカチュウ - マリナーズ背景"},
  },
  seviper: {
    fr: { name: "Séviper"},
    jp: { name: "ハブネーク"},
  },
  relicanth: {
    jp: { name: "ジーランス"},
  },
  carnivine: {
    fr: { name: "Vortente"},
    jp: { name: "マスキッパ"},
  },
  durant: {
    fr: { name: "Fermite"},
    jp: { name: "アイアント"},
  },
  sigilyph: {
    fr: { name: "Cryptéro"},
    jp: { name: "シンボラー"},
  },
  maractus: {
    fr: { name: "Maracachi"},
    jp: { name: "マラカッチ"},
  },
  throh: {
    fr: { name: "Judokrak"},
    jp: { name: "ナゲキ"},
  },
  mewtwo_copenhagen: {
    fr: { name: "Mewtwo - Go Fest 2026 Copenhague"},
    en: { name: "Mewtwo - Go Fest 2026 Copenhagen"},
    pt: { name: "Mewtwo - Go Fest 2026 Copenhaga "},
    es: { name: "Mewtwo - Go Fest 2026 Copenhague"},
    jp: { name: "ミュウツー - Go Fest 2026 コペンハーゲン"},
  },
  tauros_copenhagen: {
    fr: { name: "Tauros - Go Fest 2026 Copenhague"},
    en: { name: "Tauros - Go Fest 2026 Copenhagen"},
    pt: { name: "Tauros - Go Fest 2026 Copenhaga "},
    es: { name: "Tauros - Go Fest 2026 Copenhague"},
    jp: { name: "ケンタロス - Go Fest 2026 コペンハーゲン"},
  },
  moltres: {
    fr: { name: "Sulfura - Go Fest 2026 Copenhague"},
    jp: { name: "ファイヤー - Go Fest 2026 コペンハーゲン"},
  },
  kyogre: {
    fr: { name: "Kyogre - Go Fest 2026 Copenhague"},
    en: { name: "Kyogre - Go Fest 2026 Copenhagen"},
    pt: { name: "Kyogre - Go Fest 2026 Copenhaga "},
    es: { name: "Kyogre - Go Fest 2026 Copenhague"},
    jp: { name: "カイオーガ - Go Fest 2026 コペンハーゲン"},
  },
  zacian: {
    fr: { name: "Zacian - Go Fest 2026 Copenhague"},
    en: { name: "Zacian - Go Fest 2026 Copenhagen"},
    pt: { name: "Zacian - Go Fest 2026 Copenhaga "},
    es: { name: "Zacian - Go Fest 2026 Copenhague"},
    jp: { name: "ザシアン - Go Fest 2026 コペンハーゲン"},
  },
  zamazenta: {
    fr: { name: "Zamazenta - Go Fest 2026 Copenhague"},
    en: { name: "Zamazenta - Go Fest 2026 Copenhagen"},
    pt: { name: "Zamazenta - Go Fest 2026 Copenhaga "},
    es: { name: "Zamazenta - Go Fest 2026 Copenhague"},
    jp: { name: "ザマゼンタ - Go Fest 2026 コペンハーゲン"},
  },
  pika_copenhagen: {
    fr: { name: "Pikachu - Go Fest 2026 Copenhague"},
    en: { name: "Pikachu - Go Fest 2026 Copenhagen"},
    pt: { name: "Pikachu - Go Fest 2026 Copenhaga "},
    es: { name: "Pikachu - Go Fest 2026 Copenhague"},
    jp: { name: "ピカチュウ - Go Fest 2026 コペンハーゲン"},
  },
  mewtwo_global: {
    fr: { name: "Mewtwo - Go Fest 2026 Global"},
    en: { name: "Mewtwo - Go Fest 2026 Global"},
    pt: { name: "Mewtwo - Go Fest 2026 Global "},
    es: { name: "Mewtwo - Go Fest 2026 Global"},
    jp: { name: "ミュウツー - Go Fest 2026 グローバル"},
  },
  caterpie: {
    fr: { name: "Chenipan - Go Fest 2026 Copenhague"},
    en: { name: "Caterpie - Go Fest 2026 Copenhagen"},
    pt: { name: "Caterpie - Go Fest 2026 Copenhaga"},
    es: { name: "Caterpie - Go Fest 2026 Copenhague"},
    jp: { name: "キャタピー - Go Fest 2026 コペンハーゲン"},
  },
  falinks: {
    fr: { name: "Hexadron - Go Fest 2026 Copenhague"},
    en: { name: "Falinks - Go Fest 2026 Copenhagen"},
    pt: { name: "Falinks - Go Fest 2026 Copenhaga"},
    es: { name: "Falinks - Go Fest 2026 Copenhague"},
    jp: { name: "タイレーツ - Go Fest 2026 コペンハーゲン"},
  },
  kangaskhan: {
    fr: { name: "Kangourex"},
    en: { name: "Kangaskhan"},
    pt: { name: "Kangaskhan"},
    es: { name: "Kangaskhan"},
    jp: { name: "ガルーラ"},
  },
  tauros_combat: {
    fr: { name: "Tauros Race Combative"},
    en: { name: "Tauros - Combat Breed"},
    pt: { name: "Tauros Variedade de Combate"},
    es: { name: "Tauros  Variedad Combativa"},
    jp: { name: "パルデアのケンタロス (コンバット種)"},
  },
  pachirisu: {
    jp: { name: "パチリス "},
  },
  zarbi: {
    fr: { name: "Zarbi - Cliquez pour voir la liste"},
    en: { name: "Unown - Click to see the list"},
    pt: { name: "Unown - Clique para ver a lista"},
    es: { name: "Unown - Haz clic para ver la lista"},
    jp: { name: "アンノーン - クリックして一覧を見る"},
  },
  zarbi: {
    fr: { name: "Zarbi - Cliquez pour voir la liste"},
    en: { name: "Unown - Click to see the list"},
    pt: { name: "Unown - Clique para ver a lista"},
    es: { name: "Unown - Haz clic para ver la lista"},
    jp: { name: "アンノーン - クリックして一覧を見る"},
  },
  pikachu_event: {
    fr: { name: "Pikachu costumé - Cliquez pour voir la liste"},
    en: { name: "Event Pikachu - Click to see the list"},
    pt: { name: "Pikachu de Evento - Clique para ver a lista"},
    es: { name: "Pikachu con evento - Haz clic para ver la lista"},
    jp: { name: "イベントピカチュウ - クリックして一覧を見る"},
  }
};


/*
"Tauros - Combat Breed", id: 128, gif: "tauros-paldeacombat", bg: "", tags: ["shiny", "region"] },
"Pachirisu", id: 417, gif: "pachirisu", bg: "", tags: ["shiny", "region"] },
"Unown - Click to see the list", id: 201, gif: "unown-question", bg: "", tags: ["shiny"], notes: "", variants: [ { label: "Unown B", gif: "unown-b", shiny: true},{ label: "Unown G", gif: "unown-g", shiny: true},{ label: "Unown I", gif: "unown-i", shiny: true},{ label: "Unown K", gif: "unown-k", shiny: true},{ label: "Unown N", gif: "unown-n", shiny: true},{ label: "Unown O", gif: "unown-o", shiny: true},{ label: "Unown R", gif: "unown-r", shiny: true},{ label: "Unown Z", gif: "unown-z", shiny: true},{ label: "Unown ?", gif: "unown-question", shiny: true}] },
"Event Pikachu - Click to see the list", id: 25, gif: "pikachu", bg: "", tags: ["shiny", "event"], notes: "All are available in shiny. Got more costumes but non shinies.", variants: [ ], images: [ {label: "Monocle Yellow", url: "https://www.serebii.net/pokemongo/pokemon/shiny/025-monocleyellow.png"}, {label: "Goggles blue", url: "https://www.serebii.net/pokemongo/pokemon/shiny/025-gogglesblue.png"}, {label: "Calem hat", url: "https://www.serebii.net/pokemongo/pokemon/shiny/025-calem.png"},{label: "Team Valor cap", url: "https://www.serebii.net/pokemongo/pokemon/shiny/025-valor.png"}]},

*/