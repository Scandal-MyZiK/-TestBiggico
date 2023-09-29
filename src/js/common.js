document.addEventListener("DOMContentLoaded", () => {
  (function accordions() {
    let buttons = document.querySelectorAll(".bonus-content-info__btn");
    let accordions = document.querySelectorAll(".bonus-accordion");
    buttons.forEach((button, index) => {
      let icon = button.querySelector(".bonus-content-info__img-check");
      button.addEventListener("click", () => {
        icon.classList.toggle("active");
        accordions[index].classList.toggle("active");
      });
    });
  })();
});
