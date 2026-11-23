const Animations = {
  reduced: window.matchMedia("(prefers-reduced-motion: reduce)").matches,

  init() {
    if (this.reduced || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    this.smoothScroll();
    if (document.querySelector(".hero")) { this.hero(); this.marquee(); }
    this.reveals();
    this.sections();
    if (document.fonts) document.fonts.ready.then(() => ScrollTrigger.refresh());
  },

  smoothScroll() {
    if (typeof Lenis === "undefined") return;
    window.lenis = new Lenis({ duration: 1.2 });
    window.lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(t => window.lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  },

  hero() {
    gsap.from(".hero .line__inner", { yPercent: 110, duration: 0.9, ease: "power3.out", stagger: 0.12 });
    gsap.from(".hero__image", { opacity: 0, y: 30, duration: 1.1, delay: 0.45, ease: "power2.out" });
    gsap.to(".hero__image img", {
      yPercent: -8, ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
    });
  },

  marquee() {
    gsap.fromTo(".marquee__track", { xPercent: 0 }, {
      xPercent: -35, ease: "none",
      scrollTrigger: { trigger: ".marquee", start: "top bottom", end: "bottom top", scrub: true }
    });
  },

  sections() {
    if (document.querySelector(".about-hero img")) gsap.to(".about-hero img", { yPercent: -6, ease: "none", scrollTrigger: { trigger: ".about-hero", start: "top bottom", end: "bottom top", scrub: true } });
    if (document.querySelector(".pagehead")) gsap.from(".pagehead .line__inner", { yPercent: 110, duration: 0.9, ease: "power3.out", stagger: 0.12 });
    gsap.utils.toArray("[data-rule]").forEach(el => {
      gsap.from(el, { scaleX: 0, transformOrigin: "left", duration: 1, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
    });
    if (document.querySelector(".services__row")) gsap.from(".services__row", {
      y: 24, opacity: 0, duration: 0.8, ease: "power2.out", stagger: 0.12,
      scrollTrigger: { trigger: ".services__list", start: "top 85%", once: true }
    });
    gsap.utils.toArray(".pcard__img img").forEach(img => {
      gsap.from(img, {
        scale: 1.06, opacity: 0, duration: 1.2, ease: "power2.out", clearProps: "transform,opacity",
        scrollTrigger: { trigger: img, start: "top 90%", once: true }
      });
    });
  },

  reveals() {
    gsap.utils.toArray("[data-reveal]").forEach(el => {
      gsap.from(el, {
        y: 24, opacity: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true }
      });
    });
  }
};
