
//JUST TESTING SOME API STUFF

// const getPokemonData = function(pokemon) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//       })
//     .then(function(data){
//       console.log(data);
//       renderPokemon(data[0]);
//     });
// };
// getPokemonData('charmeleon');




// Intro Pop Up On Page
let pageIntro = 'pageIntro';
if (pageIntro === 'pageIntro') alert('Welcome To The Shop');

//Slideshow



// threeCards Buttons
// FOR THESE THREE I HAVE TO DOUBLE CLICK.....WHY?
document.getElementById("adamButton").onclick = function(){
  document.getElementById("myDIV").style.display = "block";
  preventDefault();
};
document.getElementById("adamSubmit").onclick = function(){
  document.getElementById("myDIV").style.display = "none";
  event.preventDefault();
};


document.getElementById("danielButton").onclick = function(){
  document.getElementById("myDIV1").style.display = "block";
  preventDefault();
};
document.getElementById("danielSubmit").onclick = function(){
  document.getElementById("myDIV1").style.display = "none";
  event.preventDefault();
};


document.getElementById("abrahamButton").onclick = function(){
  document.getElementById("myDIV2").style.display = "block";
  preventDefault();
};
document.getElementById("abrahamSubmit").onclick = function(){
  document.getElementById("myDIV2").style.display = "none";
  event.preventDefault();
};


// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// };


// ---------------------

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

