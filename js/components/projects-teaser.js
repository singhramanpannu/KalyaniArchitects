function ProjectsTeaser() {
  const cards = SITE.projects.slice(0, 4).map((p, n) => {
    const portrait = n === 0 || n === 3;
    const size = portrait ? 'width="800" height="1000"' : 'width="1200" height="800"';
    return `
      <article class="pcard ${portrait ? "pcard--portrait" : ""}">
        <div class="pcard__img"><img src="${p.image}" alt="${p.alt}" ${size} loading="lazy"></div>
        <h3 class="pcard__title">${p.title}</h3>
        <p class="pcard__text">${p.text}</p>
        <a class="pcard__link" href="${p.link}" aria-label="Learn more about ${p.title}"><span>Learn more</span></a>
      </article>`;
  }).join("");
  return `
    <section class="projects" id="projects">
      <div class="projects__inner">
        <div class="projects__head">
          <div data-reveal><span class="label">Notable</span><h2 class="projects__title">Projects</h2></div>
          <a class="btn" href="${SITE.pages.projects}">All projects</a>
        </div>
        <div class="rule" data-rule></div>
        <div class="projects__grid">${cards}</div>
      </div>
    </section>`;
}
