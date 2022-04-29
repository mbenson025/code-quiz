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

// input and highscores
// var yourScore = document.getElementById('yourScore');
// var scoreBox = document.getElementById('scorebox');
// var scoreData = JSON.parse(localStorage.getItem(`userScore`));
var input = document.getElementById('input');
var submit = document.getElementById('submit');
var hiScorePage =document.getElementById('hiscore-page');
var hiScoreBox = document.getElementById('hiscorebox');
var scoreTitle = document.getElementById('scoretitle');
var list = document.getElementById('list');

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
    question: 'Which operator increments(adds one to) its operand?',
    choice: ['&&', '%', '++', '=>'],
    answer: '++'

  },
  {
    question: 'Name of a series of characters written inside quotes?',
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
      time.textContent = timeLeft;
      timeLeft--;
    
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      gameOver();
} 
    if (index === quizQuestions.length) {
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}





function compareAnswer(e) {

  userSelect = e.target.textContent;
  console.log(userSelect);
  e.preventDefault();

  if(index === quizQuestions.length) {
    gameOver();
  }

  if(userSelect === quizQuestions[index].answer) {
    console.log('right');
    timeLeft += 5;
    index++;
    feedback.style.display = 'block';
    feedback.textContent = 'Correct!';
    // feedback.style.color = 'green';
    // setTimeout makes the message disappear!
    setTimeout(function() {
      feedback.style.display = 'none';
      }, 1100);
    chooseQuestion();

  } else {
    console.log('wrong');
    timeLeft -= 5
    index++;
    feedback.style.display = 'block';
    feedback.textContent = 'Wrong!';
    // feedback.style.color = 'red';

    setTimeout(function() {
      feedback.style.display = 'none';
      }, 1100);
    chooseQuestion();

  }
}

function gameOver() {

  questionEl.textContent = '';
  answerSection.style.display = 'none';
  input.style.display = 'block';
  submit.style.display = 'block';
  //show input screen

  //temp fix for score being 1 less than it should be-
  score = timeLeft + 1;
  console.log(score);
  //your score display
  questionEl.textContent = `Great job! Your score is: ${score}`;

//create message to ask for highscore input
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
  // console.log(quizQuestions.length);

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



//SUBMIT BUTTON STORES TEXT(VALUE) OF INPUT
submit.addEventListener('click', function(e) {
  console.log(input.value);
  highScore();
});

function highScore() {
  // questionEl.textContent = 'High Scores';
  questionEl.textContent = '';
  input.style.display = 'none';
  submit.style.display = 'none';
  quizmain.style.display = 'none';
  hiScorePage.style.display = 'flex';
  hiScoreBox.style.display = 'flex';
  scoreTitle.style.display = 'flex';

    
    var nightmareHw = document.createElement('li');
    nightmareHw.innerText = `${input.value} Score: ${score}`;
    list.appendChild(nightmareHw);

}

