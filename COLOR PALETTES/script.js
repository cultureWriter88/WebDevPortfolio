// FADE IN HEADER
var opacity = 0; 
var intervalID = 0; 
window.onload = fadeIn; 

function fadeIn() { 
    setInterval(show, 300); 
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

