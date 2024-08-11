var splide = new Splide(".splide", {
  type: "loop",
  height: "100%",
  focus: "start",
  autoWidth: true,
  pagination: false,
  arrows: false,
}).mount();

// Tambahkan event listener ke gambar
document.querySelectorAll(".hero-card-item").forEach(function (img, index) {
  img.addEventListener("click", function () {
    splide.go(index); // Pergi ke slide yang sesuai dengan index
  });
});
