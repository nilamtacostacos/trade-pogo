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

document.getElementById("trainerName").textContent = trainerName;
document.getElementById("trainerCode").textContent = trainerCode;
document.getElementById("updatedLine").textContent = "SYNC — " + dateMaj;
renderList("listCherche", jeCherche);
renderList("listEchange", jEchange);
