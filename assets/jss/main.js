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
