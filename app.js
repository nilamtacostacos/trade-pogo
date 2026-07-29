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
      <div class="row">
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
