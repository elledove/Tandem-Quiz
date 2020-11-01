console.log("Goodbye!")
const question = document.getElementById("question");
//This is going to turn my HTML document collection into an array that I can interate through
const choices = Array.from(document.getElementsByClassName("choice-text"));

//console.log(choices)

let currentQuestion = {};
let acceptAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

function startGame( ) {
    questionCounter = 0;
    score = 0;
    //availableQuestions = [...questions]
    getNewQuestion();
}


function getNewQuestion(){
    questionCounter++;
   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex]
}





startGame();

