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

// RETIREMENT






  event.preventDefault();
}

