const blurry = document.querySelector("#blur");
const hamburger = document.querySelector(".ham-menu");
const slideMenu = document.querySelector(".sliding-menu");
const closeMenu = function () {
  slideMenu.classList.remove("open-slide");
  blurry.classList.add("hidden");
  hamburger.classList.remove("active");
};
//opening menu by pressing ham button
hamburger.addEventListener("click", function () {
  this.classList.add("active");
  slideMenu.classList.add("open-slide");
  blurry.classList.remove("hidden");
});
// closing menu by clicking on blurry layer
blurry.addEventListener("click", function () {
  closeMenu();
});
//closing slide-menu by pressing Esc
document.addEventListener("keydown", function (keyPress) {
  keyPress.key === "Escape" && closeMenu();
});
document.querySelector("#checkbox").addEventListener("click", function () {
  this.classList.toggle("appearance-none");
});
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".swiper-container");
  const wrapper = document.querySelector(".swiper-wrapper");
  const slides = document.querySelectorAll(".swiper-slide");
  const pagination = document.querySelector(".swiper-pagination");
  const dots = [];

  let currentIndex = 0;

  function updateSlider() {
    const translateValue = currentIndex * 390 + currentIndex * 22;
    wrapper.style.transform = `translateX(-${translateValue}px`;
    updatePagination();
  }

  function updatePagination() {
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function createPaginationDots() {
    for (let i = 0; i < slides.length - 1; i++) {
      const dot = document.createElement("div");
      dot.classList.add("swiper-pagination-dot");
      dot.addEventListener("click", () => {
        currentIndex = i;
        updateSlider();
      });
      pagination.appendChild(dot);
      dots.push(dot);
    }
    updatePagination();
  }

  createPaginationDots();
});
