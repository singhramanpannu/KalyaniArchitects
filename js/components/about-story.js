function AboutStory() {
  const a = SITE.aboutPage;
  return `
    <figure class="about-hero"><img src="${a.image}" alt="${a.imageAlt}" width="1600" height="900" loading="lazy"></figure>
    <section class="story" data-reveal>
      <span class="label">Our story</span>
      <div class="story__text">${a.story.map(p => `<p>${p}</p>`).join("")}</div>
    </section>`;
}
