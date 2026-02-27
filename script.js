/* ============================================
   Lake Pointe Dental Group - Homepage Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---------- Navbar Scroll Effect ----------
  const navbar = document.getElementById('navbar');

  function handleNavScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ---------- Mobile Navigation Toggle ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- Smooth Scroll for Anchor Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = navbar.offsetHeight;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---------- Scroll Reveal Animations ----------
  var animatedElements = document.querySelectorAll('[data-aos]');

  function revealOnScroll() {
    var windowHeight = window.innerHeight;

    animatedElements.forEach(function (el) {
      var elementTop = el.getBoundingClientRect().top;
      var revealPoint = windowHeight - 100;

      if (elementTop < revealPoint) {
        el.classList.add('aos-animate');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll();

  // ---------- Parallax Effect for Quote Section ----------
  var parallaxSection = document.querySelector('.parallax-quote');

  function handleParallax() {
    if (!parallaxSection) return;
    var scrolled = window.pageYOffset;
    var rect = parallaxSection.getBoundingClientRect();
    var sectionTop = rect.top + scrolled;
    var offset = (scrolled - sectionTop) * 0.3;

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      parallaxSection.style.backgroundPosition = 'center ' + offset + 'px';
    }
  }

  window.addEventListener('scroll', handleParallax, { passive: true });

  // ---------- Contact Form Handler ----------
  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var btn = contactForm.querySelector('button[type="submit"]');
      var originalText = btn.innerHTML;

      btn.innerHTML = '<span>Sending...</span>';
      btn.disabled = true;
      btn.style.opacity = '0.7';

      // Simulate form submission (replace with actual endpoint)
      setTimeout(function () {
        btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Request Sent!';
        btn.style.background = '#2D8A5E';
        btn.style.opacity = '1';

        setTimeout(function () {
          contactForm.reset();
          btn.innerHTML = originalText;
          btn.disabled = false;
          btn.style.background = '';
        }, 3000);
      }, 1500);
    });
  }

  // ---------- Active Nav Link on Scroll ----------
  var sections = document.querySelectorAll('section[id]');

  function highlightNavLink() {
    var scrollY = window.pageYOffset;

    sections.forEach(function (section) {
      var sectionHeight = section.offsetHeight;
      var sectionTop = section.offsetTop - 200;
      var sectionId = section.getAttribute('id');

      var link = document.querySelector('.nav-links a[href="#' + sectionId + '"]');
      if (link) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', highlightNavLink, { passive: true });

  // ---------- Staggered Card Animation ----------
  var cards = document.querySelectorAll('.service-card, .testimonial-card, .team-card');
  cards.forEach(function (card, index) {
    card.style.transitionDelay = (index % 3) * 0.1 + 's';
  });

});
