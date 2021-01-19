(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }













/////////////////////////////////////////////////////////////////







  function showResults(){


    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;
    
    // subTopic of questions
    let modelingExpressionsCorrect = 0;
    let orderOfOperationsCorrect = 0;
    let evaluatingExpressionsCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }


      // if subTopic is Correct and Belongs to a subTopic... 
      if(currentQuestion.subTopic === "modeling-expressions" && userAnswer === currentQuestion.correctAnswer){
        modelingExpressionsCorrect++;
      } else if (currentQuestion.subTopic === "order-of-operations" && userAnswer === currentQuestion.correctAnswer) {
        orderOfOperationsCorrect++;
      } else if (currentQuestion.subTopic === "evaluating-expressions" && userAnswer === currentQuestion.correctAnswer){
        evaluatingExpressionsCorrect++;
      } else{
        document.querySelector("html").style.backgroundColor = "violet";    
      };

    }
    );

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    let percentageResult = Math.round(numCorrect / (myQuestions.length) * 100) + "%"
    percentageContainer.innerHTML = "Total Percentage: " + percentageResult;

    // numbers correct per subTopic
    modelingExpressionsContainer.innerHTML = "Modeling Expressions: " + modelingExpressionsCorrect + " out of " + getNbOccur("modeling-expressions", myQuestions) + " or " + Math.round(modelingExpressionsCorrect / getNbOccur("modeling-expressions", myQuestions) * 100) + "%" ;

    orderOfOperationsContainer.innerHTML = "Order of Operations: " + orderOfOperationsCorrect + " out of " + getNbOccur("order-of-operations", myQuestions) + " or " + Math.round(orderOfOperationsCorrect / getNbOccur("order-of-operations", myQuestions) * 100) + "%" ;

    evaluatingExpressionsContainer.innerHTML = "Evaluating Expressions: " + evaluatingExpressionsCorrect + " out of " + getNbOccur("evaluating-expressions", myQuestions) + " or " + Math.round(evaluatingExpressionsCorrect / getNbOccur("evaluating-expressions", myQuestions) * 100) + "%" ;
    ////////////////////

          // CONTINUE WORKING HERE 1-10-20
          // Working on saving scores to LOCAL STORAGE
          // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage
              // Save Results to 'localStorage' as "resultsPercentage"


              // NOTES: Loops over the code 5 times straight. LOGS % 5 times
              // Continue working here, so far code loops through length of "myQuestions" array and returns result 3 times.
              // function percentageResultsDatabase() {
              //   let i;
              //     for (i = 0; i < myQuestions.length; i++) {
  
                    // Calculates and Returns Data and Time
                    localStorage.setItem('resultsPercent', JSON.stringify(percentageResult));
                    let d = new Date();
                    document.getElementById("submitDate").innerHTML = d;
                    let resultsPercentage = JSON.parse(localStorage.getItem('resultsPercent'));
                    console.log(resultsPercentage);
                    //////////////////// 

                    // I want the resultsPercentage to show up as an item on the list.

                    let resultsPercentageSerialized = JSON.stringify(resultsPercentage);
                    
                    localStorage.setItem("percentCorrect", resultsPercentageSerialized);

                    let resultsPercentageDeserialized = JSON.parse(localStorage.getItem("percentCorrect"));
                      


                    

























































































//  https://github.com/taniarascia/sandbox/blob/master/tab/js/scripts.js

  // localStorage items visible
  const form = document.getElementById('submit');
  const ul = document.querySelector('ul');
  const button = document.getElementById('clearButton');
  const input = document.getElementById('percentage');
  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  console.log(resultsPercentage);
  console.log(itemsArray);

  localStorage.setItem('items', JSON.stringify(itemsArray));
  const data = JSON.parse(localStorage.getItem('items'));
  console.log(data);

  const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  };

  submitButton.addEventListener('submit', function (e) {
    e.preventDefault();
  
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = "";
  });

  //////////

  console.log(typeof data);

  data.forEach((item) => {
    liMaker(item);
  });


  button.addEventListener('click', function () {
    localStorage.clear();
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  });


// CONTINUE HERE vvv vvv vvv vvv vvv vvv vvv
//  https://www.taniarascia.com/how-to-use-local-storage-with-javascript/
// https://stackoverflow.com/questions/35963412/append-data-to-localstorage-object




// Secondary Sources vvv vvv vvv vvv vvv vvv vvv vvv vvv
// https://stackoverflow.com/questions/49347392/to-do-list-delete-button-within-html-li-element
// https://github.com/taniarascia/sandbox/blob/master/tab/js/scripts.js
//  https://stackoverflow.com/questions/53275405/typeerror-data-foreach-is-not-a-function/53275463









































  };







////////////////////////////////////////// end showResults().

























































  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const percentageContainer = document.getElementById('percentage');
  const modelingExpressionsContainer = document.getElementById('modeling-expressions');
  const orderOfOperationsContainer = document.getElementById('order-of-operations');
  const evaluatingExpressionsContainer = document.getElementById('evaluating-expressions');

  const submitButton = document.getElementById('submit');
  
  // my Questions stored here
  const myQuestions = [

    //Regents - MODELING EXPRESSIONS-IA
    // {
    //   question: "Which verbal expression represents 2(n - 6)?" ,
    //   answers: {
    //     a: "two times n minus six",
    //     b: "two times six minus n",
    //     c: " two times the quantity six less than n",
    //     d: " two times the quantity n less than six"
    //   },
    //   correctAnswer: "c",
      
    //   // Adding sub-section below:
    //   subTopic:"modeling-expressions"

    // },
    // {
    //   question: "Which verbal expression represents 1/2(n - 3)?",
    //   answers: {
    //     a: " one-half the difference of n and 3",
    //     b: " the difference of one-half n and 3",
    //     c: " one-half n decreased by 3",
    //     d: "one-half n subtracted from 3"
    //   },
    //   correctAnswer: "a",

    //   // Adding sub-section below:
    //   subTopic:"modeling-expressions"
      
    // },
    // {
    //   question: "Which verbal expression can be represented by 2(x - 5)?",
    //   answers: {
    //     a: "the product of 2 and x, decreased by 5",
    //     b: "2 multiplied by x less than 5",
    //     c: " twice the difference of x and 5",
    //     d: "5 less than 2 times x"
    //   },
    //   correctAnswer: "c",

    //   // Adding sub-section below:
    //   subTopic:"modeling-expressions"
    // },
    {
      question: "Which verbal expression is represented by 2(x + 4)?",
      answers: {
        a: " one-half the difference of n and 3",
        b: " the difference of one-half n and 3",
        c: " one-half n decreased by 3",
        d: "one-half n subtracted from 3"
      },
      correctAnswer: "a",

      // Adding sub-section below:
      subTopic:"modeling-expressions"
    },
    


    ////////////////////////////



    //Regents - ORDER OF OPERATIONS 1a IA/A
    {
      question: "#1 On February 18, from 9 a.m. until 2 p.m., the temperature rose from -14°F to 36°F. What was the total increase in temperature during this time period?",
      answers: {
        a: "50°",
        b: "36°",
        c: "32°",
        d: "22°"
      },
      correctAnswer: "a",

      // Adding sub-section below:
      subTopic:"order-of-operations"
    },
    // {
    //   question: "#2 What is the first step in simplifying the expression (2 - 3 * 4 + 5) &#xB2",
    //   answers: {
    //     a: "square 5",
    //     b: "add 4 and 5",
    //     c: "subtract 3 from 2",
    //     d: "multiply 3 by 4"
    //   },
    //   correctAnswer: "d",

    //   // Adding sub-section below:
    //   subTopic:"order-of-operations"
    // },
    // {
    //   question: "#3 If the expression 3-4&#xB2 + <sup>6</sup>&frasl;<sub>2</sub>  is evaluated, what would be done last?",
    //   answers: {
    //     a: "subtracting",
    //     b: "squaring",
    //     c: "adding",
    //     d: "dividing"
    //   },
    //   correctAnswer: "c",

    //   // Adding sub-section below:
    //   subTopic:"order-of-operations"
    // },
    // {
    //   question: "#4 The expression 15 – 3[2 + 6(–3)] simplifies to",
    //   answers: {
    //     a: "-45",
    //     b: "-33",
    //     c: "63",
    //     d: "192"
    //   },
    //   correctAnswer: "c",

    //   // Adding sub-section below:
    //   subTopic:"order-of-operations"
    // },
    // {
    //   question: "#5 The expression -|-7| is equivalent to",
    //   answers: {
    //     a: "1",
    //     b: "0",
    //     c: "7",
    //     d: "-7"
    //   },
    //   correctAnswer: "d",

    //   // Adding sub-section below:
    //   subTopic:"order-of-operations"
    // },
    // {
    //   question: "#6 The value of the expression  |-20|-|6|  is",
    //   answers: {
    //     a: "26",
    //     b: "14",
    //     c: "-14",
    //     d: "-26"
    //   },
    //   correctAnswer: "b",

    //   // Adding sub-section below:
    //   subTopic:"order-of-operations"
    // },
    // {
    //   question: "#7 An expression equivalent to 3! is",
    //   answers: {
    //     a: "3 * 3",
    //     b: "3 * 2 * 1",
    //     c: "3 * 3 * 3",
    //     d: "-3"
    //   },
    //   correctAnswer: "b",

    //   // Adding sub-section below:
    //   subTopic:"order-of-operations"
    // },
    // {
    //   question: "#8 The value of 5! is",
    //   answers: {
    //     a: "1/5",
    //     b: "5",
    //     c: "20",
    //     d: "120"
    //   },
    //   correctAnswer: "d",

    //   // Adding sub-section below:
    //   subTopic:"order-of-operations"
    // },
    // {
    //   question: "#9 The value of <sup>7!</sup>&frasl;<sub>3!</sub> is",
    //   answers: {
    //     a: "840",
    //     b: "24",
    //     c: "7",
    //     d: "4"
    //   },
    //   correctAnswer: "a",

    //   // Adding sub-section below:
    //   subTopic:"order-of-operations"
    // },
    // {
    //   question: "#10 The value of <sup>8!</sup>&frasl;<sub>4!</sub> is",
    //   answers: {
    //     a: "1,680",
    //     b: "2",
    //     c: "2!",
    //     d: "4!"
    //   },
    //   correctAnswer: "a",

    //   // Adding sub-section below:
    //   subTopic:"order-of-operations"
    // },
    // {
    //   question: "#11 What is the value of | <sup>4(-6)+18</sup>&frasl;<sub>4!</sub>| ?",
    //   answers: {
    //     a: "1/4",
    //     b: "-1/4",
    //     c: "12",
    //     d: "-12"
    //   },
    //   correctAnswer: "a",

    //   // Adding sub-section below:
    //   subTopic:"order-of-operations"
    // },
    // {
    //   question: "#12 The value of the expression  6! + <sup>5!(3!)</sup>&frasl;<sub>4!</sub> - 10  is",
    //   answers: {
    //     a: "50",
    //     b: "102",
    //     c: "740",
    //     d: "750"
    //   },
    //   correctAnswer: "c",

    //   // Adding sub-section below:
    //   subTopic:"order-of-operations"
    // },


    ////////////////////////////


    // Regents-EVALUATING EXPRESSIONS 1a MC
    {
      question: "#1 What is the value of the expression |-5x + 12| when x = 5?",
      answers: {
        a: "-13",
        b: "37",
        c: "13",
        d: "37"
      },
      correctAnswer: "a",

      // Adding sub-section below:
      subTopic:"evaluating-expressions"
    }
    
    
    // QUESTION BANK BELOW:
    // http://www.jmap.org/htmlstandard/6.EE.A.2.htm


  ];

// 

  // COUNTS TOTAL NUMBER OF QUESTIONS FROM EACH subTopic
  function getNbOccur(subTopic, myQuestions) {
    var occurs = 0;
    for (var i=0; i < myQuestions.length; i++) {
      if ( 'subTopic' in myQuestions[i] && myQuestions[i].subTopic === subTopic ) occurs++;
    }
    return occurs;
  }
  
  console.log( getNbOccur("modeling-expressions", myQuestions) );
  console.log( getNbOccur("order-of-operations", myQuestions) );
  console.log( getNbOccur("evaluating-expressions", myQuestions) );






  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

})
();






////////////////////////////////
// HTML5 STORAGE of Test Scores
// Here the code must be typed into the 'inputString'. I want the scores to be added to the Array automatically on submit button click...

//array to store values
var stores = Array();
//input field text
var inputField = document.getElementById('inputString');


//clear the storage
function clearStorage() {
  //clear the storage
  stores = Array();
  localStorage.clear("database");
  //visually cleared
  document.getElementById('write').innerHTML = "storage cleared.";
}




// save the string
function saveStatusLocally() {
  //grab the value of the text box
  var stringToSave = inputField.value;
      if ((stringToSave == null) || (stringToSave == "")) {
        document.getElementById('write').innerHTML = "nothing to store.";
      } else {
        //push that value to the array
        stores.push(stringToSave);
        //clear the input field for visual 
        inputField.value = "";
        //print that value into the local storage named database and joing by a non-breaking space
        window.localStorage.setItem("database", stores.join(" "));
        //confirm write
        document.getElementById('write').innerHTML = "data stored.";
        //clear message after 1s
        setTimeout(function() {
          document.getElementById('write').innerHTML = "";
        }, 1000);
      }
      
  let retrievedObject = JSON.parse(window.localStorage.getItem('results'));
      if (!retrievedObject) {
        alert('Empty, initializing');
        retrievedObject = [];
      }
  retrievedObject.push('quiz.results' + retrievedObject.length);
  window.localStorage.setItem('results', JSON.stringify(retrievedObject));
}


////////////////////////////////




