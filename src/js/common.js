document.addEventListener("DOMContentLoaded", () => {
  (function accordions() {
    let buttons = document.querySelectorAll(".bonus-content-info__btn");
    let accordions = document.querySelectorAll(".bonus-accordion");
    buttons.forEach((button, index) => {
      let icon = button.querySelector(".bonus-content-info__img-check");
      let text = button.querySelector("span");
      console.log(text);
      button.addEventListener("click", () => {
        icon.classList.toggle("active");
        accordions[index].classList.toggle("active");
        if (text.textContent == "More info") {
          text.textContent = "Hide info";
        } else {
          text.textContent = "More info";
        }
      });
    });
  })();

  (function hiddenRowTable() {
    let buttons = document.querySelectorAll(".rates-table__btn");

    buttons.forEach((btn) => {
      let icon = btn.querySelector(".rates-table__check");
      btn.addEventListener("click", () => {
        icon.classList.toggle("active");
        btn.parentElement.parentElement.nextElementSibling.classList.toggle(
          "show"
        );
      });
    });
  })();
});

2;
