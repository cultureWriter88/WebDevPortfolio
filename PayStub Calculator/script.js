let grossIncome = document.querySelector(".grossIncome").innerHTML.value;
let submitButton = document.querySelector(".submitButton");
let netIncome = document.querySelector(".netIncome");

let yourNetIncome = netIncome;



submitButton.addEventListener("click", money);

function money() {

  // INCOME
  document.querySelector("html").style.backgroundColor="red";

  let grossInputSalary = document.getElementById("myText").value;

  let netIncome = document.getElementById("demo").innerHTML = "$" + parseInt((grossInputSalary *.5725221439));

  let monthlyNet = document.getElementById("monthlyNet").innerHTML = "$" + parseInt((grossInputSalary *.5725221439)/12);

  let biweeklyNet = document.getElementById("biweeklyNet").innerHTML = "$" + parseInt(((grossInputSalary *.5725221439)/12)/2);


// TAXES
  let federalTax = document.getElementById("federalTaxes").innerHTML = "$" + parseInt((grossInputSalary * .22));

  let stateTax = document.getElementById("stateTaxes").innerHTML = "$" + parseInt((grossInputSalary * .08875));

  let localTax = document.getElementById("localTaxes").innerHTML = "$" + parseInt((grossInputSalary * .03876));




// FEDERAL TAX BRACKETS - Single Filers
// firstSingleBracket = 10% of $0 to $9,875
// 12% - $9,876 to $40,125
// 22% - $40,126 to $85,525
// 24% - $85,526 to $163,300
// 32% - $163,301 to $207,350
// 35% - $207,351 to $518,400
// 37% - $518,401 or more


// EDITABLE TAX TIME TABLE

let firstBracketMax = 9875;
let secondBracketMax = 40125;
let thirdBracketMax = 85525;
let fourthBracketMax = 163300;
let fifthBracketMax = 207350;
let sixthBracketMax = 518400;
let seventhBracketMax = 85525;

let firstSinglesBracket = .10;
let secondSinglesBracket = .12;
let thirdSinglesBracket = .22;
let fourthSinglesBracket = .24;
let fifthSinglesBracket = .32;
let sixthSinglesBracket = .37;

 if (grossInputSalary >= 1 && grossInputSalary <= 9875) {
  let first = document.getElementById("firstBracketTaxes").innerHTML = "$" + parseInt(grossInputSalary * firstSinglesBracket);
} else if (grossInputSalary >= 9876 && grossInputSalary <= 40125) {
  document.getElementById("secondBracketTaxes").innerHTML = "$" + parseInt(((grossInputSalary - firstBracketMax) * secondSinglesBracket) + (firstBracketMax * firstSinglesBracket));
} else if (grossInputSalary >= 40126 && grossInputSalary <= 85525 ){
  document.getElementById("thirdBracketTaxes").innerHTML = "$" + parseInt(( (grossInputSalary - secondBracketMax) * thirdSinglesBracket) + (firstBracketMax * firstSinglesBracket) + (secondBracketMax * secondSinglesBracket));
 




} else if (grossInputSalary >= 85526 && grossInputSalary <= 163300) {
  document.getElementById("thirdBracketTaxes").innerHTML = "$" + parseInt(( (grossInputSalary - thirdBracketMax) * fourthSinglesBracket) + (firstBracketMax * firstSinglesBracket) + (secondBracketMax * secondSinglesBracket) + (thirdBracketMax * thirdSinglesBracket));



  

 } else if (grossInputSalary >= 163301 && grossInputSalary <= 207350) {
  console.log("Greater than or equal to $163,301 less than $207,350");
 } else if (grossInputSalary >= 207351 && grossInputSalary <= 518400) {
  console.log("Greater than or equal to $207,351 less than $518,400");
 } else if (grossInputSalary >= 518401) {
  console.log("Greater than or equal to $518,401");
 } else {
   console.log("Please input Gross Income")
 }





  event.preventDefault();
}

