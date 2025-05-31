/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
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
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question:  "What does FSK stand for in digital communication?",  ///// Write the question inside double quotes
      answers: {
        "a": "Frequency Shift Keying",
        "b": "Frequency Signal Keying",
        "c": "Fast Signal Keying",
        "d": "Frequency Switching Keying"
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
     question: "In FSK, how are binary '1' and '0' typically represented?",  ///// Write the question inside double quotes
      answers: {
        "a": "Different amplitudes",
        "b": "Different frequencies",
        "c": "Different phases",
        "d": "Different time periods"
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },     
    {
      question:"What is the main advantage of FSK over ASK?",  ///// Write the question inside double quotes
       answers: {
        "a": "Higher data rate",
        "b": "Better noise immunity",
        "c": "Lower bandwidth requirement",
        "d": "Simpler circuit design"
       },
       correctAnswer: "b"                ///// Write the correct option inside double quotes
     }, 
     {
      question:  "Which component is essential in an FSK demodulator?",  ///// Write the question inside double quotes
       answers: {
        "a": "Phase detector",
        "b": "Frequency discriminator",
        "c": "Amplitude limiter",
        "d": "Time delay circuit"
       },
       correctAnswer: "b"                ///// Write the correct option inside double quotes
     },
      {
      question:  "What is the term for the frequency difference between mark and space frequencies in FSK?", ///// Write the question inside double quotes
       answers: {
        "a": "Frequency gap",
        "b": "Frequency deviation",
        "c": "Frequency shift",
        "d": "Frequency hop"
       },
       correctAnswer: "c"                ///// Write the correct option inside double quotes
      }

    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////