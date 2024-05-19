document.addEventListener("DOMContentLoaded", function() {
  const headerInclude = document.getElementById("header-include");
  const footerInclude = document.getElementById("footer-include");

  fetch("includes/header.html")
    .then(response => response.text())
    .then(data => {
      headerInclude.innerHTML = data;
      addHamburgerMenu();
    });

  fetch("includes/footer.html")
    .then(response => response.text())
    .then(data => {
      footerInclude.innerHTML = data;
    });

  function addHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});