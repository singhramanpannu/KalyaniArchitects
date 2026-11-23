function Footer() {
  const c = SITE.contact;
  const logo = `<svg viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><circle cx="15" cy="15" r="13"/><path d="M8 22V8h7a4 4 0 010 8H8M15 16l7 6"/></svg>`;
  const links = SITE.nav.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("");
  const social = SITE.socials.map(s => `<li><a href="${s.href}" target="_blank" rel="noopener">${s.label}</a></li>`).join("");
  return `
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__brand">
          <a class="footer__logo" href="${SITE.pages.home}">${logo}<span>${SITE.name}</span></a>
          <p>${SITE.footerText}</p>
        </div>
        <div><h3>Contact</h3><ul>
          <li><a href="mailto:${c.email}">${c.email}</a></li>
          <li><a href="tel:${c.phone.replace(/\s/g, "")}">${c.phone}</a></li>
          <li><address>${c.address}</address></li>
        </ul></div>
        <div><h3>Quick links</h3><ul>${links}</ul></div>
        <div><h3>Social</h3><ul>${social}</ul></div>
      </div>
      <div class="footer__bar">
        <p>© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</p>
        <p><a href="#">Privacy</a><a href="#">Terms</a></p>
      </div>
    </footer>`;
}
