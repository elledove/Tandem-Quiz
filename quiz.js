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
let questions =[]

fetch('question.json')
.then(r => r.json())
.then(q => {console.log(q)
    questions = q;
   
    startGame();    
})






const correct_bonus = 10;
const max_questions = 21

function startGame( ) {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion();
}


function getNewQuestion(){

    if(availableQuestions.length == 0 || questionCounter > max_questions){
        localStorage.setItem("Recent Score",score);
        return window.location.assign('/end.html');

    }
    questionCounter++;
   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex]
   question.innerText = currentQuestion.question;

   choices.forEach(choice =>{
       const number = choice.dataset['number'];
       console.log(number)
   })
}







