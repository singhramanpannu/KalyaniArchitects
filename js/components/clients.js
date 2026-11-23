function Clients() {
  const item = c => `<li class="clients__item">${c.logo ? `<img src="${c.logo}" alt="" width="32" height="32" loading="lazy">` : ""}<span>${c.name}</span></li>`;
  const list = SITE.clients.map(item).join("");
  return `
    <section class="clients" id="clients" aria-label="Our clients">
      <div class="clients__head" data-reveal>
        <span class="label">Clients</span>
        <h2 class="clients__title">Trusted by</h2>
      </div>
      <div class="clients__viewport">
        <div class="clients__track">
          <ul class="clients__list">${list}</ul>
          <ul class="clients__list" aria-hidden="true">${list}</ul>
        </div>
      </div>
    </section>`;
}
