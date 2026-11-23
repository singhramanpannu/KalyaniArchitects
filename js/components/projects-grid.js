function ProjectsGrid() {
  const filters = ["All", "Residential", "Commercial"].map((t, i) =>
    `<button class="filters__btn" type="button" data-filter="${t}" aria-pressed="${i === 0}">${t}</button>`).join("");
  const cards = SITE.projects.map(p => `
    <article class="pcard" id="${p.slug}" data-type="${p.type}">
      <div class="pcard__img"><img src="${p.image}" alt="${p.alt}" width="800" height="1000" loading="lazy"></div>
      <span class="pcard__type">${p.type}</span>
      <h2 class="pcard__title">${p.title}</h2>
      <p class="pcard__meta">${p.location}, ${p.year}</p>
      <p class="pcard__text">${p.text}</p>
    </article>`).join("");
  return `
    <section class="pgrid-sec">
      <div class="filters" role="group" aria-label="Filter projects">${filters}</div>
      <div class="pgrid">${cards}</div>
    </section>`;
}
