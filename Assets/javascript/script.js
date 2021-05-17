var questionsArray = [
    { 
        question: "The link element must go inside the ___ section of an HTML document or page.",
        choice1: "Footer", 
        choice2: "Paragraph", 
        choice3: "Head", 
        choice4: "Body",
        correctAnswer: "choice3"
    },
    { 
        question: "External stylesheets are stored in what type of files?",
        choice1: "CSS", 
        choice2: "PHP", 
        choice3: "HTML", 
        choice4: "XML",
        correctAnswer: "choice1"
    },
    { 
        question: "What tag is used to define a list item?",
        choice1: "li", 
        choice2: "list", 
        choice3: "l", 
        choice4: "list item",
        correctAnswer: "choice1"
    },
    { 
        question: "What is the name of the statement that is used to exit or end loop?",
        choice1: "Falter statement", 
        choice2: "Close statement", 
        choice3: "Conditional statement", 
        choice4: "Break statement",
        correctAnswer: "choice4"
    },
    { 
        question: "What is a JavaScript element that represents either TRUE or FALSE values?",
        choice1: "Event", 
        choice2: "Boolean", 
        choice3: "RegExp", 
        choice4: "Condition",
        correctAnswer: "choice2"
    }
];

// START QUIZ
var contentElement = document.getElementById('Qcontent');
var resultElement = document.getElementById('results');
var scoreElement = document.getElementById('highscore');
var introElement = document.getElementById('intro')
var startBtn = document.getElementById('start');
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    introElement.setAttribute("hidden", "true");
    contentElement.removeAttribute("hidden", "true");
    startTimer();
    startQuestions();
}
var timeLeftEl = document.getElementById("timeleft")
var timeLeft = 75;
function startTimer() {
    var timeInterval = setInterval(function() {
        if ((timeLeft === 0) || (questionIndex === questionsArray.length)) {
            clearInterval(timeInterval);
            quizOver();
        }
        else {
            timeLeft--;
            timeLeftEl.innerHTML = 'Time Left: ' + timeLeft;
        }
    }, 1000);
}

var codeQuestions = document.getElementById("quiz");
var questionIndex = 0;
var choiceBtn1 = document.getElementById("choice1")
var choiceBtn2 = document.getElementById("choice2")
var choiceBtn3 = document.getElementById("choice3")
var choiceBtn4 = document.getElementById("choice4")

function startQuestions() {
    if (questionIndex === questionsArray.length) {
        quizOver();
    }
    else {
        var currentQuestion = questionsArray[questionIndex];
        codeQuestions.innerHTML = currentQuestion.question;
        choiceBtn1.innerHTML = currentQuestion.choice1;
        choiceBtn2.innerHTML = currentQuestion.choice2;
        choiceBtn3.innerHTML = currentQuestion.choice3;
        choiceBtn4.innerHTML = currentQuestion.choice4;
    }
}
function answerCheck(userAnswer) {
    if (userAnswer === questionsArray[questionIndex].correctAnswer) {
    }
    else {
        timeLeft -= 10;
    }
    questionIndex++;
    startQuestions();
}
function quizOver() {
    resultElement.removeAttribute("hidden", "true");
    contentElement.setAttribute("hidden", "true");
    timeLeftEl.innerHTML = 'Time Left: ' + timeLeft;
}

var submitScore = document.getElementById("submit");
submitScore.addEventListener('click', submitName);

function submitName() {
    resultElement.setAttribute("hidden", "true");
    scoreElement.removeAttribute("hidden", "true");
    var userInitial = document.getElementById("initials").value;
    localStorage.setItem('initial', userInitial);
    localStorage.setItem('score', timeLeft);
    if (userInitial === '') {
        alert('please enter your initials');
    }
    renderHighScore();
}

var userInitialSpan = document.querySelector('#user-initial');
var userScoreSpan = document.querySelector('#user-score');
function renderHighScore() {
    var userInitial = window.localStorage.getItem('initial');
    var timeLeft = localStorage.getItem('score');

    userInitialSpan.textContent = userInitial;
    userScoreSpan.textContent = timeLeft;
}
var clearScore = document.getElementById("clearscore");
clearScore.addEventListener('click', clearStorage);
function clearStorage() {
    localStorage.clear();
    userInitialSpan.textContent = "";
    userScoreSpan.textContent = "";
}
