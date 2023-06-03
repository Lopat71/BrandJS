const button = document.querySelector(".brands__swip-title");
const cards = document.querySelector(".brands__cards");
const arrow = document.querySelector(".brands__swip-arrow");

button.addEventListener("click", (btn) => {
  cards.classList.toggle("wrap-hide");
  if (btn.target.innerHTML === "Скрыть") {
    btn.target.innerHTML = "Показать все";
  } else {
    btn.target.innerHTML = "Скрыть";
  }
  arrow.classList.toggle("arrow-rotate");
});
