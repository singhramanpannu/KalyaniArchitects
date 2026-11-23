function ContactForm() {
  const field = (id, label, control, optional) => `
    <div class="form__field">
      <label for="${id}">${label}${optional ? " <span>(optional)</span>" : ""}</label>
      ${control}
      <p class="form__error" id="${id}-err" hidden></p>
    </div>`;
  return `
    <form class="form" id="contact-form" novalidate data-reveal>
      ${field("name", "Name", '<input id="name" name="name" type="text" autocomplete="name" aria-describedby="name-err">')}
      ${field("email", "Email", '<input id="email" name="email" type="email" autocomplete="email" aria-describedby="email-err">')}
      ${field("phone", "Phone", '<input id="phone" name="phone" type="tel" autocomplete="tel" aria-describedby="phone-err">', true)}
      ${field("type", "Project type", '<select id="type" name="type"><option>Residential</option><option>Commercial</option><option>Other</option></select>')}
      ${field("message", "Message", '<textarea id="message" name="message" rows="5" aria-describedby="message-err"></textarea>')}
      <input class="form__hp" type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" aria-hidden="true">
      <button class="btn form__submit" type="submit">Send message</button>
      <p class="form__note">We only use your details to reply to your enquiry.</p>
      <div class="form__status" id="form-status" tabindex="-1"></div>
    </form>`;
}
