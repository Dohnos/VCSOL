const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    const isExpanded = nav.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", String(isExpanded));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
