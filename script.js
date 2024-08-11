var splide = new Splide(".splide", {
  type: "loop",
  height: "100%",
  focus: 4,
  autoWidth: true,
  pagination: false,
  arrows: false,
  cover: true,
  speed: 600,
}).mount();

document.querySelectorAll(".hero-card-item").forEach(function (img, index) {
  img.addEventListener("click", function () {
    splide.go(index);
  });
});
