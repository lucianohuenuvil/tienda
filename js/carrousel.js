const carousel = document.getElementById("carousel");
const images = carousel.getElementsByTagName("img");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentImageIndex = 0;

prevButton.addEventListener("click", function() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  updateCarousel();
});

nextButton.addEventListener("click", function() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[currentImageIndex].style.display = "block";
}

updateCarousel();