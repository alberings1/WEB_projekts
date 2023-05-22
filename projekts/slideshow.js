var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

function showSlide(slideIndex) {
  slides[currentSlide].classList.remove('show');
  slides[slideIndex].classList.add('show');
  currentSlide = slideIndex;
}

function nextSlide() {
  var nextSlideIndex = (currentSlide + 1) % slides.length;
  showSlide(nextSlideIndex);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);
