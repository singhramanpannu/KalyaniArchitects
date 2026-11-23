function Principles() {
  const rows = SITE.aboutPage.principles.map(p => `
    <li class="principles__row"><h3>${p.title}</h3><p>${p.text}</p></li>`).join("");
  return `
    <section class="principles" data-reveal>
      <span class="label">Principles</span>
      <ul>${rows}</ul>
    </section>`;
}
