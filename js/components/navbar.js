function Navbar() {
  const logo = `<svg viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><circle cx="15" cy="15" r="13"/><path d="M8 22V8h7a4 4 0 010 8H8M15 16l7 6"/></svg>`;
  const cur = l => (l.key === document.body.dataset.page ? ' aria-current="page"' : "");
  const links = SITE.nav.map(l => `<li><a href="${l.href}"${cur(l)}>${l.label}</a></li>`).join("");
  const menuLinks = SITE.nav.map(l => `<a href="${l.href}"${cur(l)}>${l.label}</a>`).join("");
  return `
    <header class="nav">
      <div class="nav__inner">
        <a class="nav__brand" href="${SITE.pages.home}" aria-label="${SITE.name} home">${logo}<span>${SITE.name}</span></a>
        <nav aria-label="Primary"><ul class="nav__links">${links}</ul></nav>
        <button class="nav__toggle" aria-expanded="false" aria-controls="menu" aria-label="Open menu"><span></span><span></span></button>
      </div>
    </header>
    <nav class="menu" id="menu" aria-label="Mobile">${menuLinks}</nav>`;
}
