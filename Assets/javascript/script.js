// timer, start, questions, end, name, score
var choiceBtn1 = document.getElementById("choice1")
var choiceBtn2 = document.getElementById("choice2")
var choiceBtn3 = document.getElementById("choice3")
var choiceBtn4 = document.getElementById("choice4")

var questionIndex = 0;
var score = 0;
// var codeQuestions = [
//     { 
//         question: "What tag is used to define a list item?",
//         answers: {
//             choice1: "<li>", 
//             choice2: "<list>", 
//             choice3: "<l>", 
//             choice4: "<list item>",
//             correctAnswer: "1"
//         },
//     },
//     { 
//         question: "What is the name of the statement that is used to exit or end loop?",
//         answers: {
//             choice1: "Falter statement", 
//             choice2: "Close statement", 
//             choice3: "Conditional statement", 
//             choice4: "Break statement",
//             correctAnswer: "4"
//         },
//     },
//     { 
//         question: "The link element must go inside the ___ section of an HTML document or page.",
//         answers: {
//             choice1: "Footer", 
//             choice2: "Paragraph", 
//             choice3: "Head", 
//             choice4: "Body",
//             correctAnswer: "3"
//         },
//     },
//     { 
//         question: "What is a JavaScript element that represents either TRUE or FALSE values?",
//         answers: {
//             choice1: "Event", 
//             choice2: "Boolean", 
//             choice3: "RegExp", 
//             choice4: "Condition",
//             correctAnswer: "2"
//         },
//     },
//     { 
//         question: "External stylesheets are stored in what type of files?",
//         answers: {
//             choice1: "CSS", 
//             choice2: "PHP", 
//             choice3: "HTML", 
//             choice4: "XML",
//             correctAnswer: "1"
//         },
//     }
// ];

function startQuestions() {
    console.log("quiz starts")
}
// START QUIZ
var mainElement = document.getElementById('main');
var startBtn = document.getElementById('start'); // == var starQuiz = document.getElementById("start");
console.log(startBtn)
startBtn.addEventListener('click', startQuiz);


function startQuiz() {
    // quizContainer.classList.add("hide")
    console.log("the game has started")
    startTimer();
    mainElement.innerHTML = "";
    let questionElement = document.createElement("p");
    questionElement.innerHTML = question1.question;
    mainElement.append(questionElement);
}
var question1 = {
    question: "What tag is used to define a list item?",
    answers: {
        choice1: "<li>", 
        choice2: "<list>", 
        choice3: "<l>", 
        choice4: "<list item>",
        correctAnswer: "1"
    }
}

var timeLeftEl = document.getElementById("timeleft")
function startTimer() {
    var timeLeft = 3;
    var timeInterval = setInterval(function() {
        if (timeLeft === 0) {
            console.log("the count reached 0");
            clearInterval(timeInterval);
        }
        else {
            console.log(timeLeft)
            timeLeft--;
            timeLeftEl.innerHTML = 'Time Left: ' + timeLeft;
        }
    }, 1000);
}


// var codeQuestions = document.getElementById("quiz");
// function startQuestions() {
//     console.log("questions")
// }


//SCORE
// var score = 0;
// for (var i = 0; i < codeQuestions.length; i++) {
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

