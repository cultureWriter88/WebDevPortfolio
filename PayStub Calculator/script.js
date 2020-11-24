let grossIncome = document.querySelector(".grossIncome").innerHTML.value;
let submitButton = document.querySelector(".submitButton");
let netIncome = document.querySelector(".netIncome");

let yourNetIncome = netIncome;

submitButton.addEventListener("click", money);







function money() {

  // INCOME
  document.querySelector("html").style.backgroundColor="violet";

  let grossInputSalary = document.getElementById("myText").value;
  let netIncome = document.getElementById("demo").innerHTML = "$" + parseInt((grossInputSalary *.5725221439));
  let monthlyNet = document.getElementById("monthlyNet").innerHTML = "$" + parseInt((grossInputSalary *.5725221439)/12);
  let biweeklyNet = document.getElementById("biweeklyNet").innerHTML = "$" + parseInt(((grossInputSalary *.5725221439)/12)/2);

  // TAXES Controller
    let stateTax = document.getElementById("stateTaxes").innerHTML = "$" + parseInt((grossInputSalary * .08875));
    let localTax = document.getElementById("localTaxes").innerHTML = "$" + parseInt((grossInputSalary * .03876));


  // EDITABLE TAX TIME TABLE (SINGLE)
  let firstBracketMax = 9875;
  let secondBracketMax = 40125;
  let thirdBracketMax = 85525;
  let fourthBracketMax = 163300;
  let fifthBracketMax = 207350;
  let sixthBracketMax = 518400;
  let seventhBracketMax = 999999;

  let firstSinglesBracket = .10;
  let secondSinglesBracket = .12;
  let thirdSinglesBracket = .22;
  let fourthSinglesBracket = .24;
  let fifthSinglesBracket = .32;
  let sixthSinglesBracket = .35;
  let seventhSinglesBracket = .37;

 if (grossInputSalary >= 1 && grossInputSalary <= 9875) {
  let firstBracketTotal = document.getElementById("federalTaxes").innerHTML = "$" + parseInt(grossInputSalary * firstSinglesBracket);

} else if (grossInputSalary >= 9876 && grossInputSalary <= 40125) {
  let secondBracketTotal = document.getElementById("federalTaxes").innerHTML = "$" + parseInt(((grossInputSalary - firstBracketMax) * secondSinglesBracket) + (firstBracketMax * firstSinglesBracket));

} else if (grossInputSalary >= 40126 && grossInputSalary <= 85525 ){
  let thirddBracketTotal = document.getElementById("federalTaxes").innerHTML = "$" + parseInt(( (grossInputSalary - secondBracketMax) * thirdSinglesBracket) + ((firstBracketMax  * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket)));
 
} else if (grossInputSalary >= 85526 && grossInputSalary <= 163300) {
  let fourthBracketTotal = document.getElementById("federalTaxes").innerHTML = "$" + parseInt(  ((grossInputSalary - thirdBracketMax) * fourthSinglesBracket) + (firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket) +  ((thirdBracketMax - secondBracketMax) * thirdSinglesBracket)); 

 } else if (grossInputSalary >= 163301 && grossInputSalary <= 207350) {
  let fifthBracketTotal = document.getElementById("federalTaxes").innerHTML = "$" + parseInt(  ((grossInputSalary - fourthBracketMax) * fifthSinglesBracket) + (firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket) +  ((thirdBracketMax - secondBracketMax) * thirdSinglesBracket) + ((fourthBracketMax - thirdBracketMax) * fourthSinglesBracket));

 } else if (grossInputSalary >= 207351 && grossInputSalary <= 518400) {
  let sixthBracketTotal = document.getElementById("federalTaxes").innerHTML = "$" + parseInt(  ((grossInputSalary - fifthBracketMax) * sixthSinglesBracket) + (firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket) +  ((thirdBracketMax - secondBracketMax) * thirdSinglesBracket) + ((fourthBracketMax - thirdBracketMax) * fourthSinglesBracket) + ((fifthBracketMax - fourthBracketMax) * fifthSinglesBracket)); 

 } else if (grossInputSalary >= 518401) {
  let seventhBracketTotal = document.getElementById("federalTaxes").innerHTML = "$" + parseInt(  ((grossInputSalary - sixthBracketMax) * seventhSinglesBracket) + (firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket) +  ((thirdBracketMax - secondBracketMax) * thirdSinglesBracket) + ((fourthBracketMax - thirdBracketMax) * fourthSinglesBracket) + ((fifthBracketMax - fourthBracketMax) * fifthSinglesBracket) + ((sixthBracketMax - fifthBracketMax) * sixthSinglesBracket)); 

  } else {
   alert("Enter your gross Income ( No commas or signs )");
  }

 
  // NEW YORK - STATE TAX BRACKETS
  let firstNYBracketMax = 8500;
  let secondNYBracketMax = 11700;
  let thirdNYBracketMax = 13900;
  let fourthNYBracketMax = 21400;
  let fifthNYBracketMax = 80650;
  let sixthNYBracketMax = 215400;
  let seventhNYBracketMax = 1077550;

  let firstSinglesNYBracket = .04;
  let secondSinglesNYBracket = .045;
  let thirdSinglesNYBracket = .0525;
  let fourthSinglesNYBracket = .059;
  let fifthSinglesNYBracket = .0621;
  let sixthSinglesNYBracket = .0649;
  let seventhSinglesNYBracket = .0685;
  let eighthSinglesNYBracket = .0882;

  let inputState = document.getElementById("myState").value;

  if(inputState === "ny" || inputState === "new york"){
    
    if (grossInputSalary >= 1 && grossInputSalary <= 8500) {
      document.getElementById("stateTaxes").innerHTML = "$" + parseInt(grossInputSalary * firstSinglesNYBracket);
    } else if (grossInputSalary >= 8501 && grossInputSalary <= 11700) {
      document.getElementById("stateTaxes").innerHTML = "$" + parseInt(((grossInputSalary - firstNYBracketMax) * secondSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket));

    } else if (grossInputSalary >= 11701 && grossInputSalary <= 13900 ){
      document.getElementById("stateTaxes").innerHTML = "$" + parseInt(( (grossInputSalary - secondNYBracketMax) * thirdSinglesNYBracket) + ((firstNYBracketMax  * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket)));
     
    } else if (grossInputSalary >= 13901 && grossInputSalary <= 21400) {
      document.getElementById("stateTaxes").innerHTML = "$" + parseInt(  ((grossInputSalary - thirdNYBracketMax) * fourthSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) +  ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket)); 
    
     } else if (grossInputSalary >= 21401 && grossInputSalary <= 80650) {
      document.getElementById("stateTaxes").innerHTML = "$" + parseInt(  ((grossInputSalary - fourthNYBracketMax) * fifthSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) +  ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket) + ((fourthNYBracketMax - thirdNYBracketMax) * fourthSinglesNYBracket));
    
     } else if (grossInputSalary >= 80651 && grossInputSalary <= 215400) {
      document.getElementById("stateTaxes").innerHTML = "$" + parseInt(  ((grossInputSalary - fifthNYBracketMax) * sixthSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) +  ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket) + ((fourthNYBracketMax - thirdNYBracketMax) * fourthSinglesNYBracket) + ((fifthNYBracketMax - fourthNYBracketMax) * fifthSinglesNYBracket));
    
     } else if (grossInputSalary >= 215401 && grossInputSalary <= 1077550) {
      document.getElementById("stateTaxes").innerHTML = "$" + parseInt(  ((grossInputSalary - sixthNYBracketMax) * seventhSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) +  ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket) + ((fourthNYBracketMax - thirdNYBracketMax) * fourthSinglesNYBracket) + ((fifthNYBracketMax - fourthNYBracketMax) * fifthSinglesNYBracket) + ((sixthNYBracketMax - fifthNYBracketMax) * sixthSinglesNYBracket));

     } else if (grossInputSalary >= 1077551) {
      document.getElementById("stateTaxes").innerHTML = "$" + parseInt(  ((grossInputSalary - seventhNYBracketMax) * eighthSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) +  ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket) + ((fourthNYBracketMax - thirdNYBracketMax) * fourthSinglesNYBracket) + ((fifthNYBracketMax - fourthNYBracketMax) * fifthSinglesNYBracket) + ((sixthNYBracketMax - fifthNYBracketMax) * sixthSinglesNYBracket) + ((seventhNYBracketMax - sixthNYBracketMax) * seventhSinglesNYBracket)); 
    } else {
      alert("Enter your gross Income ( No commas or signs )");
    }


  } else {
    alert("Enter State Name or State Initials");
  }









}


// DropDown animation for state selection
// Separate from money

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
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
