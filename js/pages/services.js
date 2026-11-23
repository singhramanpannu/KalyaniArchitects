document.addEventListener("DOMContentLoaded", () => {
  mount("pagehead-root", PageHeader({ label: "Services", title: ["What we", '<span class="serif">design</span>'], intro: SITE.servicesPage.intro }));
  mount("services-body-root", ServiceBlocks() + Process() + Faq());
  mount("cta-root", ContactCta());
  initLayout();
});
