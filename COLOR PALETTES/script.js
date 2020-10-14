/*
// FADE IN HEADER
var opacity = 0; 
var intervalID = 0; 
window.onload = fadeIn; 

function fadeIn() { 
    setInterval(show, 100); 
} 

function show() { 
    var header = document.getElementsByClassName("header"); 
    opacity = Number(window.getComputedStyle(body) 
                     .getPropertyValue("opacity")); 
    if (opacity < 1) { 
        opacity = opacity + 0.1; 
        body.style.opacity = opacity 
    } else { 
        clearInterval(intervalID); 
    } 
}; 

// FADE IN ON SCROLL
// .wrapperTwo FADING IN WHEN ITEM IS IN WINDOW VIEW
*/

/////////////////////////////////////////////////////

// SLIDESHOW
// REBUILD IN ES6
var slideIndex = 1;
var t;

showSlides(slideIndex);

function plusSlides(n) {
  slideIndex = slideIndex + n;
  clearTimeout(t);
  showSlides(slideIndex);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n == undefined) {
    n = ++slideIndex;
  }

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  t = setTimeout(showSlides, 5000);
}
// SLIDESHOW ENDS
