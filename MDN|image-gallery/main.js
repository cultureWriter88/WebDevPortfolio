const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i < 6;i++){
  const newImage = document.createElement('img');
  newImage.setAttribute("src", "images/pic" + i + ".jpg");
  thumbBar.appendChild(newImage);

  //Here I am working on making main image on 
  newImage.onclick = overlay.src =  "images/pic3.jpg";
  console.log(newImage);

}
/* Wiring up the Darken/Lighten button */