// ============================================================
//  Ce fichier gère juste l'affichage. Tu n'as pas besoin d'y
//  toucher — modifie data.js pour changer le contenu.
// ============================================================

const tagLabel = { shiny: "SHINY", lucky: "LUCKY", pvp: "PVP" };

function spriteUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

function renderList(target, items) {
  document.getElementById(target).innerHTML = items.map(item => {
    const image = item.id
      ? `<img class="sprite" src="${spriteUrl(item.id)}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'">`
      : `<div class="dot"></div>`;
    const tags = item.tags.map(t => `<span class="tag ${t}">${tagLabel[t]}</span>`).join("");
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
