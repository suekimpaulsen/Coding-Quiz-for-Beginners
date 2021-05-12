// timer, start, questions, end, name, score

// START QUIZ
var startBtn = document.querySelector('#start'); // == var starQuiz = document.getElementById("start");
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    console.log("the game has started")
    startTimer();
}

var timeLeftEl = document.getElementById("timeLeft")
function startTimer() {
    var timeLeft = 3;
    var timeInterval = setInterval(function() {
        if (timeLeft === 0) {
            console.log("the count reached 0");
            clearInterval(timeInterval);
        }
        else {
            timeLeft--;
            timeInterval.querySelector('#timeleft') = timeLeft;
        }
    }, 1000);
}
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

// QUESTIONS
// var codeQuestions = document.getElementById("questions");
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
//     }
// ];

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
