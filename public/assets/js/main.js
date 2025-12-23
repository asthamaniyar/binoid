// fixed header
window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  const scrollPosition = window.scrollY;
  const triggerPoint = 20;

  if (scrollPosition > triggerPoint) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});

window.addEventListener("scroll", function () {
  const header = document.querySelector(".announcement-bar");
  const scrollPosition = window.scrollY;
  const triggerPoint = 20;

  if (scrollPosition > triggerPoint) {
    header.classList.add("fixed-announcement-bar");
  } else {
    header.classList.remove("fixed-announcement-bar");
  }
});

// scroll header svg
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Nav Menu
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuButton = document.getElementById("menuButton");
  const menuItems = mobileMenu.querySelectorAll("a");
  function openMenu() {
    mobileMenu.classList.remove("-translate-x-full");
    document.body.style.overflow = "hidden";
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  }
  function closeMenu() {
    mobileMenu.classList.add("-translate-x-full");
    document.body.style.overflow = "";
    closeIcon.classList.add("hidden");
    menuIcon.classList.remove("hidden");
  }
  menuIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    openMenu();
  });
  closeIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    closeMenu();
  });
  mobileMenu.addEventListener("click", (e) => e.stopPropagation());
  document.addEventListener("click", closeMenu);
  menuItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
});
