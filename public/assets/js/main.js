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

// fixed announcement bar
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

// close button black while scrolling
window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY > 20;
  const isLargeScreen = window.matchMedia("(min-width: 1280px)").matches;
  const paths = closeIcon.querySelectorAll("path");
  let targetTop = "";
  if (isLargeScreen) {
    targetTop = isScrolled ? "140px" : "143px";
  } else {
    targetTop = isScrolled ? "119px" : "146px";
  }
  mobileMenu.style.setProperty("top", targetTop, "important");
  paths.forEach((path) => {
    path.setAttribute("stroke", isScrolled ? "black" : "white");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.getElementById("search-icon");
  const searchBox = document.getElementById("search-box");

  searchIcon.addEventListener("click", () => {
    searchBox.classList.toggle("hidden");
  });
  document.addEventListener("click", (event) => {
    if (
      !searchBox.contains(event.target) &&
      !searchIcon.contains(event.target)
    ) {
      searchBox.classList.add("hidden");
    }
  });
});

var swiper = new Swiper(".choose-you-sip", {
  slidesPerView: 1,
  spaceBetween: 30,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
  breakpoints: {
    320: {
      slidesPerView: 1.4,
      spaceBetween: 28,
      initialSlide: 0,
      centeredSlides: true,
      loop: false,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 28,
      centeredSlides: true,
      loop: false,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 28,
      centeredSlides: false,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 55,
      centeredSlides: false,
    },
  },
});

new Swiper(".testimonialSwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 55,
      centeredSlides: false,
    },
  },
});

var swiper = new Swiper(".all-flavor-swiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  centeredSlides: true,
  centeredSlidesBounds: true,
  watchOverflow: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,
    },
    1280: {
      slidesPerView: 2.3,
      spaceBetween: 20,
      centeredSlides: false,
    },
  },
});
