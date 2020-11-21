const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i < 6; i++){
  const newImage = document.createElement('img');
  newImage.setAttribute("src", "images/pic" + i + ".jpg");
  thumbBar.appendChild(newImage);

  //Here I am working on making main image on 
  newImage.onclick = function(e){
    displayedImage.src = e.target.src;
  }
}
/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
  btn.setAttribute("dark", "light");
  console.log("change")
}