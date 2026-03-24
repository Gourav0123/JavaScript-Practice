// // Navbar scroll effect
// window.addEventListener("scroll", function () {
//   const navbar = document.querySelector(".custom-navbar");
//   navbar.classList.toggle("nav-scrolled", window.scrollY > 50);
// });
// document.addEventListener("click", function (event) {
//     const navbar = document.querySelector(".navbar-collapse");
//     const toggler = document.querySelector(".navbar-toggler");

//     const isClickInside = navbar.contains(event.target) || toggler.contains(event.target);

//     if (!isClickInside && navbar.classList.contains("show")) {
//       new bootstrap.Collapse(navbar).hide();
//     }
//   });

// // Active link on scroll
// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".nav-link");

// window.addEventListener("scroll", () => {
//   let current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop - 100;
//     if (pageYOffset >= sectionTop) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//     if (link.getAttribute("href") === "#" + current) {
//       link.classList.add("active");
//     }
//   });
// });

// // Dark mode toggle
// document.getElementById("themeToggle").onclick = () => {
//   document.body.classList.toggle("dark-mode");
// };

/**
 * Portfolio Interactive Scripts
 */

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbarCollapse");
  const toggler = document.querySelector(".navbar-toggler");
  const overlay = document.querySelector(".menu-overlay");

  // Toggle overlay when menu opens/closes
  toggler.addEventListener("click", function () {
    setTimeout(() => {
      if (navbar.classList.contains("show")) {
        overlay.classList.add("active");
      } else {
        overlay.classList.remove("active");
      }
    }, 200);
  });

  // Click outside → close menu
  overlay.addEventListener("click", function () {
    const bsCollapse = new bootstrap.Collapse(navbar, {
      toggle: false,
    });
    bsCollapse.hide();
    overlay.classList.remove("active");
  });

  // Click nav links → close menu
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      if (navbar.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbar, {
          toggle: false,
        });
        bsCollapse.hide();
        overlay.classList.remove("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // 1. Navigation Scroll Effect
  const mainNav = document.getElementById("mainNav");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      mainNav.classList.add("scrolled", "shadow-sm");
      mainNav.classList.remove("py-lg-3");
    } else {
      mainNav.classList.remove("scrolled", "shadow-sm");
      mainNav.classList.add("py-lg-3");
    }
  };

  // Initialize & listen
  handleScroll();
  window.addEventListener("scroll", handleScroll);

  // 2. Typed.js Initialization (Typing text effect in hero)
  const typedTarget = document.querySelector(".typed-text");
  if (typedTarget) {
    new Typed(".typed-text", {
      strings: [
        "Web Designer",
        "UI/UX Expert",
        "Frontend Developer",
        "Creative Thinker",
      ],
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
      showCursor: false, // Custom cursor is handled via CSS or next element
    });
  }
  // 3. Scroll Reveal Animations (Intersection Observer)
  // Fade in elements when they become visible in viewport
  const fadeElements = document.querySelectorAll(
    ".service-card, .portfolio-item, .contact-form-wrapper, .bg-gradient-box + img",
  );

  // Initial state
  fadeElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
  });

  const revealOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  fadeElements.forEach((el) => revealObserver.observe(el));

  // 4. Interactive Hero Blobs (Mouse Move Parallax)
  const heroSection = document.getElementById("home");
  const shapeBlobs = document.querySelectorAll(".shape-blob");

  if (heroSection && shapeBlobs.length > 0) {
    heroSection.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1

      if (shapeBlobs[0]) {
        shapeBlobs[0].style.transform = `translate(${x * 60}px, ${y * 60}px)`;
      }
      if (shapeBlobs[1]) {
        shapeBlobs[1].style.transform = `translate(${x * -40}px, ${y * -40}px)`;
      }
    });
  }

  // 5. Statistics Counter Animation
  const statElements = document.querySelectorAll(
    ".display-5.fw-bold.text-gradient-primary",
  );

  const countUpObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const finalTarget = parseInt(el.innerText);
          const isPlus = el.innerText.includes("+");

          if (!isNaN(finalTarget)) {
            let current = 0;
            const duration = 2000; // ms
            const intervalTime = 20;
            const increment = finalTarget / (duration / intervalTime);

            el.innerText = "0";

            const updateTimer = setInterval(() => {
              current += increment;
              if (current >= finalTarget) {
                clearInterval(updateTimer);
                el.innerText = finalTarget + (isPlus ? "+" : "");
              } else {
                el.innerText = Math.ceil(current) + (isPlus ? "+" : "");
              }
            }, intervalTime);
          }
          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  statElements.forEach((stat) => {
    // Assume text is like "5+", save in data-target isn't needed if we parse inline text safely.
    countUpObserver.observe(stat);
  });
});
