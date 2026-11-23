function ServiceBlocks() {
  const blocks = SITE.servicesPage.blocks.map((b, n) => `
    <article class="svc" data-reveal>
      <div class="svc__img"><img src="${b.image}" alt="${b.alt}" width="1200" height="900" loading="lazy"></div>
      <div class="svc__body">
        <span class="svc__num">${n + 1}</span>
        <h2>${b.title}</h2>
        <p>${b.text}</p>
        <h3 class="svc__inc">Included</h3>
        <ul>${b.included.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
    </article>`).join("");
  return `<section class="svcs">${blocks}</section>`;
}
