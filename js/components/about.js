function About() {
  const a = SITE.about;
  return `
    <section class="about" id="about">
      <div class="about__inner">
        <div class="about__image" data-reveal><img src="${a.image}" alt="${a.imageAlt}" width="800" height="1000" loading="lazy"></div>
        <div class="about__content" data-reveal>
          <span class="label">${a.label}</span>
          <h2 class="about__title">Where <span class="serif">design</span> meets lifestyle in perfect <span class="serif">harmony.</span></h2>
          <p class="about__text">${a.text}</p>
          <a class="btn" href="${SITE.pages.about}">${a.button}</a>
        </div>
      </div>
    </section>`;
}
