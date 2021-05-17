// array of quiz questions
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

var contentElement = document.getElementById('Qcontent');
var resultElement = document.getElementById('results');
var scoreElement = document.getElementById('highscore');
var introElement = document.getElementById('intro')

var codeQuestions = document.getElementById("quiz");
var choiceBtn1 = document.getElementById("choice1")
var choiceBtn2 = document.getElementById("choice2")
var choiceBtn3 = document.getElementById("choice3")
var choiceBtn4 = document.getElementById("choice4")
var timeLeftEl = document.getElementById("timeleft")

var startBtn = document.getElementById('start');
var submitScore = document.getElementById("submit");
var clearScore = document.getElementById("clearscore");

var userInitialSpan = document.querySelector('#user-initial');
var userScoreSpan = document.querySelector('#user-score');
var questionIndex = 0;
var timeLeft = 75;


// clickable button to start the quiz
startBtn.addEventListener('click', startQuiz);

// a timer starts. present questions
function startQuiz() {
    introElement.setAttribute("hidden", "true");
    contentElement.removeAttribute("hidden", "true");
    startTimer();
    startQuestions();
}

// time decreses by 1 sec. stops when time left reaches 1 or all questions are answered
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

// present the questions one by one until all Qs are answered
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

// check if user inputs are same as correct answers from questions array. If it was incorrect, time is subtracted from the clock
function answerCheck(userAnswer) {
    if (userAnswer === questionsArray[questionIndex].correctAnswer) {
    }
    else {
        timeLeft -= 10;
    }
    questionIndex++;
    startQuestions();
}

// when the quiz is over, present with the initial input method with the submit button
function quizOver() {
    resultElement.removeAttribute("hidden", "true");
    contentElement.setAttribute("hidden", "true");
    timeLeftEl.innerHTML = 'Time Left: ' + timeLeft;
}

// clickable button to submit user initials and score
submitScore.addEventListener('click', submitName);

// submit and save user initials and score
function submitName() {
    scoreElement.removeAttribute("hidden", "true");
    var userInitial = document.getElementById("initials").value;
    localStorage.setItem('initial', userInitial);
    localStorage.setItem('score', timeLeft);
    if (userInitial === '') {
        alert('please enter your initials');
    }
    renderHighScore();
}
function renderHighScore() {
    var userInitial = window.localStorage.getItem('initial');
    var timeLeft = localStorage.getItem('score');

    userInitialSpan.textContent = userInitial;
    userScoreSpan.textContent = timeLeft;
}

// clear saved initials and score when clear high scores button is clicked
clearScore.addEventListener('click', clearStorage);
function clearStorage() {
    localStorage.clear();
    userInitialSpan.textContent = "";
    userScoreSpan.textContent = "";
}
