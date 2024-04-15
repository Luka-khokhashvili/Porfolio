// Header opacity control function
document.addEventListener("DOMContentLoaded", function () {
  let header = document.getElementById("header");

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY === 0) {
        header.classList.remove("less-opacity");
      } else {
        header.classList.add("less-opacity");
      }
    });
  }
});

const burgerMenu = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const navBarItems = document.querySelectorAll(".nav-bar-item");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("is-active");
  navBar.classList.toggle("visible");
});

// Iterate over each navBarItem and add event listener
navBarItems.forEach((navBarItem) => {
  navBarItem.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active");
    navBar.classList.remove("visible");
  });
});
