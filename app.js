// ============================================================
//  TRADUCTIONS
// ============================================================
const translations = {
  fr: {
    intro_label: "Message",
    looking_for: "Je recherche",
    to_trade: "J'offre",
    filters_btn: "Filtres",
    tag_shiny: "Shiny",
    tag_location: "Fond de lieu",
    tag_special: "Fond spécial",
    tag_event: "Event / costumé",
    tag_region: "Régional",
    tag_pvp: "PVP",
    reset_filter: "Réinitialiser",
    footer_hint: "Venez échanger !",
  },
  en: {
    intro_label: "Message",
    looking_for: "Looking for",
    to_trade: "To trade",
    filters_btn: "Filters",
    tag_shiny: "Shiny",
    tag_location: "Location Background",
    tag_special: "Special Background",
    tag_event: "Event / costumed",
    tag_region: "Region exclusive",
    tag_pvp: "PVP",
    reset_filter: "Reset filter",
    footer_hint: "Let's trade !",
  },
  pt: {
    intro_label: "Mensagem",
    looking_for: "Estou à procura de",
    to_trade: "Ofereço",
    filters_btn: "Filtros",
    tag_shiny: "Shiny",
    tag_location: "Fundo do local",
    tag_special: "Fundo especial",
    tag_event: "Evento / Fantasias",
    tag_region: "Exclusividade regional",
    tag_pvp: "PVP",
    reset_filter: "Reiniciar",
    footer_hint: "Venham trocar!",
  },
  es: {
    intro_label: "Mensaje",
    looking_for: "Busco",
    to_trade: "Intercambio",
    filters_btn: "Filtros",
    tag_shiny: "Shiny",
    tag_location: "Fondo de lugar",
    tag_special: "Fondo especial",
    tag_event: "Evento / disfraz",
    tag_region: "Exclusivo regional",
    tag_pvp: "PVP",
    reset_filter: "Restablecer",
    footer_hint: "¡Vamos a intercambiar!",
  },
  jp: {
    intro_label: "メッセージ",
    looking_for: "探しています",
    to_trade: "提供します",
    filters_btn: "フィルター",
    tag_shiny: "色違い",
    tag_location: "ロケーション背景",
    tag_special: "特別背景",
    tag_event: "イベント／コスプレ",
    tag_region: "リージョンフォーム",
    tag_pvp: "ピーブイピー",
    reset_filter: "リセット",
    footer_hint: "ぜひ交換しましょう",
  },
};

// ============================================================
//  Ce fichier gère juste l'affichage.
// ============================================================

const tagLabel = { shiny: "SHINY", lucky: "LUCKY", pvp: "PVP" };

function spriteUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

// Fond de lieu / fond spécial — vignette Serebii (slug = nom du fichier sans .jpg)
function bgImgUrl(slug) {
  return `https://www.serebii.net/pokemongo/locationcard/th/${slug}.jpg`;
}

// Sprite animé (gif) — via Pokémon Showdown, slug = nom en minuscules sans espace/accent
function animatedUrl(name, shiny) {
  const folder = shiny ? "ani-shiny" : "ani";
  return `https://play.pokemonshowdown.com/sprites/${folder}/${name}.gif`;
}

function renderList(target, items) {
  document.getElementById(target).innerHTML = items.map(item => {
    const tags = item.tags.map(t => `<span class="tag ${t}">${tagLabel[t]}</span>`).join("");

    // --- Ligne "carte" avec fond de lieu / fond spécial ---
    if (item.bg) {
      const isShiny = item.tags.includes("shiny");
      const gifSrc = item.gif ? animatedUrl(item.gif, isShiny) : (item.id ? spriteUrl(item.id) : "");
      const monImg = gifSrc
        ? `<img class="mon-gif" src="${gifSrc}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'">`
        : "";
      return `
        <div class="row row-bg" data-tags="${item.tags.join(',')}" style="background-image:url('${bgImgUrl(item.bg)}')">
          <div class="row-bg-overlay"></div>
          ${monImg}
          <div class="row-bg-info">
            <div class="name">${item.name}</div>
            <div class="tag-line">${tags}</div>
          </div>
        </div>
      `;
    }

    // --- Ligne classique (pas de fond) ---
    const image = item.gif
      ? `<img class="sprite" src="${animatedUrl(item.gif, item.tags.includes("shiny"))}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'">`
      : (item.id
          ? `<img class="sprite" src="${spriteUrl(item.id)}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'">`
          : `<div class="dot"></div>`);
    return `
      <div class="row" data-tags="${item.tags.join(',')}">
        ${image}
        <div class="name">${item.name}</div>
        ${tags}
      </div>
    `;
  }).join("");
}

function copyTrainerCode() {
  const btn = document.getElementById("copyBtn");
  const code = trainerCode.replace(/\s+/g, ""); // copie sans espaces, plus pratique à coller dans le jeu

  function showCopied() {
    btn.textContent = "✓";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = "⧉";
      btn.classList.remove("copied");
    }, 1500);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(showCopied).catch(() => fallbackCopy(code, showCopied));
  } else {
    fallbackCopy(code, showCopied);
  }
}

function fallbackCopy(text, onDone) {
  const temp = document.createElement("textarea");
  temp.value = text;
  temp.style.position = "fixed";
  temp.style.opacity = "0";
  document.body.appendChild(temp);
  temp.select();
  try { document.execCommand("copy"); onDone(); } catch (e) { /* silencieux */ }
  document.body.removeChild(temp);
}

document.getElementById("trainerName").textContent = trainerName;
document.getElementById("trainerCode").textContent = trainerCode;
document.getElementById("updatedLine").textContent = "SYNC — " + dateMaj;
renderList("listCherche", jeCherche);
renderList("listEchange", jEchange);

function setupFilters(scope, listId) {
  const bar = document.querySelector(`.filters[data-scope="${scope}"]`);
  const list = document.getElementById(listId);
  const active = new Set();

  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-chip');
    if (!btn) return;

    if (btn.dataset.reset) {
      active.clear();
      bar.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
    } else {
      const f = btn.dataset.filter;
      if (active.has(f)) {
        active.delete(f);
        btn.classList.remove('active');
      } else {
        active.add(f);
        btn.classList.add('active');
      }
    }
    apply();
  });

  function apply() {
    list.querySelectorAll('.row').forEach(row => {
      const tags = (row.dataset.tags || '').split(',').filter(Boolean);
      const show = [...active].every(f => tags.includes(f));
      row.classList.toggle('hidden', active.size > 0 && !show);
    });
  }
}

setupFilters('cherche', 'listCherche');
setupFilters('echange', 'listEchange');


const pager = document.getElementById('pager');
const dots = document.querySelectorAll('.dot-ind');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = Number(dot.dataset.page);
    pager.scrollTo({ left: pager.clientWidth * index, behavior: 'smooth' });
  });
});

pager.addEventListener('scroll', () => {
  const index = Math.round(pager.scrollLeft / pager.clientWidth);
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
});


document.querySelectorAll('.filter-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const scope = btn.dataset.toggle;
    const panelFilters = document.getElementById(`filters-${scope}`);
    const isOpen = panelFilters.classList.toggle('open');
    btn.querySelector('.arrow').textContent = isOpen ? '▴' : '▾';
  });
});
const introTrigger = document.getElementById('introTrigger');
const introCard = document.getElementById('introCard');
const notifDot = document.getElementById('notifDot');

introTrigger.addEventListener('click', () => {
  const isHidden = introCard.hasAttribute('hidden');
  if (isHidden) {
    introCard.removeAttribute('hidden');
    notifDot.classList.add('seen'); // le point disparaît une fois consulté
  } else {
    introCard.setAttribute('hidden', '');
  }
});

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.getElementById('introText').textContent = introText[lang];
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

setLanguage('en'); // langue par défaut au chargement
