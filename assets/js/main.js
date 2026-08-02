/* ==========================================================================
   NS Barber Shop — main.js
   Language toggle (ES/EN) + dynamic WhatsApp booking
   ========================================================================== */

// Booking phone number (WhatsApp international format, no "+")
const PHONE = 50687154471;

/* --------------------------------------------------------------------------
   Language toggle
   Swaps text content between data-es / data-en attributes.
   -------------------------------------------------------------------------- */
let currentLang = "es";

const bookMessages = {
  es: (service) =>
    `Hola NS Barber Shop 👋, quiero reservar el servicio: ${service}. ¿Cuál es la disponibilidad?`,
  en: (service) =>
    `Hello NS Barber Shop 👋, I'd like to book the service: ${service}. What's your availability?`,
};

function applyLanguage(lang) {
  currentLang = lang;
  const attr = `data-${lang}`;

  document.querySelectorAll(`[${attr}]`).forEach((el) => {
    const value = el.getAttribute(attr);
    if (value !== null) el.textContent = value;
  });

  document.documentElement.setAttribute("lang", lang);
  updateLangToggleUI();
}

function updateLangToggleUI() {
  const toggle = document.getElementById("langToggle");
  if (!toggle) return;

  const current = toggle.querySelector(".lang-toggle__current");
  const other = toggle.querySelector(".lang-toggle__other");
  if (!current || !other) return;

  if (currentLang === "es") {
    current.textContent = "ES";
    other.textContent = "EN";
  } else {
    current.textContent = "EN";
    other.textContent = "ES";
  }
}

function toggleLanguage() {
  applyLanguage(currentLang === "es" ? "en" : "es");
}

/* --------------------------------------------------------------------------
   WhatsApp booking
   Opens a wa.me link with a pre-filled, language-aware message.
   -------------------------------------------------------------------------- */
function bookService(serviceName) {
  const service = serviceName || (currentLang === "es" ? "Reserva General" : "General Booking");
  const message = bookMessages[currentLang](service);
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

/* --------------------------------------------------------------------------
   Wiring
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Language toggle button
  const langToggle = document.getElementById("langToggle");
  if (langToggle) langToggle.addEventListener("click", toggleLanguage);

  // Delegated booking: any element with [data-book] opens WhatsApp with a
  // message pre-filled for that specific service/hairstyle. Delegation covers
  // the gallery "Reservar este Estilo" buttons and any element added later.
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-book]");
    if (!trigger) return;
    e.preventDefault();
    bookService(trigger.getAttribute("data-book"));
  });

  // Initialize UI in Spanish
  updateLangToggleUI();
});
