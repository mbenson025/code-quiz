// global variables
let score = 0;
let timeLeft;
var index = 0;
var highArray;

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
var returnBtn = document.getElementById('returnbtn');

// input and highscores
var highBtn = document.getElementById('highscores');
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
  e.preventDefault();

  if(index === quizQuestions.length) {
    gameOver();
  }

  if(userSelect === quizQuestions[index].answer) {
    timeLeft += 5;
    index++;
    feedback.style.display = 'block';
    feedback.textContent = 'Correct!';
    setTimeout(function() {
      feedback.style.display = 'none';
      }, 1100);
    chooseQuestion();

  } else {
    timeLeft -= 5
    index++;
    feedback.style.display = 'block';
    feedback.textContent = 'Wrong!';

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

  score = timeLeft + 1;
  console.log(score);
  //personal score display
  questionEl.textContent = `Great job! Your score is: ${score}`;

//create message to enter initials
  var inputmsg = document.createElement("p");
  inputmsg.innerText = "Please enter your initials";
  questionEl.appendChild(inputmsg);
}




//brings up high scores page and hides quiz page
function highScore() {
  questionEl.textContent = '';
  input.style.display = 'none';
  submit.style.display = 'none';
  quizmain.style.display = 'none';
  hiScorePage.style.display = 'flex';
  hiScoreBox.style.display = 'flex';
  scoreTitle.style.display = 'flex';
}

function saveScores() {
  var storageHighScores = localStorage.getItem('hiscores');

    if (storageHighScores !== null) {
      highArray = JSON.parse(storageHighScores);
    } else {
      highArray = [];
    }

    newScore = `${input.value} Score: ${score}`;

    highArray.push(newScore);
    var stringArray = JSON.stringify(highArray);
    localStorage.setItem('hiscores', stringArray);

    listScores();
}

//adds scores to a list
function listScores() {
  var storageHighScores = localStorage.getItem('hiscores');
  var unString = JSON.parse(storageHighScores);

  for (var i = 0; i < unString.length; i++) {
    var userScore = document.createElement('li');
    userScore.textContent = unString[i];
    list.appendChild(userScore);
  }
}





// eventListeners

//start page--begin starts quiz
begin.addEventListener('click', function(e) {

  startpage.style.display = 'none';
  quizmain.style.display = 'flex';
  returnBtn.style.display = 'flex';

  gameStart();
  countdown();
});

//high scores button
highBtn.addEventListener('click', function(e) {
    startpage.style.display = 'none';
    quizmain.style.display = 'flex';
    returnBtn.style.display = 'flex';
    highScore();
    listScores();
  });


//submit to store initials for high scores section
submit.addEventListener('click', function(e) {
    if (input.value === "") {
        alert("No!");
        return;
    } 
  console.log(input.value);
  highScore();
  saveScores();
});




//clear scores button
clearBtn.addEventListener("click", clearScore);

function clearScore() {
    localStorage.clear();
    unString.innerHTML="";
}