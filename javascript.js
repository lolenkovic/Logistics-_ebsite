const navbar = document.querySelector('.navbar');
const navbarItems = document.querySelectorAll('.navbar-nav>li>a');
const uslugedropdown = document.getElementById('uslugedropdown');

function updateNavbarStyles() {
  if (window.scrollY > 75) {
    navbar.classList.add('scrolled');
    navbarItems.forEach(item => {
      item.style.color = 'black';
    });
  } else {
    navbar.classList.remove('scrolled');
    navbarItems.forEach(item => {
      item.style.color = 'white';
    });
  }
}

window.addEventListener('scroll', updateNavbarStyles);
document.addEventListener('DOMContentLoaded', () => {
  updateNavbarStyles();
});
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'albumLabel': "Slika %1 od %2"
})

