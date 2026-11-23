document.addEventListener("DOMContentLoaded", () => {
  const a = SITE.aboutPage;
  mount("pagehead-root", PageHeader({ label: "About us", title: ["A studio built on", '<span class="serif">calm</span> spaces'], intro: a.intro }));
  mount("about-body-root", AboutStory() + Principles() + Team());
  mount("cta-root", ContactCta());
  initLayout();
});
