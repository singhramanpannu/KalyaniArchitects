function ContactDetails() {
  const c = SITE.contact;
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.address)}`;
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
  const social = SITE.socials.map(s => `<a href="${s.href}" target="_blank" rel="noopener">${s.label}</a>`).join("");
  return `
    <div class="cinfo" data-reveal>
      <div><h2>Email</h2><a href="mailto:${c.email}">${c.email}</a></div>
      <div><h2>Phone</h2><a href="tel:${c.phone.replace(/\s/g, "")}">${c.phone}</a></div>
      <div><h2>Studio</h2><address>${c.address}</address><a href="${maps}" target="_blank" rel="noopener">Open in Google Maps</a></div>
      <div><h2>Hours</h2><p>${c.hours}</p></div>
      <div><h2>Chat</h2><a href="${wa}" target="_blank" rel="noopener">WhatsApp</a></div>
      <div><h2>Follow</h2><div class="cinfo__social">${social}</div></div>
    </div>`;
}
