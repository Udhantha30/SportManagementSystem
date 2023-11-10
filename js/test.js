// setting the questions and answers into  an array.
const questions = [
    {
        question: "Where will the 2023 Rugby World Cup be held?",
        answers: [
            { text: "Italy", correct: false},
            { text: "France", correct: true},  // marking the coreect as true and incorrect answers as false.
            { text: "England and Wales", correct: false},
            { text: "Australia", correct: false},
        ]
    },
    {
        question: "Who get most ODI runs for Sri lanka?",
        answers: [
            { text: "Mahela Jayawardene", correct: false},
            { text: "Tillakaratne Dilshan", correct: false},
            { text: "Sanath Jayasuriya", correct: false},
            { text: "Kumar Sangakkara", correct: true},
        ]
    },
    {
        question: "How many squares in a chess board?",
        answers: [
            { text: "80", correct: false},
            { text: "64", correct: true},
            { text: "54", correct: false},
            { text: "72", correct: false},
        ]
    },
    {
        question: "How many players are in basketball each team?",
        answers: [
            { text: "6", correct: false},
            { text: "7", correct: false},
            { text: "8", correct: false},
            { text: "5", correct: true},
        ]
    },
    {
        question: "How many players are there in a Rugby team?",
        answers: [
            { text: "15 members", correct: true},
            { text: "16 members", correct: false},
            { text: "11 members", correct: false},
            { text: "20 members", correct: false},
        ]
    },
    {
        question: "Where was the last T20 World Cup held?",
        answers: [
            { text: "India", correct: false},
            { text: "Australia", correct: true},
            { text: "England", correct: false},
            { text: "South Africa", correct: false},
        ]
    },
    {
        question: "Who is the champion of 2023 FIDE world chess championship?",
        answers: [
            { text: "Magnus Carlsen", correct: false},
            { text: "Ian Nepomniachtchi", correct: false},
            { text: "Garry Kasparov", correct: false},
            { text: "Ding Liren", correct: true},
        ]
    },
    {
        question: "Who is the best basketball player in the world all time?",
        answers: [
            { text: "Michael Jordan", correct: false},
            { text: "Lebron James", correct: true},
            { text: "Magic Johnson", correct: false},
            { text: "Wilt Chamberlain", correct: false},
        ]
    },
    {
        question: "How long is a Rugby game?",
        answers: [
            { text: "100 minutes", correct: false},
            { text: "120 minutes", correct: false},
            { text: "80 minutes", correct: true},
            { text: "90 minutes", correct: false},
        ]
    },
    {
        question: "How long is the lunch break in Test Cricket?",
        answers: [
            { text: "20 minutes", correct: false},
            { text: "40 minutes", correct: true},
            { text: "30 minutes", correct: false},
            { text: "45 minutes", correct: false},
        ]
    },
];

//Adding HTML varriables.
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer_btns");
const nextButton = document.getElementById("next_btn");
const timerElement = document.getElementById("timer");

let currentQuestionIndex = 0;  //Adding the varriable currentQuestionIndex to store the question index.
let score = 0; //Adding the varriable score to store the score.
let wrong=0;    
let timeLeft = 90;
let timerId;

//creating the function startQuiz to start the quizeApp
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    wrong=0;
    timeLeft = 90;
    nextButton.innerHTML = "Next Question";  //changing the text of the nextButton to "Next".
    showQuestion();     //calling to the methods showQuestion and startTimer.
    startTimer();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];   //setting the variable CurrentQuestion to the index of the questions Array.
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;   //displaying the question with the question number.

    //displaying the answers from the questions.
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");    //asigning the button tag to a variable name button.
        button.innerHTML = answer.text;     //adding the answers to the varrible button.
        button.classList.add("btn");        //adding the class name btn to the varaible button. 
        answerButtons.appendChild(button);      //displaying the button inside the answerButtons.
        if(answer.correct){
            button.dataset.correct = answer.correct;       //adding to the button the true or false answers.
        }
        button.addEventListener("click", selectAnswer);    //adding the click option to the answerButtons by calling the selectAnswer method.
    });
}

//reffered from W3 Schools.
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);       //removing the previous answers
    }
}

//referd from W3 Schools.
function selectAnswer(e){
    const selectedBtn = e.target;       //adding the selectedBtn element when we clicked on the button.
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");   //if the selectedBtn dataset is true it will add the class name correct.
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")      //if the selectedBtn dataset is false it will add the class name incorrect.
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){      //checking each button dataset and if it is true, then it will add the class name correct.
            button.classList.add("correct");
        }
        button.disabled = true;     //disabling the answer buttons after selecting one answer.
    });
    nextButton.style.display = "block";     //displaying the next Question button.
}

function showScore(){
    resetState();
    clearInterval(timerId);
    let timeTaken = 90 - timeLeft;
    let wrong = 10 - score;
    let message;
    if (score >= 8) {
        message = '<span style="color: green;">Excellent! You did great!</span>';
    } else if (score >= 5) {
        message = '<span style="color: blue;">Good job! You did well.</span>';
    } else {
        message = '<span style="color: red;">Better luck next time!</span>';
    }
    questionElement.innerHTML = `<h1><center>Quiz Completed! Quiz Result.</center></h1>
    <center>Total Questions: ${questions.length} <br/><br/>
    Attempts Used  : 10 <br/><br/>
    You Scored     : ${score}/10 <br/><br/>
    Correct Answers: ${score} <br/><br/>
    Wrong Answers  : ${wrong} <br/><br/>
    Time Taken     : ${timeTaken} seconds.<br/><br/>
    Performance    : ${message}</center>`;
    nextButton.innerHTML = "Exit";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        window.location.href="test.html";
    }
});

/*------------Quiz Timer-------------------*/

//refered from Stackoverflow.
function startTimer(){
    timerId = setInterval(() => {
        timeLeft --;
        timerElement.innerHTML = `Time Left : ${timeLeft}`;
        if(timeLeft <= 0){
            clearInterval(timerId);
            showScore();
        }
    }, 1000);     //this code inside the startTimer function should run every 1000 milliseconds (1 second).
}

startQuiz();


