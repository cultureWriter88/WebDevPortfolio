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
let firstSinglesBracket = .10;
let secondSinglesBracket = .12;
let thirdSinglesBracket = .22;
let fourthSinglesBracket = .24;
let fifthSinglesBracket = .32;
let sixthSinglesBracket = .37;

 if (grossInputSalary >= 1 && grossInputSalary <= 9875) {
  let firstBracketTotal = grossInputSalary * firstSinglesBracket
  console.log(firstBracketTotal); //PRINTS 10% of income between 0 and 9875
 } else if (grossInputSalary >= 9876 && grossInputSalary <= 40125) {
  let secondBracketTotal = ((grossInputSalary - 9875) * (secondSinglesBracket) + 9875);
  console.log(secondBracketTotal);

 } else if (grossInputSalary >= 40126 && grossInputSalary <= 85525 ){
    console.log("Greater than or equal to $40,126 less than $85,525");
 } else if (grossInputSalary >= 85526 && grossInputSalary <= 163300) {
  console.log("Greater than or equal to $85,526 less than $163,300");
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

