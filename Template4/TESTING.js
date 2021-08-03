window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  document.querySelector(".main-app").setAttribute("style", "filter: blur(5px)");
  document.querySelector(".popup").classList.add("active");
});

// Close Button on Top Right Corner
document.querySelector(".popup .close-btn").addEventListener("click",function(){
  document.querySelector(".popup").classList.remove("active");
  document.querySelector(".main-app").setAttribute("style", "filter: blur(0px)");
});

// Opening and Closing LogIn Button
document.querySelector("#show-login").addEventListener("click",function(){
  document.querySelector(".main-app").setAttribute("style", "filter: blur(5px)");
  document.querySelector(".popup").classList.add("active");
});

// Checks that the Correct Username and Password are entered.
// Add Additional Log-In and Period#: Input Row
document.querySelector(".sign-in-button").addEventListener("click", function(event){
  let login_email = document.querySelector("#email").value;
  let login_password = document.querySelector("#password").value;
      if (login_email === "student" && login_password === "student"){
        alert("Student has logged in successfully.");
        document.querySelector(".popup").classList.remove("active");
        document.querySelector(".main-app").setAttribute("style", "filter: blur(0px)");
      } else {
        alert("Incorrect 'username' and/or 'password', contact your teacher to continue.");
      };
});

// Pressing ENTER also submits LogIn Form...
// Not working 100% accurately. Continue working on this 6-18-21

document.querySelector('#password').onkeydown = function(e){
   if(e.keyCode == 13){
     console.log("You pressed ENTER and form Submitted");
     document.querySelector(".popup").classList.remove("active");
     document.querySelector(".main-app").setAttribute("style", "filter: blur(0px)");
     console.log("if worked");
   } else {
     alert("Incorrect 'username' and/or 'password', contact your teacher to continue.");
     console.log("else worked");
   };
};

//  CONTINUE HERE
document.querySelector("#password").addEventListener("keyup", function(event){
  let login_email = document.querySelector("#email").value;
  let login_password = document.querySelector("#password").value;
      if ((login_email === "student" && login_password === "student" && event.keyCode === 13)){
        alert("Student has logged in successfully.");
        document.querySelector(".popup").classList.remove("active");
        document.querySelector(".main-app").setAttribute("style", "filter: blur(0px)");
      } else {
        alert("Incorrect 'username' and/or 'password', contact your teacher to continue.");
      };
});


// Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const percentageContainer = document.getElementById('percentage');
const modelingExpressionsContainer = document.getElementById('modeling-expressions');
const orderOfOperationsContainer = document.getElementById('order-of-operations');
const evaluatingExpressionsContainer = document.getElementById('evaluating-expressions');
const submitButton = document.getElementById('submit');



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
};
/////////////////////////////////////////////////////////////////


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


// my Questions stored here
  const myQuestions = [

    //Regents Questions - MODELING EXPRESSIONS-IA
  
// my Questions stored here


// COUNTS TOTAL NUMBER OF QUESTIONS FROM EACH subTopic
function getNbOccur(subTopic, myQuestions) {
  var occurs = 0;
  for (var i = 0; i < myQuestions.length; i++) {
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

///////////////////////////////////

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
      document.querySelector("body").style.backgroundColor = "violet";    
    };
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  let percentageResult = Math.round(numCorrect / (myQuestions.length) * 100) + "%"
  percentageContainer.innerHTML = "Total Percentage: " + percentageResult;

  // numbers correct per subTopic
  modelingExpressionsContainer.innerHTML = "Modeling Expressions: " + modelingExpressionsCorrect + " out of " + getNbOccur("modeling-expressions", myQuestions) + " or " + Math.round(modelingExpressionsCorrect / getNbOccur("modeling-expressions", myQuestions) * 100) + "%" ;

  orderOfOperationsContainer.innerHTML = "Order of Operations: " + orderOfOperationsCorrect + " out of " + getNbOccur("order-of-operations", myQuestions) + " or " + Math.round(orderOfOperationsCorrect / getNbOccur("order-of-operations", myQuestions) * 100) + "%" ;

  evaluatingExpressionsContainer.innerHTML = "Evaluating Expressions: " + evaluatingExpressionsCorrect + " out of " + getNbOccur("evaluating-expressions", myQuestions) + " or " + Math.round(evaluatingExpressionsCorrect / getNbOccur("evaluating-expressions", myQuestions) * 100) + "%" ;
  ////////////////////


// NEXT STEPS 
// ADD a time stamp to each score that gets passed to the localStorage.items
let d = new Date();
document.getElementById("submitDate").innerHTML = d;



  localStorage.setItem('resultsPercent', JSON.stringify(percentageResult));
  let resultsPercentage = JSON.parse(localStorage.getItem('resultsPercent'));
  // resultsPercentage is a STRING
  // console.log(resultsPercentage); 
  //////////////////// 
  // let scoreToArray = JSON.stringify(resultsPercentage)
    const ul = document.querySelector('ul');
    const clearButton = document.getElementById('clearButton');
    
    if (localStorage.getItem('items')) {
      itemsArray = JSON.parse(localStorage.getItem('items'))
    } else {
      itemsArray = []
    };

    localStorage.setItem('items', JSON.stringify(itemsArray));
    
    const data = JSON.parse(localStorage.getItem('items'));

    const liMaker = (resultsPercentage) => {
      const li = document.createElement('li');
      li.textContent = resultsPercentage;
      ul.appendChild(li);
    }

    data.forEach(item => {
      liMaker(item);
    });

    // SOLVED on 2-1-21 took 1 week to figure this out
    itemsArray.push(resultsPercentage);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(resultsPercentage);
    

    clearButton.addEventListener("click", function () {
      localStorage.clear();
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
      itemsArray = [];


    });

};

//////////////////////////////////////////

// Javascript and Node.js authentication basic setup
// MDN Folder (TODOLIST)
// Storing the users in your database
// Making sure you have the right user attributes defined
// Forcing users to be logged in to view a page
// Building registration and login forms
// Creating password reset workflows that email users a link
// Verifying new users when they sign up via email


// SOLVED on 2-1-21 took 1 week to figure this out

// Solved issue after a week of trial and error. Struggled to save final results to localStorage.items

// I removed the event listener within the event listener in order to store array objects pushed from resultsPercentage.

// Now working on: 
// - storing that localStorage.items data on a database.
// - user authentication so login in required.
// - each login saves its results on database and displays scores.



// Event listeners
submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);