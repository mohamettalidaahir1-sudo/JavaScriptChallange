//Quiz quations

const questions = [
    {
        question: "What does CPU stand for?",
        answers: [
            { text: "Central Processing Unit", correct: true },
            { text: "Computer Personal Unit", correct: false },
            { text: "Central Program Utility", correct: false },
            { text: "Control Processing User", correct: false }
        ]
    },
    {
        question: "Which device is used to input text?",
        answers: [
            { text: "Monitor", correct: false },
            { text: "Keyboard", correct: true },
            { text: "Speaker", correct: false },
            { text: "Projector", correct: false }
        ]
    },
    {
        question: "Which component stores data permanently?",
        answers: [
            { text: "RAM", correct: false },
            { text: "CPU Cache", correct: false },
            { text: "SSD", correct: true },
            { text: "Register", correct: false }
        ]
    },
    {
        question: "Which language structures web page content?",
        answers: [
            { text: "HTML", correct: true },
            { text: "CSS", correct: false },
            { text: "SQL", correct: false },
            { text: "Python", correct: false }
        ]
    },
    {
        question: "What does RAM do?",
        answers: [
            { text: "Prints documents", correct: false },
            { text: "Displays images", correct: false },
            { text: "Temporarily stores data in use", correct: true },
            { text: "Connects a computer to power", correct: false }
        ]
    },
    {
        question: "Which device connects different networks?",
        answers: [
            { text: "Mouse", correct: false },
            { text: "Router", correct: true },
            { text: "Keyboard", correct: false },
            { text: "Scanner", correct: false }
        ]
    },
    {
        question: "Which of these is an operating system?",
        answers: [
            { text: "Microsoft Word", correct: false },
            { text: "Google Chrome", correct: false },
            { text: "Windows 11", correct: true },
            { text: "HTML", correct: false }
        ]
    },
    {
        question: "What is the main function of an IP address?",
        answers: [
            { text: "Identify a network interface logically", correct: true },
            { text: "Increase RAM capacity", correct: false },
            { text: "Cool the processor", correct: false },
            { text: "Store files permanently", correct: false }
        ]
    },
    {
        question: "Which component performs arithmetic operations?",
        answers: [
            { text: "Hard Drive", correct: false },
            { text: "ALU", correct: true },
            { text: "Power Supply", correct: false },
            { text: "Monitor", correct: false }
        ]
    },
    {
        question: "Which protocol is commonly used to browse websites securely?",
        answers: [
            { text: "FTP", correct: false },
            { text: "HTTP", correct: false },
            { text: "HTTPS", correct: true },
            { text: "SMTP", correct: false }
        ]
    }
];

//DOM

const startScreen = document.querySelector('.start-Screen');
const quizScreen = document.querySelector('.quiz-Screen');
const resulttScreen = document.querySelector('.result-screen')

//buttons

const start_btn = document.querySelector('.start-btn');
const restart_btn = document.querySelector('.restart-btn');

//spans

const currentQuesionSpan = document.querySelector('.current-question');
const max_scoreSpan = document.querySelector('.max-score');
const scoreSpan = document.querySelector('.score-span')
const totalScoreSpan = document.querySelector('.total-score-span');
const textQuestion = document.querySelector('.question-text')
const result_Msg = document.querySelector('.msg-result')
const progressBar = document.querySelector('.progress-bar')
const answer_Container = document.querySelector('.answers-con');


let current_QUestion_index = 0;
let totalQuestions = questions.length
let totalScore = 0;

start_btn.addEventListener('click', () => {
    startScreen.style.display = 'none'
    quizScreen.style.display = 'block'
    showQuestion()
})

const showQuestion = () => {
    max_scoreSpan.textContent = questions.length;
    currentQuesionSpan.textContent = current_QUestion_index + 1;
    scoreSpan.textContent = totalScore;
    const currentQuestion = questions[current_QUestion_index];
    textQuestion.textContent = currentQuestion.question;
    let progressPercent = (totalScore / totalQuestions) * 100;
    progressBar.style.width = progressPercent + "%";
    answer_Container.innerHTML = "";
    currentQuestion.answers.forEach(ans => {
        let buttons = document.createElement('button')
        buttons.textContent = ans.text
        buttons.dataset.correct = ans.correct
        buttons.classList.add('ans-btn')
        answer_Container.appendChild(buttons)
        buttons.addEventListener('click', selectAnswer)
    })

}
let isSelect = true;
const selectAnswer = (e) => {
    let button = e.target;
    console.log(e.target);
    if (!isSelect) return;
    isSelect = true;

    let selectedAnswer = e.target.dataset.correct
    console.log(selectedAnswer);
    let correctAnswer = selectedAnswer === "true"
    if (correctAnswer) {
        button.classList.add('correct')
        totalScore++;
    } else {
        Array.from(answer_Container.children).forEach(ans => {
            if (ans.dataset.correct === "true") {
                ans.classList.add('correct')
            }
        })
        button.classList.add('incorrect')
    }

    setTimeout(() => {
        if (current_QUestion_index < totalQuestions - 1) {
            current_QUestion_index++
            showQuestion()
        } else {
            resultScreen()
        }


    }, 1000);
}

const resultScreen = () => {

    quizScreen.style.display = "none"
    resulttScreen.style.display = "block"
    if (totalScore > 8) {
        result_Msg.textContent = "Excellent! You have mastered this quiz!";
        result_Msg.style.color = "#22C55E"
    } else if (totalScore > 5) {
        result_Msg.textContent = "Good job! Keep practicing to improve your score.";
        result_Msg.style.color = "#FFCB3D"
    } else {
        result_Msg.textContent = "Keep trying! Review the questions and try again.";
        result_Msg.style.color = "#EF4444"
    }
    totalScoreSpan.textContent = totalScore;
    restart_btn.addEventListener('click', () => {
        resulttScreen.style.display = "none";
        startScreen.style.display = "block"
        current_QUestion_index = 0;
        totalScore = 0;

    })
}