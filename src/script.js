

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navHead = document.querySelector('.nav-head');

  hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('active');
      navHead.classList.toggle('active');
  });

  // Close hamburger menu when clicking on a navigation link
  document.querySelectorAll('.nav-head a').forEach(item => {
      item.addEventListener('click', () => {
          hamburgerMenu.classList.remove('active');
          navHead.classList.remove('active');
      });
  });
});
