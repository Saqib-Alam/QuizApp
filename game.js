const question = document.getElementById("qurstion");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById('score');
const progressbarFull = document.getElementById('progressbarFull');

let currentQuestion = {};
let acceptingAnswers = false;
let scorec= 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "Where the first radio station of pakistan was built??",
        choice1: "Karachi",
        choice2: "Isamabad",
        choice3: "Lahore",
        choice4: "Sialkot",
        answer: 1
    },
    {
        question: "Where the biggest airport of pakistan is located?",
        choice1: "Islamabad",
        choice2: "Karachi",
        choice3: "Rawalpindi",
        choice4: "Lahore",
        answer: 2
    },
    {
        question: "What is the national bird of Pakistan",
        choice1: "Eagle",
        choice2: "Peacock",
        choice3: "Peagon",
        choice4: "Chukar",
        answer: 4
    },
    {
        question: "Who is the founder of national anthem",
        choice1: "Taimoor Khan",
        choice2: "Mia Bashir",
        choice3: "Hafeez Jhalandari",
        choice4: "Jamal Quddusi",
        answer: 3
    },
    {
        question: "Who disigned the flag of Pakistan",
        choice1: "Jamal Quddusi",
        choice2: "Syed Amir-uddin Kedwaii",
        choice3: "Hafiz Naeem",
        choice4: "Liaquat Ali Khan",
        answer: 2
    },
    {
        question: "What is the national animal of Pakistan",
        choice1: "Goat",
        choice2: "Camel",
        choice3: "Lion",
        choice4: "Markhor",
        answer: 4
    },
    {
        question: "Faisal Mosque was built by an Architect of ",
        choice1: "Turkish",
        choice2: "Saudi",
        choice3: "French",
        choice4: "American",
        answer: 1
    },
    {
        question: "Pakistan is located in the ",
        choice1: "East Asia",
        choice2: "West Asia",
        choice3: "Central Asia",
        choice4: "South Asia",
        answer: 4
    },
    {
        question: "Which country is not bordered with Pakistan ",
        choice1: "Afghanistan",
        choice2: "Bangladesh",
        choice3: "China",
        choice4: "India",
        answer: 2
    },
    {
        question: "In Urdu, the name Pakistan literally means ",
        choice1: "Pure land",
        choice2: "Truthful land",
        choice3: "Land of the pure",
        choice4: "Land of the truthfulness",
        answer: 3
    }
    
];

//constants
const correct_bonus = 10;
const Max_QUESTIONS = 10;


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuesions.length == 0 || questionCounter > Max_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign("end.html");
    }
    questionCounter++;
    // progressbarFull.innerText = 'Question ${questionCounter} "/" ${Max_QUESTIONS}';
    progressbarFull.style.width = '${(questionCounter / Max_QUESTIONS) * 100}%';

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];


        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        
        
        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

startGame();