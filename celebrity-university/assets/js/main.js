// Simple navigation loader for GitHub Pages
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileSideMenu = document.getElementById('mobileSideMenu');
    const overlay = document.getElementById('overlay');
    const closeMobileMenu = document.getElementById('closeMobileMenu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileSideMenu.classList.add('active');
            overlay.classList.add('active');
        });
    }

    if (closeMobileMenu) {
        closeMobileMenu.addEventListener('click', function() {
            mobileSideMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function() {
            mobileSideMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    // Dropdown menus
    document.querySelectorAll('.dropdown-toggle, .mobile-dropdown-toggle').forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const menu = this.nextElementSibling;
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
    });
});
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileSideMenu = document.getElementById('mobileSideMenu');
  const overlay = document.getElementById('overlay');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileSideMenu.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });
    
    overlay.addEventListener('click', function() {
      mobileSideMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  }
  
  // Close menu when clicking links
  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileSideMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });
});
