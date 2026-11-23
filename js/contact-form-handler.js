const ContactFormHandler = {
  init() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    const status = document.getElementById("form-status");
    const btn = form.querySelector(".form__submit");
    const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
    const esc = s => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

    const rules = {
      name: v => (v.trim().length >= 2 ? "" : "Enter your name."),
      email: v => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Enter a valid email address."),
      phone: v => {
        if (!v.trim()) return "";
        const digits = v.replace(/\D/g, "").length;
        return /^[\d\s+\-()]+$/.test(v) && digits >= 7 && digits <= 15 ? "" : "Enter a valid phone number, or leave it empty.";
      },
      message: v => (v.trim().length >= 10 ? "" : "Write at least 10 characters.")
    };
    const fields = [...form.querySelectorAll("input, textarea")].filter(el => rules[el.name]);

    const check = el => {
      const msg = rules[el.name](el.value);
      const err = document.getElementById(`${el.id}-err`);
      err.textContent = msg;
      err.hidden = !msg;
      el.setAttribute("aria-invalid", msg ? "true" : "false");
      return !msg;
    };
    fields.forEach(el => {
      el.addEventListener("blur", () => check(el));
      el.addEventListener("input", () => { if (el.getAttribute("aria-invalid") === "true") check(el); });
    });

    const show = (ok, html) => {
      status.setAttribute("role", ok ? "status" : "alert");
      status.className = `form__status ${ok ? "is-ok" : "is-error"}`;
      status.innerHTML = html;
      status.focus();
    };

    let sending = false;
    form.addEventListener("submit", async e => {
      e.preventDefault();
      if (sending) return;
      const invalid = fields.filter(el => !check(el));
      if (invalid.length) { invalid[0].focus(); return; }

      const data = Object.fromEntries(new FormData(form).entries());
      if (form.elements.botcheck.checked) { show(true, "Thank you, we will reply soon."); form.reset(); return; }
      if (SITE.form.accessKey.startsWith("YOUR_")) console.warn("Set SITE.form.accessKey in js/data.js to enable the contact form.");

      sending = true;
      btn.disabled = true;
      btn.textContent = "Sending";
      status.className = "form__status";
      status.textContent = "";
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), 12000);
      try {
        const res = await fetch(SITE.form.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: SITE.form.accessKey,
            subject: `New enquiry from ${data.name} via website`,
            from_name: `${SITE.name} website`,
            name: data.name,
            email: data.email,
            phone: data.phone || "Not provided",
            project_type: data.type,
            message: data.message
          }),
          signal: ctl.signal
        });
        const json = await res.json();
        if (!res.ok || !json.success) throw new Error(json.message || "Request failed");
        show(true, `Thank you, we will reply to ${esc(data.email)} soon.`);
        form.reset();
      } catch (err) {
        show(false, `We could not send your message. Email us at <a href="mailto:${SITE.contact.email}">${SITE.contact.email}</a> or write on <a href="${wa}" target="_blank" rel="noopener">WhatsApp</a>.`);
      } finally {
        clearTimeout(timer);
        sending = false;
        btn.disabled = false;
        btn.textContent = "Send message";
      }
    });
  }
};
