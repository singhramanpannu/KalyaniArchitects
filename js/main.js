const mount = (id, html) => {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
};

document.addEventListener("DOMContentLoaded", () => {
  mount("navbar-root", Navbar());
  mount("hero-root", Hero());
  mount("about-root", About());
  mount("services-root", Services());
  mount("projects-root", ProjectsTeaser());
  mount("clients-root", Clients());
  mount("cta-root", ContactCta());
  mount("footer-root", Footer());
  mount("floating-root", FloatingActions());

  Animations.init();
  Interactions.init();
});
