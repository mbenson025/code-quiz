// global variables
let score = 0;
let timeLeft;
var index = 0;
var gameRunning;

// DOM variables
var quiz = document.getElementById('quiz');
var begin = document.getElementById('begin');
var time = document.getElementById('time');
var startpage = document.getElementById('startpage');
var quizmain = document.getElementById('quiz-main');
var aEl = document.getElementById('a');
var bEl = document.getElementById('b');
var cEl = document.getElementById('c');
var dEl = document.getElementById('d');
var answerSection = document.getElementById('answersection');
var quizbox = document.getElementById('quiz-box');
// var scoreData = JSON.parse(localStorage.getItem(`userScore`));


var questionEl = document.getElementById('question-title');

var userChoice = document.querySelectorAll('.answer');

var feedback = document.querySelector('.answersection small');




// quiz questions
let quizQuestions = [
  {
    question: 'Which word represents the absence of a value?',
    choice: ['Variable','null', 'Operator', 'JavaScript'],
    answer: 'null'

  },
  {
    question: 'What can a "loop" be used for in Javascript?',
    choice: ['Storing data on a browser window', 'Changing a string to a number', 'Perform repeated tasks based on a condition', 'Downloading a file'],
    answer: 'Perform repeated tasks based on a condition'

  },
  {
    question: 'What is the name of a series of characters written inside quotes?',
    choice: ['string', 'yarn', 'function', 'hot dog'],
    answer: 'string'

  },
  {
    question: 'Which method removes the last element of an array?',
    choice: ['pop()', 'sort()', 'valueOf()', 'join()'],
    answer: 'pop()'

  },
  {
    question: 'What is "concatenation" in coding?',
    choice: ['Sorting alphabetically', 'Writing information to the browser console', 'Copying a line of code', 'Merging two or more strings'],
    answer: 'Merging two or more strings'

  },
  {
    question: 'How long did it take to develop JavaScript?',
    choice: ['4 years', '2 years', '10 days', '9 months'],
    answer: '10 days'

  },
];


function gameStart() {
  var index = 0;
  timeLeft = 45;
chooseQuestion();

}



function chooseQuestion() {
  questionEl.textContent = quizQuestions[index].question;
  aEl.textContent = quizQuestions[index].choice[0];
  bEl.textContent = quizQuestions[index].choice[1];
  cEl.textContent = quizQuestions[index].choice[2];
  dEl.textContent = quizQuestions[index].choice[3];

    aEl.onclick = function(e){
        compareAnswer(e)
    };
    bEl.onclick = function(e){
        compareAnswer(e)
    };
    cEl.onclick = function(e){
        compareAnswer(e)
    };
    dEl.onclick = function(e){
        compareAnswer(e)
    };
}



function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft >= 0) {
      time.textContent = timeLeft;
      timeLeft--;

    } else {
      
      clearInterval(timeInterval);

      gameOver();
    }
  }, 1000);
}





function compareAnswer(e) {

  userSelect = e.target.textContent;
  console.log(userSelect);
  e.preventDefault();

  if(index === 5) {
    gameOver();
  }

  if(userSelect === quizQuestions[index].answer) {
    console.log('right');
    timeLeft += 5;
    index++;
    feedback.style.display = 'block';
    feedback.textContent = 'Correct!'
    // setTimout makes the message disappear!
    setTimeout(function() {
      feedback.style.display = 'none';
    }, 1100);
    chooseQuestion();

  } else {
    console.log('wrong');
    timeLeft -= 5
    index++;
    feedback.style.display = 'block';
    feedback.textContent = 'Wrong!'
    setTimeout(function() {
    feedback.style.display = 'none';
    }, 1100);
    chooseQuestion();

  }
}


function gameOver() {

  questionEl.textContent = '';
  answerSection.style.display = 'none';
  score = timeLeft;
  console.log(score);
  //your score display
  questionEl.textContent = `Great job! Your score is: ${score}`;


  var inputmsg = document.createElement("p");
  inputmsg.innerText = "Please enter your initials";
  questionEl.appendChild(inputmsg);
  
}

// eventListeners

//start page click to quiz screen
begin.addEventListener('click', function(e) {

  startpage.style.display = 'none';
  quizmain.style.display = 'flex';

  // console.log('test');
  console.log(quizQuestions.length);

  gameStart();
  countdown();
});


// answerSection.addEventListener('click', (e) => {
//   // console.log(e.target); --tests clicking the buttons
//     if (e.target.classList.contains('answer')) {
//       compareAnswer(e);
//       console.log(e)
//     }

// });






