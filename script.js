// global variables
let score = 0;
let timeLeft = 75;
var index = 0;
var gameRunning;

// DOM variables
var quiz = document.getElementById('quiz');
var win = document.getElementById('win');
var lose = document.getElementById('lose');
var begin = document.getElementById('begin');
var time = document.getElementById('time');
var startpage = document.getElementById('startpage');
var quizmain = document.getElementById('quiz-main');
var aEl = document.getElementById('a');
var bEl = document.getElementById('b');
var cEl = document.getElementById('c');
var dEl = document.getElementById('d');



var questionEl = document.getElementById('question-title')






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


function chooseQuestion() {
  // clear question
  // questionEl.textContent = "";

  var index = 0;

  questionEl.textContent = quizQuestions[index].question;
  aEl.textContent = quizQuestions[index].choice[0];
  bEl.textContent = quizQuestions[index].choice[1];
  cEl.textContent = quizQuestions[index].choice[2];
  dEl.textContent = quizQuestions[index].choice[3];
}






function gameStart() {

  for (i = 0; i < 5; i++)
    if (i < 6) {
      index++;
      chooseQuestion();

    }else {
      gameOver();
    }
  }

  
function countdown() {
  timeLeft = 75;

  var timeInterval = setInterval(function () {
    if (timeLeft >= 0) {
      time.textContent = timeLeft;
      timeLeft--;

    } else {
      
      clearInterval(timeInterval);

      // window.alert("Game Over!")
    }
  }, 1000);
}





function compareAnswer() {




  }


















// eventListeners

//start page click to quiz screen
begin.addEventListener('click', function(e) {

  startpage.style.display = 'none';
  quizmain.style.display = 'flex';

  // console.log('test');

  gameStart();
})









