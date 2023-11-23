const $ = document;

const mobileNavbarSelector = $.querySelector(`.mobile-navbar`);
const mobileNavTogglersSelector = $.querySelectorAll(`.mobile-nav-toggler`);
const overlaySelector = $.getElementById(`overlay`);

mobileNavTogglersSelector.forEach((mobileNavToggler) => {
  mobileNavToggler.addEventListener(`click`, () => {
    if (mobileNavbarSelector.classList.contains(`mobile-nav-active`)) {
      mobileNavbarSelector.classList.remove(`mobile-nav-active`);
      overlaySelector.classList.remove(`block`);
      overlaySelector.classList.add(`hidden`);
    } else {
      mobileNavbarSelector.classList.add(`mobile-nav-active`);
      overlaySelector.classList.remove(`hidden`);
      overlaySelector.classList.add(`block`);
    }
  });
});
