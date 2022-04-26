// normal variables
var score = 0;
var questionDisplay = 0;

// js variables

var quiz = document.getElementById('quiz');
var win = document.getElementById('win');
var lose = document.getElementById('lose');
var begin = document.getElementById('begin');
var timer = document.getElementById('timer');
var startpage = document.getElementById('startpage');
var quizmain = document.getElementById('quiz-main');
var answer = document.getElementById('answer');

var timeLeft = 80;
var right = 5;
var wrong = 10;


var question = 0;

// quiz questions
// let quizQuestions = [
//   {
//     question: 'Which word represents the absence of a value?',
//     choices: [ 'Variable','null', 'Operator', 'JavaScript' ],
//     correctchoice: 'null'

//   },
//   {
//     question 'What can a "loop" be used for in Javascript?',
//     choices: [ 'Storing data on a browser window', 'Changing a string to a number', 'Perform repeated tasks based on a condition', 'Downloading a file' ],
//     correctchoice: 'Perform repeated tasks based on a condition',

//   },
//   {
//     question 'What is the name of a series of characters inside a set of quotes?',
//     choices: [ 'string', 'yarn', 'function', 'hot dog' ],
//     correctchoice: 'string'

//   },
//   {
//     question 'Which method removes the last element of an array?',
//     choices: [ 'pop()', 'sort()', 'valueOf()', 'join()' ],
//     correctchoice: 'pop()'

//   },
//   {
//     question 'What is "concatenation" in coding?',
//     choices: [ 'Sorting alphabetically', 'Writing information to the browser console', 'Copying a line of code', 'Merging two or more strings' ],
//     correctchoice: 'Merging two or more strings'

//   },
//   {
//     question 'How long did it take to develop JavaScript?',
//     answer1: [ '4 years', '2 years', '10 days', '9 months'],
//     correctchoice: '10 days',

//   },
// ];






// function startTimer();
//   timer.textContent = time;
//   time--;

function startQuiz() {

}



// eventListeners

//start page click to quiz screen
begin.addEventListener('click', function(e) {

  startpage.style.display = 'none';
  quizmain.style.display = 'flex';

  // console.log('test');

  startQuiz();
  // startTimer();
})









