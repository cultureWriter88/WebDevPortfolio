let submitButton = document.getElementById("submitButton");
let inputState = document.getElementById("input").value;

submitButton.addEventListener("click", stateInfo);

function stateInfo(){
  let inputState = document.getElementById("input").value;
    if (inputState === "New Jersey"){
      document.querySelector("html").style.backgroundColor = "yellow";
      document.getElementById("name").innerHTML = "New Jersey";
      document.getElementById("admitted").innerHTML = "December 18, 1787";
      document.getElementById("capital").innerHTML = "Trenton";
      document.getElementById("total-area").innerHTML = "8,722.58 square miles";
      document.getElementById("state-abbreviation").innerHTML = "NJ";
      document.getElementById("name-origin").innerHTML = "English Channel island Jersey";
    } else if (inputState === "New Mexico") {
      document.querySelector("html").style.backgroundColor = "blue";
      document.getElementById("name").innerHTML = "New Mexico";
      document.getElementById("admitted").innerHTML = "January 6, 1912";
      document.getElementById("capital").innerHTML = "Sante Fe";
      document.getElementById("total-area").innerHTML = "121,590 square miles";
      document.getElementById("state-abbreviation").innerHTML = "NM";
      document.getElementById("name-origin").innerHTML = "Aztec Valley of Mexico (not the country)";
    } else if(inputState === "New York"){
      document.querySelector("html").style.backgroundColor = "red";
      document.getElementById("name").innerHTML = "New York";
      document.getElementById("admitted").innerHTML = "July 26, 1788";
      document.getElementById("capital").innerHTML = "Albany";
      document.getElementById("total-area").innerHTML = "54,556 square miles";
      document.getElementById("state-abbreviation").innerHTML = "NY";
      document.getElementById("name-origin").innerHTML = "17th Century Duke of York";
    } else if(inputState === "North Carolina"){
      document.querySelector("html").style.backgroundColor = "coral";
      document.getElementById("name").innerHTML = "North Carolina";
      document.getElementById("admitted").innerHTML = "November 21, 1789";
      document.getElementById("capital").innerHTML = "Raleigh";
      document.getElementById("total-area").innerHTML = "53,819 square miles";
      document.getElementById("state-abbreviation").innerHTML = "NC";
      document.getElementById("name-origin").innerHTML = "King Charles I of England";
    } else if(inputState === "Ohio"){
      document.querySelector("html").style.backgroundColor = "pink";
      document.getElementById("name").innerHTML = "Ohio";
      document.getElementById("admitted").innerHTML = "March 1, 1803";
      document.getElementById("capital").innerHTML = "Columbus";
      document.getElementById("total-area").innerHTML = "44,825  square miles";
      document.getElementById("state-abbreviation").innerHTML = "OH";
      document.getElementById("name-origin").innerHTML = " ' Ohiːyo ' Seneca word meaning 'great river', or 'large creek' ";
    } else if(inputState === "Oklahoma"){
      document.querySelector("html").style.backgroundColor = "purple";
      document.getElementById("name").innerHTML = "Oklahoma";
      document.getElementById("admitted").innerHTML = "November 16, 1907";
      document.getElementById("capital").innerHTML = "Oklahoma City";
      document.getElementById("total-area").innerHTML = "69,899  square miles";
      document.getElementById("state-abbreviation").innerHTML = "OK";
      document.getElementById("name-origin").innerHTML = "Choctaw word that means “red people.” ";
    } else if(inputState === "Oregon"){
      document.querySelector("html").style.backgroundColor = "yellow";
      document.getElementById("name").innerHTML = "Oregon";
      document.getElementById("admitted").innerHTML = "February 14, 1859 (33rd)";
      document.getElementById("capital").innerHTML = "Salem";
      document.getElementById("total-area").innerHTML = "98,381  square miles";
      document.getElementById("state-abbreviation").innerHTML = "OR";
      document.getElementById("name-origin").innerHTML = "Shoshoni words 'Ogwa,' River and  'Pe-on,'  West ";
    } else if(inputState === "Pennsylvania"){
      document.querySelector("html").style.backgroundColor = "yellow";
      document.getElementById("name").innerHTML = "Pennsylvania";
      document.getElementById("admitted").innerHTML = "December 12, 1787 (2nd)";
      document.getElementById("capital").innerHTML = "Harrisburg";
      document.getElementById("total-area").innerHTML = "46,055  square miles";
      document.getElementById("state-abbreviation").innerHTML = "PA";
      document.getElementById("name-origin").innerHTML = "Named after 'William Penn', a Quaker, and the Latin word 'sylvania' which means woodlands. 'Penn's Woodlands'  ";
    } else if(inputState === "Rhode Island"){
      document.querySelector("html").style.backgroundColor = "red";
      document.getElementById("name").innerHTML = "Rhode Island";
      document.getElementById("admitted").innerHTML = "May 29, 1790 (13th)";
      document.getElementById("capital").innerHTML = "Providence";
      document.getElementById("total-area").innerHTML = "1,214  square miles";
      document.getElementById("state-abbreviation").innerHTML = "RI";
      document.getElementById("name-origin").innerHTML = "Dutch explorer Adrian Block named it 'Roodt Eylandt' meaning 'red island' for the red clay along the shore.";
    } else if(inputState === "South Carolina"){
      document.querySelector("html").style.backgroundColor = "gray";
      document.getElementById("name").innerHTML = "South Carolina";
      document.getElementById("admitted").innerHTML = "May 23, 1788 (8th)";
      document.getElementById("capital").innerHTML = "Columbia";
      document.getElementById("total-area").innerHTML = "32,020  square miles";
      document.getElementById("state-abbreviation").innerHTML = "SC";
      document.getElementById("name-origin").innerHTML = "named in honor of King Charles I of England, Carolus being Latin for 'Charles' ";
    } else {
      document.querySelector("html").style.backgroundColor = "green";
    }

}



      // } else if (inputState = "New Jersey"){
      //   statesName = "New Jersey";
      //   document.getElementById("name").innerHTML = "New Jersey";
      //   document.getElementById("admitted").innerHTML = "July 3" ;
      //   document.getElementById("capital").innerHTML = "bbb" ;
      //   document.getElementById("total-area").innerHTML = "vvv";
      //   document.getElementById("state-abbreviation").innerHTML = "bb" ;
      //   document.getElementById("name-origin").innerHTML = "sdfsdfsdfsdf";
      // } else if (inputState = "Pennsylvania" || (inputState = "pennsylvania")){
      //   document.getElementById("name").innerHTML = "Pennsylvania";
      //   document.getElementById("admitted").innerHTML = "July 4" ;
      //   document.getElementById("capital").innerHTML = "Albany" ;
      //   document.getElementById("total-area").innerHTML = "54,556 square miles";
      //   document.getElementById("state-abbreviation").innerHTML = "NY" ;
      //   document.getElementById("name-origin").innerHTML = "17th Century Duke of York";




// function setWeather() {
//   const choice = select.value;
//     if (choice === 'sunny') {
//       para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
//     } else if (choice === 'rainy') {
//       para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
//     } else if (choice === 'snowing') {
//       para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
//     } else if (choice === 'overcast') {
//       para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
//     } else {
//       para.textContent = '';
//     }
// }