const Interactions = {
  init() {
    const root = document.documentElement;
    const nav = document.querySelector(".nav");
    const toggle = document.querySelector(".nav__toggle");
    const menu = document.getElementById("menu");
    const topBtn = document.querySelector(".fab--top");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Images that fail to load keep the grey placeholder box
    document.querySelectorAll("img").forEach(img => {
      img.addEventListener("error", () => img.classList.add("is-missing"));
    });

    const setMenu = open => {
      menu.classList.toggle("is-open", open);
      root.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (open) nav.classList.remove("is-hidden");
      if (window.lenis) open ? window.lenis.stop() : window.lenis.start();
    };
    toggle.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
    document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

    // Hide navbar on scroll down, show on scroll up; back-to-top after 400px
    let last = window.scrollY;
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      if (!root.classList.contains("menu-open")) nav.classList.toggle("is-hidden", y > last && y > 120);
      topBtn.classList.toggle("is-visible", y > 400);
      last = y;
    }, { passive: true });

    const goTo = (target, offset = 0) => {
      if (window.lenis) window.lenis.scrollTo(target, { offset });
      else if (target === 0) window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
      else target.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    };

    topBtn.addEventListener("click", () => goTo(0));

    document.addEventListener("click", e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      setMenu(false);
      goTo(a.getAttribute("href") === "#home" ? 0 : target, -24);
    });
  }
};
