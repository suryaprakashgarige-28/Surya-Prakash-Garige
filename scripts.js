// scripts.js

// 1) Keep the footer year correct (fallback in case inline script is removed)
(function () {
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
})();

// 2) Smooth scroll for older browsers (most modern browsers already support CSS scroll-behavior)
(function () {
  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href").slice(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
})();

// 3) Optional: highlight active section in navbar on scroll
(function () {
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".nav-links a");

  if (!sections.length || !navLinks.length) return;

  function onScroll() {
    var scrollPos = window.scrollY || window.pageYOffset;

    sections.forEach(function (section) {
      var rect = section.getBoundingClientRect();
      var top = rect.top + window.scrollY - 120; // offset for navbar
      var bottom = top + section.offsetHeight;
      var id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(function (link) {
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
})();
