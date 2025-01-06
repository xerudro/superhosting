function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  const contentWrapper = document.getElementById('content-wrapper');

  // Toggle the active class on the menu
  navLinks.classList.toggle('active');

  // Push the content wrapper down based on the menu's height
  if (navLinks.classList.contains('active')) {
    contentWrapper.style.marginTop = `${navLinks.offsetHeight}px`;
  } else {
    contentWrapper.style.marginTop = '0';
  }
}

document.getElementById('menu-toggle').addEventListener('click', toggleMenu);

window.addEventListener('resize', function () {
  const navLinks = document.getElementById('nav-links');
  const contentWrapper = document.getElementById('content-wrapper');

  if (navLinks.classList.contains('active') && window.innerWidth < 768) {
    contentWrapper.style.marginTop = `${navLinks.offsetHeight}px`;
  } else {
    contentWrapper.style.marginTop = '0';
  }
});

/* View Plans Button */
document.addEventListener('DOMContentLoaded', function() {
  const viewPlansBtn = document.getElementById('view-plans-btn');
  const hostingPlansSection = document.getElementById('hosting-plans');

  viewPlansBtn.addEventListener('click', function(e) {
    e.preventDefault();
    hostingPlansSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Hosting submenu functionality
  const hostingNavItem = document.querySelector('.nav-item-hosting');
  const submenu = hostingNavItem.querySelector('.submenu-hosting');
  const heroSection = document.querySelector('.hero-section');
  const contentWrapper = document.getElementById('content-wrapper');

  hostingNavItem.addEventListener('mouseenter', function() {
    submenu.style.display = 'block';
    const submenuHeight = submenu.offsetHeight;
    heroSection.style.marginTop = `${submenuHeight}px`;
    contentWrapper.style.marginTop = `${submenuHeight}px`;
  });

  hostingNavItem.addEventListener('mouseleave', function() {
    submenu.style.display = 'none';
    heroSection.style.marginTop = '0';
    contentWrapper.style.marginTop = '0';
  });
});
