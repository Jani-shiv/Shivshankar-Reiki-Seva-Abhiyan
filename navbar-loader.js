// navbar-loader.js: Dynamically loads the navbar into the page
function loadNavbar() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      const navContainer = document.createElement('div');
      navContainer.innerHTML = data;
      document.body.insertBefore(navContainer.firstElementChild, document.body.firstChild);
      highlightActiveNav();
    });
}

function highlightActiveNav() {
  const links = document.querySelectorAll('.navbar-nav .nav-link');
  const current = window.location.pathname.split('/').pop().toLowerCase();
  links.forEach(link => {
    if (link.getAttribute('href').toLowerCase() === current) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', loadNavbar);
