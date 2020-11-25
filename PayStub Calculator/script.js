const grossInputSalary = document.getElementById("myText").value;

let grossIncome = document.querySelector(".grossIncome").innerHTML.value;
let submitButton = document.querySelector(".submitButton");
let netIncome = document.querySelector(".netIncome");
let yourNetIncome = netIncome;

const federalTaxes = document.getElementById("federalTaxes");
const stateTaxes = document.getElementById("stateTaxes");
const localTaxes = document.getElementById("localTaxes");

submitButton.addEventListener("click", money);



function money() {

  // INCOME - First Row
  document.querySelector("html").style.backgroundColor="violet";


  let monthlyNet = document.getElementById("monthlyNet").innerHTML = "$" + parseInt((grossInputSalary * 0.5725221439)/12);
  let biweeklyNet = document.getElementById("biweeklyNet").innerHTML = "$" + parseInt(((grossInputSalary * 0.5725221439)/12)/2);


  // FEDERAL TAX BRACKET (SINGLE) - Second Row
  let firstBracketMax = 9875;
  let secondBracketMax = 40125;
  let thirdBracketMax = 85525;
  let fourthBracketMax = 163300;
  let fifthBracketMax = 207350;
  let sixthBracketMax = 518400;

  let firstSinglesBracket = 0.10;
  let secondSinglesBracket = 0.12;
  let thirdSinglesBracket = 0.22;
  let fourthSinglesBracket = 0.24;
  let fifthSinglesBracket = 0.32;
  let sixthSinglesBracket = 0.35;
  let seventhSinglesBracket = 0.37;


 if (grossInputSalary >= 1 && grossInputSalary <= 9875) {
  federalTaxes.innerHTML = "$" + parseInt(grossInputSalary * firstSinglesBracket);

} else if (grossInputSalary >= 9876 && grossInputSalary <= 40125) {
  federalTaxes.innerHTML = "$" + parseInt(((grossInputSalary - firstBracketMax) * secondSinglesBracket) + (firstBracketMax * firstSinglesBracket));

} else if (grossInputSalary >= 40126 && grossInputSalary <= 85525 ){
  federalTaxes.innerHTML = "$" + parseInt(( (grossInputSalary - secondBracketMax) * thirdSinglesBracket) + ((firstBracketMax  * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket)));
 
} else if (grossInputSalary >= 85526 && grossInputSalary <= 163300) {
  federalTaxes.innerHTML = "$" + parseInt(  ((grossInputSalary - thirdBracketMax) * fourthSinglesBracket) + (firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket) +  ((thirdBracketMax - secondBracketMax) * thirdSinglesBracket)); 

 } else if (grossInputSalary >= 163301 && grossInputSalary <= 207350) {
  federalTaxes.innerHTML = "$" + parseInt(  ((grossInputSalary - fourthBracketMax) * fifthSinglesBracket) + (firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket) +  ((thirdBracketMax - secondBracketMax) * thirdSinglesBracket) + ((fourthBracketMax - thirdBracketMax) * fourthSinglesBracket));

 } else if (grossInputSalary >= 207351 && grossInputSalary <= 518400) {
  federalTaxes.innerHTML = "$" + parseInt(  ((grossInputSalary - fifthBracketMax) * sixthSinglesBracket) + (firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket) +  ((thirdBracketMax - secondBracketMax) * thirdSinglesBracket) + ((fourthBracketMax - thirdBracketMax) * fourthSinglesBracket) + ((fifthBracketMax - fourthBracketMax) * fifthSinglesBracket)); 

 } else if (grossInputSalary >= 518401) {
  federalTaxes.innerHTML = "$" + parseInt(  ((grossInputSalary - sixthBracketMax) * seventhSinglesBracket) + (firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket) +  ((thirdBracketMax - secondBracketMax) * thirdSinglesBracket) + ((fourthBracketMax - thirdBracketMax) * fourthSinglesBracket) + ((fifthBracketMax - fourthBracketMax) * fifthSinglesBracket) + ((sixthBracketMax - fifthBracketMax) * sixthSinglesBracket)); 

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

  let firstSinglesNYBracket = 0.04;
  let secondSinglesNYBracket = 0.045;
  let thirdSinglesNYBracket = 0.0525;
  let fourthSinglesNYBracket = 0.059;
  let fifthSinglesNYBracket = 0.0621;
  let sixthSinglesNYBracket = 0.0649;
  let seventhSinglesNYBracket = 0.0685;
  let eighthSinglesNYBracket = 0.0882;

  let inputState = document.getElementById("myState").value;

  if(inputState === "ny" || inputState === "new york"){
    
    if (grossInputSalary >= 1 && grossInputSalary <= 8500) {
      stateTaxes.innerHTML = "$" + parseInt(grossInputSalary * firstSinglesNYBracket);

    } else if (grossInputSalary >= 8501 && grossInputSalary <= 11700) {
      stateTaxes.innerHTML = "$" + parseInt(((grossInputSalary - firstNYBracketMax) * secondSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket));

    } else if (grossInputSalary >= 11701 && grossInputSalary <= 13900 ){
      stateTaxes.innerHTML = "$" + parseInt(( (grossInputSalary - secondNYBracketMax) * thirdSinglesNYBracket) + ((firstNYBracketMax  * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket)));
     
    } else if (grossInputSalary >= 13901 && grossInputSalary <= 21400) {
      stateTaxes.innerHTML = "$" + parseInt(  ((grossInputSalary - thirdNYBracketMax) * fourthSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) +  ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket)); 
    
     } else if (grossInputSalary >= 21401 && grossInputSalary <= 80650) {
      stateTaxes.innerHTML = "$" + parseInt(  ((grossInputSalary - fourthNYBracketMax) * fifthSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) +  ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket) + ((fourthNYBracketMax - thirdNYBracketMax) * fourthSinglesNYBracket));
    
     } else if (grossInputSalary >= 80651 && grossInputSalary <= 215400) {
      stateTaxes.innerHTML = "$" + parseInt(  ((grossInputSalary - fifthNYBracketMax) * sixthSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) +  ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket) + ((fourthNYBracketMax - thirdNYBracketMax) * fourthSinglesNYBracket) + ((fifthNYBracketMax - fourthNYBracketMax) * fifthSinglesNYBracket));
    
     } else if (grossInputSalary >= 215401 && grossInputSalary <= 1077550) {
      stateTaxes.innerHTML = "$" + parseInt(  ((grossInputSalary - sixthNYBracketMax) * seventhSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) +  ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket) + ((fourthNYBracketMax - thirdNYBracketMax) * fourthSinglesNYBracket) + ((fifthNYBracketMax - fourthNYBracketMax) * fifthSinglesNYBracket) + ((sixthNYBracketMax - fifthNYBracketMax) * sixthSinglesNYBracket));

     } else if (grossInputSalary >= 1077551) {
      stateTaxes.innerHTML = "$" + parseInt(  ((grossInputSalary - seventhNYBracketMax) * eighthSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) +  ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket) + ((fourthNYBracketMax - thirdNYBracketMax) * fourthSinglesNYBracket) + ((fifthNYBracketMax - fourthNYBracketMax) * fifthSinglesNYBracket) + ((sixthNYBracketMax - fifthNYBracketMax) * sixthSinglesNYBracket) + ((seventhNYBracketMax - sixthNYBracketMax) * seventhSinglesNYBracket)); 
    } else {
      alert("Enter your gross Income ( No commas or signs )");
    }


  } else {
    alert("Enter State Name or State Initials");
  }








  // NEW YORK CITY - LOCAL TAXES
  let firstNYCBracketMax = 12000;
  let secondNYCBracketMax = 25000;
  let thirdNYCBracketMax = 50000;

  let firstSinglesNYCBracket = 0.03078;
  let secondSinglesNYCBracket = 0.03762;
  let thirdSinglesNYCBracket = 0.03819;
  let fourthSinglesNYCBracket = 0.03867;

  if(inputState === "ny" || inputState === "nyc" || inputState === "new york" || inputState === "new york city"){

    localTaxes.innerHTML = "$" + parseInt((grossInputSalary * firstSinglesNYCBracket));

      if (grossInputSalary >= 1 && grossInputSalary <= 12000) {
        localTaxes.innerHTML = "$" + parseInt(grossInputSalary * firstSinglesNYCBracket);

      } else if (grossInputSalary >= 12001 && grossInputSalary <= 25000) {
        localTaxes.innerHTML = "$" + parseInt(((grossInputSalary - firstNYCBracketMax) * secondSinglesNYCBracket) + (firstNYCBracketMax * firstSinglesNYCBracket));

      } else if (grossInputSalary >= 25001 && grossInputSalary <= 50000 ){
        localTaxes.innerHTML = "$" + parseInt(( (grossInputSalary - secondNYCBracketMax) * thirdSinglesNYCBracket) + ((firstNYCBracketMax  * firstSinglesNYCBracket) + ((secondNYCBracketMax - firstNYCBracketMax) * secondSinglesNYCBracket)));
      
      } else if (grossInputSalary > 50001) {
        localTaxes.innerHTML = "$" + parseInt(  ((grossInputSalary - thirdNYCBracketMax) * fourthSinglesNYCBracket) + (firstNYCBracketMax * firstSinglesNYCBracket) + ((secondNYCBracketMax - firstNYCBracketMax) * secondSinglesNYCBracket) +  ((thirdNYCBracketMax - secondNYCBracketMax) * thirdSinglesNYCBracket)); 
        
      } else {
        localTaxes.innerHTML = "No Local Tax";
      }
    
  }




}



// toFixed(2) is perfect for working with money.