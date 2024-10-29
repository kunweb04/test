const questions = [
    { question: "我是谁？", answer: "oho" },
    { question: "我的生日？", answer: "4月17日" },
    { question: "我是什么类型的网页工程师？", answer: "前段网页工程师" },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

function startGame() {
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('timer').style.display = 'block';
    document.getElementById('score').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const questionText = document.getElementById('question-text');
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value;
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (userAnswer === correctAnswer) {
        score++;
    }
    document.getElementById('score').textContent = `得分：${score}`;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    let time = 30; // 30秒倒计时
    timer = setInterval(() => {
        timerElement.textContent = `时间：${time--}秒`;
        if (time < 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timer);
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('score').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('final-score').textContent = `你的最终得分是：${score}`;
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);

function startCountdown() {
    let countdownValue = 5;
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = countdownValue;

    const countdownInterval = setInterval(() => {
        countdownValue--;
        countdownElement.textContent = countdownValue;

        if (countdownValue <= 0) {
            clearInterval(countdownInterval);
            startGame();
        }
    }, 1000);
}

window.onload = function() {
    startCountdown();
};
