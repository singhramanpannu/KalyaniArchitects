document.addEventListener("DOMContentLoaded", () => {
  mount("hero-root", Hero());
  mount("about-root", About());
  mount("services-root", Services());
  mount("projects-root", ProjectsTeaser());
  mount("clients-root", Clients());
  mount("cta-root", ContactCta());
  initLayout();
});
