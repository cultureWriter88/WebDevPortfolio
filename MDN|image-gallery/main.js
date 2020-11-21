const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
<<<<<<< HEAD
for (let i = 1; i <= 5; i++){
  const newImage = document.createElement('img');
  newImage.setAttribute("src", "images/pic" + i + ".jpg");
  thumbBar.appendChild(newImage);
  // Review this function(e) below.
  newImage.onclick = function(e) {
    displayedImage.src =  e.target.src;
  } 
} 
/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
  const btnClass = btn.getAttribute("class");
      if(btnClass ==="dark") {
          btn.setAttribute("class", "light");
          btn.textContent="Lighten";
          overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      }  else {
          btn.setAttribute("class","dark");
          btn.textContent="Darken";
          overlay.style.backgroundColor= "rgba(0, 0, 0, 0)";
      }
=======
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
>>>>>>> a38e691b1ee74390a682346557984cc2fbdb791f
}

