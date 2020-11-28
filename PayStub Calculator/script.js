const submitButton = document.querySelector(".submitButton");
const grossInputSalary = document.getElementById("myText").value;
const inputState = document.getElementById("myState").value;


// These 3 are included at the top of each of the 3 if else statements inside money()
// const federalTaxes = document.getElementById("federalTaxes");
// const stateTaxes = document.getElementById("stateTaxes");
// const localTaxes = document.getElementById("localTaxes");
// const inputState = document.getElementById("myState").value;

submitButton.addEventListener("click", federal);
submitButton.addEventListener("click", state);
submitButton.addEventListener("click", local);



function federal() {
    'use strict';


    // INCOME - First Row
    document.querySelector("html").style.backgroundColor = "violet";

    let monthlyNet = document.getElementById("monthlyNet").innerHTML = "$" + parseInt((grossInputSalary * 0.5725221439) / 12);
    let biweeklyNet = document.getElementById("biweeklyNet").innerHTML = "$" + parseInt(((grossInputSalary * 0.5725221439) / 12) / 2);


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

    let federalTaxes = document.getElementById("federalTaxes");


    if (grossInputSalary >= 1 && grossInputSalary <= 9875) {
        let federalTaxTotal = parseInt(grossInputSalary * firstSinglesBracket);
        federalTaxes.innerHTML = "$" + federalTaxTotal;
        return;

    } else if (grossInputSalary >= 9876 && grossInputSalary <= 40125) {
        federalTaxTotal = parseInt(((grossInputSalary - firstBracketMax) * secondSinglesBracket) + (firstBracketMax * firstSinglesBracket));
        federalTaxes.innerHTML = "$" + federalTaxTotal;
        return;

    } else if (grossInputSalary >= 40126 && grossInputSalary <= 85525) {
        federalTaxTotal = parseInt(((grossInputSalary - secondBracketMax) * thirdSinglesBracket) + ((firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket)));
        federalTaxes.innerHTML = "$" + federalTaxTotal;
        return;

    } else if (grossInputSalary >= 85526 && grossInputSalary <= 163300) {
        federalTaxTotal = parseInt(((grossInputSalary - thirdBracketMax) * fourthSinglesBracket) + (firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket) + ((thirdBracketMax - secondBracketMax) * thirdSinglesBracket))
        federalTaxes.innerHTML = "$" + federalTaxTotal;
        return;

    } else if (grossInputSalary >= 163301 && grossInputSalary <= 207350) {
        federalTaxTotal = parseInt(((grossInputSalary - fourthBracketMax) * fifthSinglesBracket) + (firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket) + ((thirdBracketMax - secondBracketMax) * thirdSinglesBracket) + ((fourthBracketMax - thirdBracketMax) * fourthSinglesBracket));
        federalTaxes.innerHTML = "$" + federalTaxTotal;
        return;

    } else if (grossInputSalary >= 207351 && grossInputSalary <= 518400) {
        federalTaxTotal = parseInt(((grossInputSalary - fifthBracketMax) * sixthSinglesBracket) + (firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket) + ((thirdBracketMax - secondBracketMax) * thirdSinglesBracket) + ((fourthBracketMax - thirdBracketMax) * fourthSinglesBracket) + ((fifthBracketMax - fourthBracketMax) * fifthSinglesBracket));
        federalTaxes.innerHTML = "$" + federalTaxTotal;
        return;

    } else if (grossInputSalary >= 518401) {
        federalTaxTotal = parseInt(((grossInputSalary - sixthBracketMax) * seventhSinglesBracket) + (firstBracketMax * firstSinglesBracket) + ((secondBracketMax - firstBracketMax) * secondSinglesBracket) + ((thirdBracketMax - secondBracketMax) * thirdSinglesBracket) + ((fourthBracketMax - thirdBracketMax) * fourthSinglesBracket) + ((fifthBracketMax - fourthBracketMax) * fifthSinglesBracket) + ((sixthBracketMax - fifthBracketMax) * sixthSinglesBracket));
        federalTaxes.innerHTML = "$" + federalTaxTotal;
        return;
    } else if {
        federalTaxes.innerHTML = "Testing0";
    }

}


function state() {
    'use strict';
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


    let stateTaxes = document.getElementById("stateTaxes");

    if (grossInputSalary >= 1 && grossInputSalary <= 8500 && inputState === "ny" || inputState === "new york") {
        stateTaxes.innerHTML = "$" + parseInt(grossInputSalary * firstSinglesNYBracket);
        return;

    } else if (grossInputSalary >= 8501 && grossInputSalary <= 11700 && inputState === "ny" || inputState === "new york") {
        stateTaxes.innerHTML = "$" + parseInt(((grossInputSalary - firstNYBracketMax) * secondSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket));
        return;

    } else if (grossInputSalary >= 11701 && grossInputSalary <= 13900 && inputState === "ny" || inputState === "new york") {
        stateTaxes.innerHTML = "$" + parseInt(((grossInputSalary - secondNYBracketMax) * thirdSinglesNYBracket) + ((firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket)));
        return;

    } else if (grossInputSalary >= 13901 && grossInputSalary <= 21400 && inputState === "ny" || inputState === "new york") {
        stateTaxes.innerHTML = "$" + parseInt(((grossInputSalary - thirdNYBracketMax) * fourthSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) + ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket));
        return;

    } else if (grossInputSalary >= 21401 && grossInputSalary <= 80650 && inputState === "ny" || inputState === "new york") {
        stateTaxes.innerHTML = "$" + parseInt(((grossInputSalary - fourthNYBracketMax) * fifthSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) + ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket) + ((fourthNYBracketMax - thirdNYBracketMax) * fourthSinglesNYBracket));
        return;

    } else if (grossInputSalary >= 80651 && grossInputSalary <= 215400 && inputState === "ny" || inputState === "new york") {
        stateTaxes.innerHTML = "$" + parseInt(((grossInputSalary - fifthNYBracketMax) * sixthSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) + ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket) + ((fourthNYBracketMax - thirdNYBracketMax) * fourthSinglesNYBracket) + ((fifthNYBracketMax - fourthNYBracketMax) * fifthSinglesNYBracket));
        return;

    } else if (grossInputSalary >= 215401 && grossInputSalary <= 1077550 && inputState === "ny" || inputState === "new york") {
        stateTaxes.innerHTML = "$" + parseInt(((grossInputSalary - sixthNYBracketMax) * seventhSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) + ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket) + ((fourthNYBracketMax - thirdNYBracketMax) * fourthSinglesNYBracket) + ((fifthNYBracketMax - fourthNYBracketMax) * fifthSinglesNYBracket) + ((sixthNYBracketMax - fifthNYBracketMax) * sixthSinglesNYBracket));
        return;

    } else if (grossInputSalary >= 1077551 && inputState === "ny" || inputState === "new york") {
        stateTaxes.innerHTML = "$" + parseInt(((grossInputSalary - seventhNYBracketMax) * eighthSinglesNYBracket) + (firstNYBracketMax * firstSinglesNYBracket) + ((secondNYBracketMax - firstNYBracketMax) * secondSinglesNYBracket) + ((thirdNYBracketMax - secondNYBracketMax) * thirdSinglesNYBracket) + ((fourthNYBracketMax - thirdNYBracketMax) * fourthSinglesNYBracket) + ((fifthNYBracketMax - fourthNYBracketMax) * fifthSinglesNYBracket) + ((sixthNYBracketMax - fifthNYBracketMax) * sixthSinglesNYBracket) + ((seventhNYBracketMax - sixthNYBracketMax) * seventhSinglesNYBracket));
        return;
    } else if {
        stateTaxes.innerHTML = "Testing 1";
    }


}






function local() {
    'use strict';

    // NEW YORK CITY - LOCAL TAXES
    let firstNYCBracketMax = 12000;
    let secondNYCBracketMax = 25000;
    let thirdNYCBracketMax = 50000;

    let firstSinglesNYCBracket = 0.03078;
    let secondSinglesNYCBracket = 0.03762;
    let thirdSinglesNYCBracket = 0.03819;
    let fourthSinglesNYCBracket = 0.03867;

    let localTaxes = document.getElementById("localTaxes");

    if (grossInputSalary >= 1 && grossInputSalary <= 12000 && (inputState === "nyc" || inputState === "new york city")) {
        localTaxes.innerHTML = "$" + parseInt(grossInputSalary * firstSinglesNYCBracket);
        return;

    } else if (grossInputSalary >= 12001 && grossInputSalary <= 25000 && (inputState === "nyc" || inputState === "new york city")) {
        localTaxes.innerHTML = "$" + parseInt(((grossInputSalary - firstNYCBracketMax) * secondSinglesNYCBracket) + (firstNYCBracketMax * firstSinglesNYCBracket));
        return;

    } else if (grossInputSalary >= 25001 && grossInputSalary <= 50000 && (inputState === "nyc" || inputState === "new york city")) {
        localTaxes.innerHTML = "$" + parseInt(((grossInputSalary - secondNYCBracketMax) * thirdSinglesNYCBracket) + ((firstNYCBracketMax * firstSinglesNYCBracket) + ((secondNYCBracketMax - firstNYCBracketMax) * secondSinglesNYCBracket)));
        return;

    } else if (grossInputSalary > 50001 && (inputState === "nyc" || inputState === "new york city")) {
        localTaxes.innerHTML = "$" + parseInt(((grossInputSalary - thirdNYCBracketMax) * fourthSinglesNYCBracket) + (firstNYCBracketMax * firstSinglesNYCBracket) + ((secondNYCBracketMax - firstNYCBracketMax) * secondSinglesNYCBracket) + ((thirdNYCBracketMax - secondNYCBracketMax) * thirdSinglesNYCBracket));
        return;
    } else if {
        localTaxes.innerHTML = "Testing1";
    }
    // End of function money()


}

// document.getElementById("demo").innerHTML = "$" + parseInt(federalTaxTotal);

/* toFixed(2) is perfect for working with; */