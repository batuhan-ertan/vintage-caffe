/* =========================================================
   VINTAGE CAFFE — script.js
   Sticky header, mobil hamburger drawer, newsletter form,
   dinamik copyright yılı
   ========================================================= */

(function () {
  'use strict';

  /* ---- STICKY HEADER SCROLL DAVRANIŞI ---- */
  var header = document.getElementById('siteHeader');
  var ticking = false;

  function updateHeader() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });
  updateHeader();

  /* ---- MOBİL HAMBURGER DRAWER ---- */
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var navDrawer = document.getElementById('navDrawer');
  var navOverlay = document.getElementById('navOverlay');
  var drawerCloseBtn = document.getElementById('drawerCloseBtn');

  function openDrawer() {
    navDrawer.classList.add('active');
    navOverlay.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('drawer-open');
  }

  function closeDrawer() {
    navDrawer.classList.remove('active');
    navOverlay.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('drawer-open');
  }

  hamburgerBtn.addEventListener('click', function () {
    var isOpen = navDrawer.classList.contains('active');
    if (isOpen) { closeDrawer(); } else { openDrawer(); }
  });

  drawerCloseBtn.addEventListener('click', closeDrawer);
  navOverlay.addEventListener('click', closeDrawer);

  // Drawer linklerine tıklanınca kapansın
  navDrawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });

  // ESC tuşu ile kapat
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navDrawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  /* ---- NEWSLETTER FORM ---- */
  var newsletterForm = document.getElementById('newsletterForm');
  var newsletterSuccess = document.getElementById('newsletterSuccess');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      newsletterSuccess.classList.add('show');
      newsletterForm.reset();
      setTimeout(function () {
        newsletterSuccess.classList.remove('show');
      }, 5000);
    });
  }

  /* ---- DİNAMİK COPYRIGHT YILI ---- */
  var yearEl = document.getElementById('copyrightYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();
