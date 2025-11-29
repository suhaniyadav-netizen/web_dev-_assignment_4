// Suhani Yadav
// 2501410032
// B.Tech CSE Cyber Security Semester 1
// Lab Assignment 4 Web Dev Quiz Game

const quizQuestions = [
    { question: "Name the first president of India?", answer: "dr. rajendra prasad" },
    { question: "Which is the largest statue in India?", answer: "statue of unity" },
    { question: "Name the capital of Gujrat?", answer: "gandhinagar" },
    { question: "In which year India became independent?", answer: "1947" },
    { question: "Who wrote our national anthem?", answer: "rabindranath tagore" }
];

function runQuiz() {
    let score = 0;
    alert("Welcome to Assignment 4 Quiz by Suhani Yadav!");
    for (let i = 0; i < quizQuestions.length; i++) {
        const user = prompt(`Q${i + 1}: ${quizQuestions[i].question}`);
        const userAns = user ? user.toLowerCase().trim() : "";
        const correctAns = quizQuestions[i].answer.toLowerCase().trim();

        if (userAns === correctAns) {
            alert("Correct answer");
            score++;
        } else {
            alert(`Incorrect answer\nCorrect answer is: ${quizQuestions[i].answer}`);
        }
    }
    alert(`Quiz Completed!\nYour Score: ${score} / ${quizQuestions.length}`);
}

runQuiz();