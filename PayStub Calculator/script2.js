let submitButton = document.querySelector(".submitButton");
let inputState = document.getElementById("myState").value;

submitButton.addEventListener("click", federal);
submitButton.addEventListener("click", state);
submitButton.addEventListener("click", local);
submitButton.addEventListener("click", socialSecurity);
submitButton.addEventListener("click", medicare);
submitButton.addEventListener("click", netIncome);


// FEDERAL - TAX BRACKETS
function federal() {
    'use strict';
    // INCOME - First Row
    let grossInputSalary = document.getElementById("myText").value;

    document.querySelector("html").style.backgroundColor = "violet";

    document.getElementById("monthlyNet").innerHTML = "$" + parseInt(grossInputSalary * 2);

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

    let federalTaxes = document.getElementById("federalTaxes");
    let federalTaxTotal;

    if (grossInputSalary >= 1 && grossInputSalary <= 9875) {
        federalTaxTotal = parseInt(grossInputSalary * firstSinglesBracket);
        return federalTaxes.innerHTML = "$" + federalTaxTotal;

    } else if (grossInputSalary >= 9876 && grossInputSalary <= 40125) {
        federalTaxTotal = parseInt(((grossInputSalary - firstBracketMax) * secondSinglesBracket) + (firstBracketMax * firstSinglesBracket));
        return federalTaxes.innerHTML = "$" + federalTaxTotal;

    } else if (grossInputSalary >= 40126 && grossInputSalary <= 85525) {
        federalTaxTotal = parseInt(((grossInputSalary - secondBracketMax) * thirdSinglesBracket) + ((firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket)));
        return federalTaxes.innerHTML = "$" + federalTaxTotal;

    } else if (grossInputSalary >= 85526 && grossInputSalary <= 163300) {
        federalTaxTotal = parseInt(((grossInputSalary - thirdBracketMax) * fourthSinglesBracket) + (firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket) + ((thirdBracketMax - secondBracketMax) * thirdSinglesBracket));
        return federalTaxes.innerHTML = "$" + federalTaxTotal;

    } else if (grossInputSalary >= 163301 && grossInputSalary <= 207350) {
        federalTaxTotal = parseInt(((grossInputSalary - fourthBracketMax) * fifthSinglesBracket) + (firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket) + ((thirdBracketMax - secondBracketMax) * thirdSinglesBracket) + ((fourthBracketMax - thirdBracketMax) * fourthSinglesBracket));
        return federalTaxes.innerHTML = "$" + federalTaxTotal;

    } else if (grossInputSalary >= 207351 && grossInputSalary <= 518400) {
        federalTaxTotal = parseInt(((grossInputSalary - fifthBracketMax) * sixthSinglesBracket) + (firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket) + ((thirdBracketMax - secondBracketMax) * thirdSinglesBracket) + ((fourthBracketMax - thirdBracketMax) * fourthSinglesBracket) + ((fifthBracketMax - fourthBracketMax) * fifthSinglesBracket));
        return federalTaxes.innerHTML = "$" + federalTaxTotal;

    } else if (grossInputSalary >= 518401) {
        federalTaxTotal = parseInt(((grossInputSalary - sixthBracketMax) * seventhSinglesBracket) + (firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket) + ((thirdBracketMax - secondBracketMax) * thirdSinglesBracket) + ((fourthBracketMax - thirdBracketMax) * fourthSinglesBracket) + ((fifthBracketMax - fourthBracketMax) * fifthSinglesBracket) + ((sixthBracketMax - fifthBracketMax) * sixthSinglesBracket));
        return federalTaxes.innerHTML = "$" + federalTaxTotal;
    } else {
        return federalTaxes.innerHTML = "No Gross Salary";
    }

}





// NEW YORK - STATE TAX BRACKETS
function state() {
    let grossInputSalary = document.getElementById("myText").value;

    'use strict';
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


    let stateTaxes = document.getElementById("stateTaxes");

    if (grossInputSalary >= 1 && grossInputSalary <= 8500) {
        return stateTaxes.innerHTML = "$" + parseInt(grossInputSalary * firstSinglesNYBracket);

    } else if (grossInputSalary >= 8501 && grossInputSalary <= 11700) {
        return stateTaxes.innerHTML = "$" + parseInt(((grossInputSalary - firstNYBracketMax) * secondSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket));

    } else if (grossInputSalary >= 11701 && grossInputSalary <= 13900) {
        return stateTaxes.innerHTML = "$" + parseInt(((grossInputSalary - secondNYBracketMax) * thirdSinglesNYBracket) + ((firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket)));

    } else if (grossInputSalary >= 13901 && grossInputSalary <= 21400) {
        return stateTaxes.innerHTML = "$" + parseInt(((grossInputSalary - thirdNYBracketMax) * fourthSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) + ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket));

    } else if (grossInputSalary >= 21401 && grossInputSalary <= 80650) {
        return stateTaxes.innerHTML = "$" + parseInt(((grossInputSalary - fourthNYBracketMax) * fifthSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) + ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket) + ((fourthNYBracketMax - thirdNYBracketMax) * fourthSinglesNYBracket));


    } else if (grossInputSalary >= 80651 && grossInputSalary <= 215400) {
        return stateTaxes.innerHTML = "$" + parseInt(((grossInputSalary - fifthNYBracketMax) * sixthSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) + ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket) + ((fourthNYBracketMax - thirdNYBracketMax) * fourthSinglesNYBracket) + ((fifthNYBracketMax - fourthNYBracketMax) * fifthSinglesNYBracket));

    } else if (grossInputSalary >= 215401 && grossInputSalary <= 1077550) {
        return stateTaxes.innerHTML = "$" + parseInt(((grossInputSalary - sixthNYBracketMax) * seventhSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) + ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket) + ((fourthNYBracketMax - thirdNYBracketMax) * fourthSinglesNYBracket) + ((fifthNYBracketMax - fourthNYBracketMax) * fifthSinglesNYBracket) + ((sixthNYBracketMax - fifthNYBracketMax) * sixthSinglesNYBracket));

    } else if (grossInputSalary >= 1077551) {
        stateTaxes.innerHTML = "$" + parseInt(((grossInputSalary - seventhNYBracketMax) * eighthSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) + ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket) + ((fourthNYBracketMax - thirdNYBracketMax) * fourthSinglesNYBracket) + ((fifthNYBracketMax - fourthNYBracketMax) * fifthSinglesNYBracket) + ((sixthNYBracketMax - fifthNYBracketMax) * sixthSinglesNYBracket) + ((seventhNYBracketMax - sixthNYBracketMax) * seventhSinglesNYBracket));
        return stateTaxes.innerHTML;
    } else {
        return stateTaxes.innerHTML = "No Gross Salary";
    }


}





// NEW YORK CITY - LOCAL TAXES
function local() {
    let firstNYCBracketMax = 12000;
    let secondNYCBracketMax = 25000;
    let thirdNYCBracketMax = 50000;

    let firstSinglesNYCBracket = 0.03078;
    let secondSinglesNYCBracket = 0.03762;
    let thirdSinglesNYCBracket = 0.03819;
    let fourthSinglesNYCBracket = 0.03867;

    let localTaxes = document.getElementById("localTaxes");

    let grossInputSalary = document.getElementById("myText").value;

    if (grossInputSalary >= 1 && grossInputSalary <= 12000 || (inputState === "nyc" || inputState === "new york city")) {
        return localTaxes.innerHTML = "$" + parseInt(grossInputSalary * firstSinglesNYCBracket);

    } else if (grossInputSalary >= 12001 && grossInputSalary <= 25000 || (inputState === "nyc" || inputState === "new york city")) {
        return localTaxes.innerHTML = "$" + parseInt(((grossInputSalary - firstNYCBracketMax) * secondSinglesNYCBracket) + (firstNYCBracketMax * firstSinglesNYCBracket));

    } else if (grossInputSalary >= 25001 && grossInputSalary <= 50000 || (inputState === "nyc" || inputState === "new york city")) {
        return localTaxes.innerHTML = "$" + parseInt(((grossInputSalary - secondNYCBracketMax) * thirdSinglesNYCBracket) + ((firstNYCBracketMax * firstSinglesNYCBracket) + ((secondNYCBracketMax - firstNYCBracketMax) * secondSinglesNYCBracket)));

    } else if (grossInputSalary > 50001 || (inputState === "nyc" || inputState === "new york city")) {
        return localTaxes.innerHTML = "$" + parseInt(((grossInputSalary - thirdNYCBracketMax) * fourthSinglesNYCBracket) + (firstNYCBracketMax * firstSinglesNYCBracket) + ((secondNYCBracketMax - firstNYCBracketMax) * secondSinglesNYCBracket) + ((thirdNYCBracketMax - secondNYCBracketMax) * thirdSinglesNYCBracket));
    } else {
        return localTaxes.innerHTML = "Testing1";
    }
}

// SOCIAL SECURITY - TAX BRACKETS
function socialSecurity() {
  let grossInputSalary = document.getElementById("myText").value;
  document.getElementById("socialSecurity").innerHTML = "$" + parseInt(grossInputSalary * 0.062);

}

function medicare() {
  let grossInputSalary = document.getElementById("myText").value;
  document.getElementById("medicare").innerHTML = "$" + parseInt(grossInputSalary * 0.0145);
}




// Work on building out the Net Income by removing $ sign from number and calculating
// grossInput - (federalTax+stateTax+localTax) 
function netIncome() {
  let grossInputSalary = document.getElementById("myText").value;
  document.getElementById("yearlyNet").innerHTML = "$" + parseInt(grossInputSalary - 10000); /*THIS LINE WORKS SO FAR, JUST WORK ON THE VARIABLES YOU WILL REMOVE FROM grossIncome */
}




// document.getElementById("biweeklyNet").innerHTML = "$" + parseInt((grossInputSalary * 2);
// // FEDERAL TAX BRACKET (SINGLE) - Second Row
// console.log(grossInputSalary - federalTaxTotal);