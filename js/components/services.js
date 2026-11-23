function Services() {
  const s = SITE.services;
  const rows = s.items.map((i, n) => `
    <li class="services__row"><span class="services__num">${n + 1}</span><div><h3>${i.title}</h3><p>${i.text}</p></div></li>`).join("");
  return `
    <section class="services" id="services">
      <div class="services__inner">
        <div class="services__head" data-reveal>
          <span class="label">What we do</span>
          <h2 class="services__title">Spaces shaped around <span class="serif">you</span></h2>
          <p class="services__intro">${s.intro}</p>
        </div>
        <div><ul class="services__list">${rows}</ul><a class="services__more" href="${SITE.pages.services}">All services</a></div>
      </div>
    </section>`;
}
