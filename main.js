document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-icon");
  const navItems = document.querySelector(".nav-items");

  burgerMenu.addEventListener("click", function () {
    navItems.classList.toggle("active");
  });
});
