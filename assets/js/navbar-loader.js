// navbar-loader.js: Dynamically loads the navbar into the page
function loadNavbar() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      const navContainer = document.createElement('div');
      navContainer.innerHTML = data;
      document.body.insertBefore(navContainer.firstElementChild, document.body.firstChild);
      
      highlightActiveNav();
      setupMobileMenu(); // Initialize mobile menu
    })
    .catch(error => console.error('Error loading navbar:', error));
}

function setupMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener('click', () => {
             navLinks.classList.toggle('active');
        });
    }
}

function highlightActiveNav() {
  const links = document.querySelectorAll('.navbar .nav-link'); // targeted more specific selector
  const current = window.location.pathname.split('/').pop().toLowerCase();
  
  if (current === '') return; // Handle root

  links.forEach(link => {
    // Basic check for matching href
    if (link.getAttribute('href').toLowerCase() === current) {
      link.classList.add('active');
      link.style.color = 'var(--secondary)'; // Inline fail-safe or rely on CSS
      link.style.fontWeight = '700';
    }
  });
}

document.addEventListener('DOMContentLoaded', loadNavbar);
