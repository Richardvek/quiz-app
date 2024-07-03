const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultContainerElement = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

let shuffledQuestions, currentQuestionIndex;
let score = 0;

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.classList.add('hide');
    resultContainerElement.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainerElement.classList.add('hide');
    resultContainerElement.classList.remove('hide');
    scoreElement.innerText = score;
    startButton.innerText = 'Restart Quiz';
    startButton.classList.remove('hide');
}

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Lisbon', correct: false }
        ]
    },
    {
        question: 'Who is the CEO of Tesla?',
        answers: [
            { text: 'Jeff Bezos', correct: false },
            { text: 'Elon Musk', correct: true },
            { text: 'Bill Gates', correct: false },
            { text: 'Tony Stark', correct: false }
        ]
    },
    {
        question: 'What is the largest planet in our solar system?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Mars', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'What is the powerhouse of the cell?',
        answers: [
            { text: 'Nucleus', correct: false },
            { text: 'Mitochondria', correct: true },
            { text: 'Ribosome', correct: false },
            { text: 'Chloroplast', correct: false }
        ]
    },
    {
        question: 'Which language is used for web development?',
        answers: [
            { text: 'Python', correct: false },
            { text: 'HTML', correct: true },
            { text: 'Java', correct: false },
            { text: 'C++', correct: false }
        ]
    },
    {
        question: 'What is the chemical symbol for water?',
        answers: [
            { text: 'H2O', correct: true },
            { text: 'O2', correct: false },
            { text: 'CO2', correct: false },
            { text: 'H2', correct: false }
        ]
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        answers: [
            { text: 'Harper Lee', correct: true },
            { text: 'Mark Twain', correct: false },
            { text: 'F. Scott Fitzgerald', correct: false },
            { text: 'Ernest Hemingway', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Venus', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'What is the tallest mountain in the world?',
        answers: [
            { text: 'K2', correct: false },
            { text: 'Mount Everest', correct: true },
            { text: 'Kangchenjunga', correct: false },
            { text: 'Lhotse', correct: false }
        ]
    },
    {
        question: 'What is the smallest unit of life?',
        answers: [
            { text: 'Atom', correct: false },
            { text: 'Molecule', correct: false },
            { text: 'Cell', correct: true },
            { text: 'Organ', correct: false }
        ]
    }
];
