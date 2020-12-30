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

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

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
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

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
  const submitButton = document.getElementById('submit');
  
  const myQuestions = [

    //Regents - MODELING EXPRESSIONS-IA
    {
      question: "Which verbal expression represents 2(n - 6)?" ,
      answers: {
        a: "two times n minus six",
        b: "two times six minus n",
        c: " two times the quantity six less than n",
        d: " two times the quantity n less than six"
      },
      correctAnswer: "c",
      
      // Adding sub-section below:
      subTopic:"modeling-expressions"

    },
    {
      question: "Which verbal expression represents 1/2(n - 3)?",
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
    {
      question: "Which verbal expression can be represented by 2(x - 5)?",
      answers: {
        a: "the product of 2 and x, decreased by 5",
        b: "2 multiplied by x less than 5",
        c: " twice the difference of x and 5",
        d: "5 less than 2 times x"
      },
      correctAnswer: "c",

      // Adding sub-section below:
      subTopic:"modeling-expressions"
    },
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
    {
      question: "#2 What is the first step in simplifying the expression (2 - 3 * 4 + 5) &#xB2",
      answers: {
        a: "square 5",
        b: "add 4 and 5",
        c: "subtract 3 from 2",
        d: "multiply 3 by 4"
      },
      correctAnswer: "d",

      // Adding sub-section below:
      subTopic:"order-of-operations"
    },
    {
      question: "#3 If the expression 3-4&#xB2 + <sup>6</sup>&frasl;<sub>2</sub>  is evaluated, what would be done last?",
      answers: {
        a: "subtracting",
        b: "squaring",
        c: "adding",
        d: "dividing"
      },
      correctAnswer: "c",

      // Adding sub-section below:
      subTopic:"order-of-operations"
    },
    {
      question: "#4 The expression 15 – 3[2 + 6(–3)] simplifies to",
      answers: {
        a: "-45",
        b: "-33",
        c: "63",
        d: "192"
      },
      correctAnswer: "c",

      // Adding sub-section below:
      subTopic:"order-of-operations"
    },
    {
      question: "#5 The expression -|-7| is equivalent to",
      answers: {
        a: "1",
        b: "0",
        c: "7",
        d: "-7"
      },
      correctAnswer: "d",

      // Adding sub-section below:
      subTopic:"order-of-operations"
    },
    {
      question: "#6 The value of the expression  |-20|-|6|  is",
      answers: {
        a: "26",
        b: "14",
        c: "-14",
        d: "-26"
      },
      correctAnswer: "b",

      // Adding sub-section below:
      subTopic:"order-of-operations"
    },
    {
      question: "#7 An expression equivalent to 3! is",
      answers: {
        a: "3 * 3",
        b: "3 * 2 * 1",
        c: "3 * 3 * 3",
        d: "-3"
      },
      correctAnswer: "b",

      // Adding sub-section below:
      subTopic:"order-of-operations"
    },
    {
      question: "#8 The value of 5! is",
      answers: {
        a: "1/5",
        b: "5",
        c: "20",
        d: "120"
      },
      correctAnswer: "d",

      // Adding sub-section below:
      subTopic:"order-of-operations"
    },
    {
      question: "#9 The value of <sup>7!</sup>&frasl;<sub>3!</sub> is",
      answers: {
        a: "840",
        b: "24",
        c: "7",
        d: "4"
      },
      correctAnswer: "a",

      // Adding sub-section below:
      subTopic:"order-of-operations"
    },
    {
      question: "#10 The value of <sup>8!</sup>&frasl;<sub>4!</sub> is",
      answers: {
        a: "1,680",
        b: "2",
        c: "2!",
        d: "4!"
      },
      correctAnswer: "a",

      // Adding sub-section below:
      subTopic:"order-of-operations"
    },
    {
      question: "#11 What is the value of | <sup>4(-6)+18</sup>&frasl;<sub>4!</sub>| ?",
      answers: {
        a: "1/4",
        b: "-1/4",
        c: "12",
        d: "-12"
      },
      correctAnswer: "a",

      // Adding sub-section below:
      subTopic:"order-of-operations"
    },
    {
      question: "#12 The value of the expression  6! + <sup>5!(3!)</sup>&frasl;<sub>4!</sub> - 10  is",
      answers: {
        a: "50",
        b: "102",
        c: "740",
        d: "750"
      },
      correctAnswer: "c",

      // Adding sub-section below:
      subTopic:"order-of-operations"
    },




    ////////////////////////////




    // Regents-EVALUATING EXPRESSIONS 1a MC
    {
      question: "#1 What is the value of the expression |-5x + 12| when x = 5?",
      answers: {
        a: "-37",
        b: "-13",
        c: "13",
        d: "37"
      },
      correctAnswer: "c",

      // Adding sub-section below:
      subTopic:"evaluating-expressions"
    },
    
    





    

    // QUESTION BANK BELOW:
    // http://www.jmap.org/htmlstandard/6.EE.A.2.htm


  ];

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
