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
