function PageHeader({ label, title, intro, extra = "" }) {
  const lines = title.map(l => `<span class="line"><span class="line__inner">${l}</span></span>`).join("");
  return `
    <section class="pagehead">
      <div class="pagehead__inner">
        <span class="label">${label}</span>
        <h1 class="pagehead__title">${lines}</h1>
        <p class="pagehead__intro">${intro}</p>
        ${extra}
      </div>
      <div class="pagehead__rule" data-rule></div>
    </section>`;
}
