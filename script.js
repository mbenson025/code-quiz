// normal variables
var score = 0;

// js variables

var quiz = document.getElementById('quiz');
var win = document.getElementById('win');
var lose = document.getElementById('lose');
var begin = document.getElementById('.begin');
var timer = document.getElementById('.timer');
var startpage = document.getElementById('.startpage');
var quizmain = document.getElementById('.quiz-main');




//quiz questions
// let quizQuestions = [
//   {
//     question 'Which word represents the absence of a value?',
//     answer1: 'Variable',
//     answer2: 'null',
//     answer3: 'Operator',
//     answer4: 'JavaScript',
//     correctchoice: 'answer2',

//   },
//   {
//     question 'What can a "loop" be used for in Javascript?',
//     answer1: 'Storing data on a browser window',
//     answer2: 'Changing a string to a number',
//     answer3: 'Perform repeated tasks based on a condition',
//     answer4: 'Downloading a virus',
//     correctchoice: 'answer3',

//   },
//   {
//     question 'What is the name of a series of characters inside a set of quotes?',
//     answer1: 'string',
//     answer2: 'yarn',
//     answer3: 'function',
//     answer4: 'hot dog',
//     correctchoice: 'answer1',

//   },
//   {
//     question 'Which method removes the last element of an array?',
//     answer1: 'pop()',
//     answer2: 'sort()',
//     answer3: 'valueOf()',
//     answer4: 'join()',
//     correctchoice: 'answer1',

//   },
//   {
//     question 'What is "concatenation" in coding?',
//     answer1: 'Sorting alphabetically',
//     answer2: 'Writing information to the browser console',
//     answer3: 'Copying a line of code',
//     answer4: 'Merging two or more strings',
//     correctchoice: 'answer4',

//   },
//   {
//     question 'How long did it take to develop JavaScript?',
//     answer1: '4 years',
//     answer2: '2 years',
//     answer3: '10 days',
//     answer4: '9 months',
//     correctchoice: 'answer3',

//   },
// ];





function beginGame() {

    timer = 75

    startpage.style.display = "none";
    quizmain.style.display = "block";



}







//functions
// function countDown() {
//   timer = 75

// var 


// }




//eventListeners
start.addEventListener('click', beginGame)





