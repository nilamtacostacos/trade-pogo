

// ============================================================
//  Ce fichier gère juste l'affichage.
// ============================================================

// const tagLabel = { shiny: "SHINY", lucky: "LUCKY", pvp: "PVP" };
let currentLang = 'en'; // langue actuellement affichée, mise à jour par setLanguage()

// Renvoie le texte traduit d'un champ (ex: "name", "notes") si dispo dans
// itemTexts via la clé "key" de l'item, sinon retombe sur le champ par défaut.
function tField(item, field) {
  if (item.key && itemTexts[item.key] && itemTexts[item.key][currentLang] && itemTexts[item.key][currentLang][field]) {
    return itemTexts[item.key][currentLang][field];
  }
  return item[field] || "";
}

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
  document.getElementById(target).innerHTML = items.map((item, idx) => {
    const tags = item.tags.map(t => `<span class="tag ${t}">${translations[currentLang][`tag_${t}`] || t}</span>`).join("");
    const displayName = tField(item, 'name');

    // --- Ligne "carte" avec fond de lieu / fond spécial ---
    if (item.bg) {
      const bgUrl = bgImgUrl(item.bg);
      const isShiny = item.tags.includes("shiny");
      const gifSrc = item.gif ? animatedUrl(item.gif, isShiny) : (item.id ? spriteUrl(item.id) : "");
const monImg = gifSrc
        ? `<img class="mon-gif" src="${gifSrc}" alt="${displayName}"${item.spriteOffsetX ? ` style="transform: translateX(${item.spriteOffsetX}px);"` : ""} loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'">`
        : "";
      return `
        <div class="row row-bg" data-tags="${item.tags.join(',')}" data-list="${target}" data-idx="${idx}">
          <img class="row-bg-blur" src="${bgUrl}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'">
          <div class="row-bg-left">
            <div class="name">${displayName}</div>
            <div class="tag-line">${tags}</div>
          </div>
          <div class="row-bg-center">
            <img class="row-bg-sharp-img" src="${bgUrl}" alt="${displayName} background" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'">
          </div>
          <div class="row-bg-right">
            ${monImg}
          </div>
        </div>
      `;
    }

    // --- Ligne classique (pas de fond de lieu) ---
// --- Ligne classique (pas de fond de lieu) ---
    const spriteOffsetStyle = item.spriteOffsetX ? ` style="transform: translateX(${item.spriteOffsetX}px);"` : "";
    const image = item.gif
      ? `<img class="sprite" src="${animatedUrl(item.gif, item.tags.includes("shiny"))}" alt="${displayName}"${spriteOffsetStyle} loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'">`
      : (item.id
          ? `<img class="sprite" src="${spriteUrl(item.id)}" alt="${displayName}"${spriteOffsetStyle} loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'">`
          : `<div class="dot"></div>`);
    return `
      <div class="row" data-tags="${item.tags.join(',')}" data-list="${target}" data-idx="${idx}">
        <div class="row-third row-name-col">
          <div class="name">${displayName}</div>
        </div>
        <div class="row-third row-tags-col">
          ${tags}
        </div>
        <div class="row-third row-sprite-col">
          ${image}
        </div>
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

function openPokemonGo() {
  const now = Date.now();
  const ua = navigator.userAgent || "";
  const isIOS = /iPhone|iPad|iPod/.test(ua);
  const isAndroid = /Android/.test(ua);

  // Lien de fallback si l'app n'est pas installée
  const storeUrl = isIOS
    ? "https://apps.apple.com/app/pokemon-go/id1094591345"
    : "https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo";

  // Si après ~1.5s la page est toujours visible, on considère que l'app
  // ne s'est pas ouverte et on redirige vers le store
  const fallback = setTimeout(() => {
    if (Date.now() - now < 2000) {
      window.location.href = storeUrl;
    }
  }, 1500);

  // Annule le fallback si l'utilisateur quitte la page (= l'app s'est ouverte)
  window.addEventListener("visibilitychange", function onVis() {
    if (document.hidden) {
      clearTimeout(fallback);
      window.removeEventListener("visibilitychange", onVis);
    }
  });

  // Tentative d'ouverture de l'app via son scheme
  window.location.href = "pokemongo://";
}

document.getElementById("trainerName").textContent = trainerName;
document.getElementById("trainerCode").textContent = trainerCode;
document.getElementById("updatedLine").textContent = "SYNC — " + dateMaj;
renderList("listCherche", jeCherche);
renderList("listEchange", jEchange);

const filterAppliers = {};
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
    syncPagerHeight();
  }

  filterAppliers[scope] = apply;
}

setupFilters('cherche', 'listCherche');
setupFilters('echange', 'listEchange');

// --- Popup de détail au clic sur une ligne ---
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openDetailModal(item) {
  const bgUrl = item.bg ? bgImgUrl(item.bg) : "";
  const isShiny = item.tags.includes("shiny");
  const gifSrc = item.gif ? animatedUrl(item.gif, isShiny) : (item.id ? spriteUrl(item.id) : "");
  const tags = item.tags.map(t => `<span class="tag ${t}">${translations[currentLang][`tag_${t}`] || t}</span>`).join("");
  const displayName = tField(item, 'name');
  const displayNotes = tField(item, 'notes');

  const poster = item.bg
    ? `
      <div class="modal-poster">
        <img class="modal-poster-blur" src="${bgUrl}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'">
        <img class="modal-poster-bg" src="${bgUrl}" alt="${displayName} background" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'">
        ${gifSrc ? `<img class="modal-poster-mon" src="${gifSrc}" alt="${displayName}" ${item.spriteOffsetX ? `style="transform: translateX(calc(-50% + ${item.spriteOffsetX}px));"` : ""} loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'">` : ""}
      </div>
    `
    : (gifSrc ? `<div class="modal-poster modal-poster-plain"><img class="modal-poster-mon" src="${gifSrc}" alt="${displayName}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'"></div>` : "");

  const variantsHtml = (item.variants && item.variants.length)
    ? `
      <div class="modal-variants">
        ${item.variants.map(v => `
          <div class="modal-variant">
            <img src="${animatedUrl(v.gif, !!v.shiny)}" alt="${v.label}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'">
            <span>${v.label}</span>
          </div>
        `).join("")}
      </div>
    `
    : "";

  const notesHtml = displayNotes ? `<p class="modal-notes">${displayNotes}</p>` : "";

  const imagesHtml = (item.images && item.images.length)
    ? `
      <div class="modal-variants">
        ${item.images.map(im => `
          <div class="modal-variant">
            <img src="${im.url}" alt="${im.label}" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentElement.style.display='none'">
            <span>${im.label}</span>
          </div>
        `).join("")}
      </div>
    `
    : "";

  modalBody.innerHTML = `
    ${poster}
    <div class="modal-info">
      <div class="modal-name">${displayName}</div>
      <div class="tag-line">${tags}</div>
      ${notesHtml}
      ${variantsHtml}
      ${imagesHtml}
    </div>
  `;
  modalOverlay.removeAttribute('hidden');
}

function closeDetailModal() {
  modalOverlay.setAttribute('hidden', '');
  modalBody.innerHTML = "";
}

document.addEventListener('click', (e) => {
  const row = e.target.closest('.row');
  if (!row) return;
  const listId = row.dataset.list;
  const idx = Number(row.dataset.idx);
  const source = listId === 'listCherche' ? jeCherche : jEchange;
  const item = source[idx];
  if (item) openDetailModal(item);
});

modalClose.addEventListener('click', closeDetailModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeDetailModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDetailModal();
});

const pager = document.getElementById('pager');
const dots = document.querySelectorAll('.dot-ind');

// Ajuste la hauteur du pager sur celle de la page actuellement visible,
// pour que la page la plus courte n'hérite pas du vide de l'autre.
function syncPagerHeight() {
  const pages = document.querySelectorAll('.page');
  const index = Math.round(pager.scrollLeft / pager.clientWidth);
  const active = pages[index];
  if (active) pager.style.height = active.scrollHeight + 'px';
}
// Recalcule automatiquement la hauteur dès qu'une page change de taille
// (ex: une image/gif qui finit de charger et agrandit le contenu)
const pageResizeObserver = new ResizeObserver(() => syncPagerHeight());
document.querySelectorAll('.page').forEach(page => pageResizeObserver.observe(page));

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = Number(dot.dataset.page);
    pager.scrollTo({ left: pager.clientWidth * index, behavior: 'smooth' });
  });
});

pager.addEventListener('scroll', () => {
  const index = Math.round(pager.scrollLeft / pager.clientWidth);
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  syncPagerHeight();
});

window.addEventListener('resize', syncPagerHeight);


document.querySelectorAll('.filter-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const scope = btn.dataset.toggle;
    const panelFilters = document.getElementById(`filters-${scope}`);
    const isOpen = panelFilters.classList.toggle('open');
    btn.querySelector('.arrow').textContent = isOpen ? '▴' : '▾';
    syncPagerHeight();
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
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.getElementById('introText').textContent = introText[lang];
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // on régénère les listes pour que les tags changent de langue aussi,
  // puis on réapplique les filtres actifs (sinon tout redevient visible)
renderList("listCherche", jeCherche);
renderList("listEchange", jEchange);
  if (filterAppliers.cherche) filterAppliers.cherche();
  if (filterAppliers.echange) filterAppliers.echange();
  syncPagerHeight();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

setLanguage('en'); // langue par défaut au chargement
