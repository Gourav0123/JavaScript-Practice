// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".custom-navbar");
  navbar.classList.toggle("nav-scrolled", window.scrollY > 50);
});
document.addEventListener("click", function (event) {
    const navbar = document.querySelector(".navbar-collapse");
    const toggler = document.querySelector(".navbar-toggler");

    const isClickInside = navbar.contains(event.target) || toggler.contains(event.target);

    if (!isClickInside && navbar.classList.contains("show")) {
      new bootstrap.Collapse(navbar).hide();
    }
  });

// Active link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Dark mode toggle
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};
