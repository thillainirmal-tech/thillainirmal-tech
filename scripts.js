let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides");

function showSlides(n) {
  slides.forEach(slide => slide.style.display = "none");
  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].style.display = "inline-block";
}

function plusSlides(n) {
  showSlides(slideIndex + n);
}

function autoSlideShow() {
  plusSlides(1);
  setTimeout(autoSlideShow, 4000); // every 4 seconds
}

window.onload = function () {
  showSlides(slideIndex);
  autoSlideShow();
};
