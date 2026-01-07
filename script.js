// Current year in footer
document.addEventListener("DOMContentLoaded", function () {
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Mobile nav toggle
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    var expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("show");
  });
})();

// Smooth scroll for same-page links
(function () {
  document.addEventListener("click", function (e) {
    var target = e.target;
    if (target.tagName === "A" && target.getAttribute("href") && target.getAttribute("href").startsWith("#")) {
      var id = target.getAttribute("href").substring(1);
      var el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
})();

// Program cards: expand/collapse and dynamic WhatsApp link
(function () {
  var cards = document.querySelectorAll(".program-card");
  if (!cards.length) return;

  var baseUrl =
    "https://wa.me/919876543210?text=Hello%20Fityear!%20I%27d%20like%20to%20join%20the%201-year%20program%20for%20%E2%82%B98,999.";

  cards.forEach(function (card) {
    var programName = card.getAttribute("data-program") || "Fityear program";
    var toggleBtn = card.querySelector(".program-toggle");
    var details = card.querySelector(".program-details");
    var joinBtn = card.querySelector(".join-program");

    if (toggleBtn && details) {
      toggleBtn.addEventListener("click", function () {
        var expanded = toggleBtn.getAttribute("aria-expanded") === "true";
        toggleBtn.setAttribute("aria-expanded", String(!expanded));
        details.hidden = expanded;
      });
    }

    if (joinBtn) {
      var message =
        baseUrl +
        "%20Please%20enrol%20me%20into%20the%20" +
        encodeURIComponent(programName) +
        "%20program.%20My%20name%20is%20%5BYour%20Name%5D.";
      joinBtn.setAttribute("href", message);
    }
  });
})();
// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
  // Testimonials carousel
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  // Auto-advance every 6 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 6000);
});

// FAQ accordion
(function () {
  var questions = document.querySelectorAll(".faq-question");
  if (!questions.length) return;

  questions.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      var answer = btn.nextElementSibling;
      if (answer) {
        answer.hidden = expanded;
      }
    });
  });
})();
