function Team() {
  const a = SITE.aboutPage, f = a.founder;
  const cards = a.team.map(t => `
    <li class="tcard">
      <div class="tcard__img"><img src="${t.image}" alt="${t.name}, ${t.role}" width="800" height="1000" loading="lazy"></div>
      <h3 class="tname">${t.name}</h3><p class="trole">${t.role}</p>
    </li>`).join("");
  return `
    <section class="team" data-reveal>
      <span class="label">Team</span>
      <div class="founder">
        <div class="founder__img"><img src="${f.image}" alt="${f.name}, ${f.role}" width="800" height="1000" loading="lazy"></div>
        <div><h3 class="tname">${f.name}</h3><p class="trole">${f.role}</p><p class="founder__bio">${f.bio}</p></div>
      </div>
      <ul class="team__grid">${cards}</ul>
    </section>`;
}
