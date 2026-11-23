function Faq() {
  const items = SITE.servicesPage.faq.map(i => `
    <details class="faq__item"><summary>${i.q}<span class="faq__icon" aria-hidden="true"></span></summary><p>${i.a}</p></details>`).join("");
  return `
    <section class="faq" data-reveal>
      <div><span class="label">FAQ</span><h2 class="faq__title">Good to <span class="serif">know</span></h2></div>
      <div class="faq__list">${items}</div>
    </section>`;
}
