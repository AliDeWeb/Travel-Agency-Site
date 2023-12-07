document.querySelector(".ham-menu").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".sliding-menu").classList.toggle("open-slide");
});
