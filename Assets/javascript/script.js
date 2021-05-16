// timer, start, questions, end, name, score
var score = 0;
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
// var contentElement = document.getElementById('Qcontent');
var startBtn = document.getElementById('start'); // == var starQuiz = document.getElementById("start");
console.log(startBtn)
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    // contentElement.classList.add("hide")
    console.log("the game has started")
    startTimer();
    // contentElement.innerHTML = "";
    startQuestions();
    // let questionElement = document.createElement('div');
    // questionElement.setAttribute("div", "questions");
    // contentElement.append(questionElement);
}
var timeLeftEl = document.getElementById("timeleft")
function startTimer() {
    var timeLeft = 10;
    var timeInterval = setInterval(function() {
        if (timeLeft !== 0) {
            timeLeft--;
            timeLeftEl.innerHTML = 'Time Left: ' + timeLeft;
        }
        else {
            clearInterval(timeInterval);
            console.log ("the count reached 0");
            // quizOver();
        }
        // if (timeLeft === 0) {
        //     console.log("the count reached 0");
        //     clearInterval(timeInterval);
        // }
        // else {
        //     console.log(timeLeft)
        //     timeLeft--;
        //     timeLeftEl.innerHTML = 'Time Left: ' + timeLeft;
        // }
    }, 1000);
}

var codeQuestions = document.getElementById("quiz");
var questionIndex = 0;
var choiceBtn1 = document.getElementById("choice1")
var choiceBtn2 = document.getElementById("choice2")
var choiceBtn3 = document.getElementById("choice3")
var choiceBtn4 = document.getElementById("choice4")

function startQuestions() {
    console.log("quiz starts")
    if (questionIndex === questionsArray.length) {
        console.log ("quiz over")
        // quizOver();
    }
    var currentQuestion = questionsArray[questionIndex]
    codeQuestions.innerHTML = currentQuestion.question;
    choiceBtn1.innerHTML = currentQuestion.choice1;
    choiceBtn2.innerHTML = currentQuestion.choice2;
    choiceBtn3.innerHTML = currentQuestion.choice3;
    choiceBtn4.innerHTML = currentQuestion.choice4;
}
function answerCheck(userAnswer) {
    console.log(userAnswer)
    console.log(questionsArray[questionIndex].correctAnswer)
    if (userAnswer === questionsArray[questionIndex].correctAnswer) {
        questionIndex++;
        startQuestions();
        console.log("correctAnswer")
    }
    else {
        console.log("wrong")
    }
}



// function startQuestions() {
//     console.log("questions")
// }


//SCORE
// var score = 0;
// for (var i = 0; i < questionsArray.length; i++) {
//     var answer = 
// }

// END QUIZ

// NAME

// VIEW HIGH SCORES

// SCORES - GO BACK
// SCORES - CLEAR HIGH SCORES


// BUTTONS
// - start quiz
// - multiple choice options 
// - submit 
// - go back 
// - clear high scores 


// TIMER
// var timer = document.getElementById('countdown');
// function countdown() {
//     var timeLeft = 75;
//     var timeInterval = setInterval(function) {
            //TIMER CODE
            // if Finishes the Quiz. timer stops
            // if timer reaches 0, finishes the quiz
//     }, 1000);
// }

