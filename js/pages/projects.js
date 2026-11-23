function initProjectFilters() {
  const btns = [...document.querySelectorAll(".filters__btn")];
  const cards = [...document.querySelectorAll(".pgrid .pcard")];
  const count = document.getElementById("pcount");
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const apply = f => {
    const shown = cards.filter(c => f === "All" || c.dataset.type === f);
    btns.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.filter === f)));
    cards.forEach(c => { c.hidden = !shown.includes(c); });
    count.textContent = `${shown.length} project${shown.length === 1 ? "" : "s"}`;
    if (window.gsap && !calm) {
      gsap.fromTo(shown, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out", clearProps: "transform,opacity" });
    }
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  };
  btns.forEach(b => b.addEventListener("click", () => apply(b.dataset.filter)));

  const target = location.hash && document.getElementById(location.hash.slice(1));
  if (target) {
    setTimeout(() => {
      if (window.lenis) window.lenis.scrollTo(target, { offset: -96 }); else target.scrollIntoView();
      target.classList.add("is-highlight");
      setTimeout(() => target.classList.remove("is-highlight"), 2000);
    }, 600);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  mount("pagehead-root", PageHeader({
    label: "Portfolio",
    title: ["Selected", '<span class="serif">projects</span>'],
    intro: "Homes and workplaces we have designed, from first sketch to handover.",
    extra: `<p class="pagehead__count" id="pcount" aria-live="polite">${SITE.projects.length} projects</p>`
  }));
  mount("pgrid-root", ProjectsGrid());
  mount("cta-root", ContactCta());
  initLayout();
  initProjectFilters();
});
