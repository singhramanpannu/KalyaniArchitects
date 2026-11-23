const mount = (id, html) => {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
};

/* Shared on every page: call after the page's own sections are mounted. */
function initLayout() {
  mount("navbar-root", Navbar());
  mount("footer-root", Footer());
  mount("floating-root", FloatingActions());
  Animations.init();
  Interactions.init();
}
