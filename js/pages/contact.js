document.addEventListener("DOMContentLoaded", () => {
  mount("pagehead-root", PageHeader({
    label: "Contact",
    title: ["Let’s talk about", '<span class="serif">your space</span>'],
    intro: `Tell us a little about your project. ${SITE.contact.replyTime}`
  }));
  mount("contact-root", `<section class="contact">${ContactDetails()}${ContactForm()}</section>`);
  initLayout();
  ContactFormHandler.init();
});
