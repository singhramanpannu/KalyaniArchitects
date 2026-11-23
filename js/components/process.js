function Process() {
  const steps = SITE.servicesPage.process.map((s, n) => `
    <li class="process__step"><span class="process__num">${n + 1}</span><h3>${s.title}</h3><p>${s.text}</p></li>`).join("");
  return `
    <section class="process">
      <span class="label">Process</span>
      <h2 class="process__title">How we <span class="serif">work</span></h2>
      <div class="process__line" data-rule></div>
      <ol class="process__list">${steps}</ol>
    </section>`;
}
