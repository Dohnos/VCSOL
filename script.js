/* ==== Page Hero Scroll Arrow ==== */
const pageHeroScroll = document.querySelector(".page-hero-scroll");
if (pageHeroScroll) {
  function scrollToHero() {
    const heroSection = document.querySelector(".hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  pageHeroScroll.addEventListener("click", scrollToHero);
  pageHeroScroll.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToHero();
    }
  });
}

/* ==== Mobile Menu ==== */
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

/* ==== Scroll Animations ==== */
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -40px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll("[data-animate]").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  observer.observe(el);
});

/* ==== Active Nav Highlight ==== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

function highlightNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", highlightNav, { passive: true });
