window.alert("This website is under Pre development");

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navHead = document.querySelector('.nav-head');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navHead.classList.toggle('active');
});
