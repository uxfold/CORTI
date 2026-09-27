(() => {
  const menu = document.getElementById("mobile-menu");
  const openBtn = document.querySelector("[aria-label='Open menu']");
  if (menu && openBtn) {
    const close = () => {
      menu.classList.add("hidden");
      document.body.style.overflow = "";
    };
    openBtn.addEventListener("click", () => {
      menu.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
    menu.querySelectorAll("button[data-close-menu]").forEach((el) => {
      el.addEventListener("click", close);
    });
  }

  document.querySelectorAll("[data-faq]").forEach((root) => {
    root.addEventListener("click", (event) => {
      const btn = event.target.closest("button");
      if (!btn || !root.contains(btn)) return;
      const parent = btn.parentElement;
      const answer = parent ? parent.querySelector("[data-faq-answer]") : null;
      const wasOpen = btn.getAttribute("aria-expanded") === "true";
      root.querySelectorAll("button").forEach((other) => {
        other.setAttribute("aria-expanded", "false");
        const icon = other.querySelector("[data-faq-icon]");
        if (icon) {
          icon.textContent = "+";
          icon.classList.remove("bg-gold");
        }
        const otherParent = other.parentElement;
        const otherAnswer = otherParent ? otherParent.querySelector("[data-faq-answer]") : null;
        if (otherAnswer) otherAnswer.classList.add("hidden");
      });
      if (!wasOpen && answer) {
        btn.setAttribute("aria-expanded", "true");
        const icon = btn.querySelector("[data-faq-icon]");
        if (icon) {
          icon.textContent = "-";
          icon.classList.add("bg-gold");
        }
        answer.classList.remove("hidden");
      }
    });
  });

  document.querySelectorAll("[data-testimonials]").forEach((root) => {
    const slides = [...root.querySelectorAll("[data-slide]")];
    const show = (index) => {
      const next = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle("hidden", i !== next));
      root.querySelectorAll("[data-slide-btn]").forEach((btn, i) => {
        btn.classList.toggle("bg-gold", i === next);
        btn.classList.toggle("bg-mist", i !== next);
      });
    };
    root.addEventListener("click", (event) => {
      const current = slides.findIndex((slide) => !slide.classList.contains("hidden"));
      if (event.target.closest("[data-slide-prev]")) show(current - 1);
      else if (event.target.closest("[data-slide-next]")) show(current + 1);
      else {
        const btn = event.target.closest("[data-slide-btn]");
        if (btn) show(Number(btn.getAttribute("data-slide-btn")));
      }
    });
  });

  document.querySelectorAll("form").forEach((form) => {
    if (!form.querySelector("[name='fullname']")) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("fullname") || "").trim();
      const mobile = String(data.get("mobile") || "").trim();
      const message = String(data.get("message") || "").trim();
      if (mobile.replace(/\D/g, "").length < 10) {
        window.alert("Please enter a valid 10-digit mobile number.");
        return;
      }
      const text = encodeURIComponent("Hello Corti Hearing Clinic,\n\nName: " + name + "\nMobile: " + mobile + "\n\n" + message);
      window.open("https://api.whatsapp.com/send?phone=919844091018&text=" + text, "_blank", "noopener");
      const note = document.createElement("div");
      note.className = "rounded-lg border border-line bg-cream p-8";
      const title = document.createElement("h3");
      title.className = "text-2xl font-semibold";
      title.textContent = "Thank you, " + (name.split(" ")[0] || "there") + ".";
      const body = document.createElement("p");
      body.className = "mt-3 text-sm text-muted";
      body.textContent = "WhatsApp should have opened with your message. If it did not, call us on +91 98440 91018 or tap the green button on this page.";
      note.append(title, body);
      form.replaceWith(note);
    });
  });
})();
