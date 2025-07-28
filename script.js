document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contato-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.style.display = "none";
      document.getElementById("mensagem-sucesso").style.display = "block";
    });
  }
});




document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contato-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.style.display = "none";
      document.getElementById("mensagem-sucesso").style.display = "block";
    });
  }

  showSlides(slideIndex); 
});




let slideIndex = 0;
let autoSlideTimer;

function showSlides(n = slideIndex, manual = false) {
  const slides = document.querySelectorAll(".lojas-destaque .slide");
  if (slides.length === 0) return;

  if (!manual) {
    slideIndex++;
  } else {
    slideIndex = n;
  }

  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  slides.forEach((slide) => slide.classList.remove("active"));

  slides[slideIndex].classList.add("active");

  if (manual) {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(() => showSlides(), 3000);
  }
}

function plusSlides(n) {
  showSlides(slideIndex + n, true);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  autoSlideTimer = setInterval(() => showSlides(), 3000);
});


  

  


