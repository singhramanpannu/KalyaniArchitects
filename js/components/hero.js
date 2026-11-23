function Hero() {
  const h = SITE.hero;
  const strip = `<span>We are <span class="serif">${SITE.name}</span></span>`;
  return `
    <section class="hero" id="home">
      <p class="hero__top">${h.caption}</p>
      <div class="hero__stage">
        <h1 class="hero__title">
          <span class="line"><span class="line__inner">Crafting</span></span>
          <span class="line"><span class="line__inner">Luxury <span class="serif">Spaces</span></span></span>
        </h1>
        <figure class="hero__image"><img src="${h.image}" alt="${h.imageAlt}" width="600" height="800"></figure>
      </div>
      <div class="hero__captions"><span>${h.captionLeft}</span><span>${h.captionRight}</span></div>
    </section>
    <div class="marquee" aria-hidden="true"><div class="marquee__track">${strip}${strip}${strip}</div></div>`;
}
