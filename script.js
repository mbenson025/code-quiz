// global variables
let score = 0;
let time = 76;
var questionDisplay = 0;
var gameRunning;

// DOM variables
var quiz = document.getElementById('quiz');
var win = document.getElementById('win');
var lose = document.getElementById('lose');
var begin = document.getElementById('begin');
var timeClock = document.getElementById('time');
var startpage = document.getElementById('startpage');
var quizmain = document.getElementById('quiz-main');
var answer = document.getElementById('answer');


var question = document.querySelector('#question')





// quiz questions
let quizQuestions = [
  {
    question: 'Which word represents the absence of a value?',
    choice: ['Variable','null', 'Operator', 'JavaScript'],
    correctchoice: 'null'

  },
  {
    question: 'What can a "loop" be used for in Javascript?',
    choice: ['Storing data on a browser window', 'Changing a string to a number', 'Perform repeated tasks based on a condition', 'Downloading a file'],
    correctchoice: 'Perform repeated tasks based on a condition',

  },
  {
    question: 'What is the name of a series of characters inside a set of quotes?',
    choice: ['string', 'yarn', 'function', 'hot dog'],
    correctchoice: 'string'

  },
  {
    question: 'Which method removes the last element of an array?',
    choice: ['pop()', 'sort()', 'valueOf()', 'join()'],
    correctchoice: 'pop()'

  },
  {
    question: 'What is "concatenation" in coding?',
    choice: ['Sorting alphabetically', 'Writing information to the browser console', 'Copying a line of code', 'Merging two or more strings'],
    correctchoice: 'Merging two or more strings'

  },
  {
    question: 'How long did it take to develop JavaScript?',
    choice: ['4 years', '2 years', '10 days', '9 months'],
    correctchoice: '10 days',

  },
];







function startQuiz() {
  // if (choice === correctchoice) {
  //   feedback.innerHTML = 'Correct!';
  //   return true;
  // } else {
  //   feedback.innerHTML = 'Wrong!';
  //   return false;
  // }
}

//pick a question
function displayQuestion(quizQuestions) {
  let index = Math.floor(Math.random() * quizQuestions.length)

  question.innerHTML = quizQuestions[index];
}

function countdown() {
  if(time>0) {
    time--;
  } else if(time <= 0) {
    //GAME OVER-----
    gameRunning = false;
  }
  timeClock.innerHTML = time;

  setInterval(countdown, 1000)
}

function gameOver () {
  if (gameRunning = false && time <=0) {
      feedback.innerHTML = 'Game Over!';
  }
}



// eventListeners

//start page click to quiz screen
begin.addEventListener('click', function(e) {

  startpage.style.display = 'none';
  quizmain.style.display = 'flex';

  // console.log('test');

  startQuiz();
  // startTimer();
  countdown();
})









