const section = document.querySelector('section');
let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

   
function displayCatInfo(jsonToJsObject) {
  // start count of total for total # of cats
  let total = 0;
  // start count of male cats based on gender
  let male = 0;

  // Coverts JSON to Js object with .parse, names object jsonToJsObject
  // jsonToJsObject is then assigned to "cats" variable
  // jsonToJsObject object is then passed to displayCatInfo function above
  let cats = JSON.parse(jsonToJsObject);

    // cats variable now has the sample.json file content of 3 cat
    // for loop, through cats array, add 1 to count
    for(let i = 0; i < cats.length; i++) {

          // loops through each array item of cats
          // add one to total 
          for(let j = 0; j < cats[i].kittens.length; j++) {
            total++;

            // bracket notation to check letter in front of gender property
            // if gender is m, add one to male
            if(cats[i].kittens[j].gender === 'm') {
              male++;
            }
          }

          // "cats.length - 1", means the second to last array item
          // if i < 3, motherInfo will include "cats[i].name"
          if(i < (cats.length - 1)) {

          // the names for "cats array" items keeps updating with the next cat array item name
            motherInfo += `${ cats[i].name }, `;
            
          // else if "cats.length" is at "third" array item, the next item will have the word "and"
          } else {
            motherInfo += `and ${ cats[i].name }.`;
          }

    }

  kittenInfo  = `There are ${ total } kittens in total, ${ male } males and ${ total - male } females.`;

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);

