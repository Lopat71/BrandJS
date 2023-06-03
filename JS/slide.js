const brands = document.querySelector(".brands");
const wrapper = document.querySelector(".brands__cards");
const card = document.querySelectorAll(".brands__cards-block");
const btnHide = document.querySelector(".brands__swip");
document.addEventListener("DOMContentLoaded", () => {
  const width = document.body.clientWidth;
  if (width <= 320) {
    brands.classList.toggle("mySwiper");
    wrapper.classList.toggle("swiper-wrapper");
    btnHide.classList.toggle("btn-hide");
    card.forEach((e) => {
      e.classList.toggle("swiper-slide");
    });
  }
  new Swiper(".mySwiper", {
    slidesPerView: 1.4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
