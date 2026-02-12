// ==========================
// Smooth Scroll
// ==========================
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// ==========================
// Highlight Menu (voor homepage met #links)
// ==========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ==========================
// DARK MODE TOGGLE (met switch)
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("darkModeSwitch");

  if (!toggleSwitch) return; // voorkomt errors op pagina's zonder switch

  // Zet dark mode als het in localStorage staat
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true;
  }

  // Luister naar toggle switch
  toggleSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", toggleSwitch.checked);

    // Sla voorkeur op
    if (toggleSwitch.checked) {
      localStorage.setItem("dark-mode", "enabled");
    } else {
      localStorage.setItem("dark-mode", "disabled");
    }
  });
});
