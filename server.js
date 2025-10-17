const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const quizData = [
  {
    id: 1,
    question: "What does CPU stand for?",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Utility"],
    answer: "Central Processing Unit"
  },
  {
    id: 2,
    question: "Which programming language is used for web apps?",
    options: ["PHP", "Python", "JavaScript", "All of the above"],
    answer: "All of the above"
  },
  {
    id: 3,
    question: "Which data structure uses FIFO (First In First Out)?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue"
  },
  {
    id: 4,
    question: "Which HTTP method is used to update a resource completely?",
    options: ["POST", "GET", "PUT", "PATCH"],
    answer: "PUT"
  },
  {
    id: 5,
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Standard Question Language", "None of the above"],
    answer: "Structured Query Language"
  },
  {
    id: 6,
    question: "Which of the following is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    answer: "MongoDB"
  },
  {
    id: 7,
    question: "In JavaScript, which keyword declares a constant?",
    options: ["let", "const", "var", "define"],
    answer: "const"
  },
  {
    id: 8,
    question: "Which company developed the React library?",
    options: ["Google", "Microsoft", "Facebook", "Amazon"],
    answer: "Facebook"
  },
  {
    id: 9,
    question: "What does API stand for?",
    options: ["Application Programming Interface", "Applied Programming Internet", "Application Processing Interface", "None of the above"],
    answer: "Application Programming Interface"
  },
  {
    id: 10,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
    answer: "O(log n)"
  },
  {
    id: 11,
    question: "Which of the following is used to control versioning of code?",
    options: ["Docker", "Jenkins", "Git", "Webpack"],
    answer: "Git"
  }
];

app.get('/api/quiz', (req, res) => {
  const questions = quizData.map(({ id, question, options }) => ({ id, question, options }));
  res.json(questions);
});

app.post('/api/submit', (req, res) => {
  const userAnswers = req.body; // e.g. { 1: "answer", 2: "answer" }
  let score = 0;

  quizData.forEach(q => {
    if (userAnswers[q.id] && userAnswers[q.id] === q.answer) {
      score++;
    }
  });

  res.json({ score, total: quizData.length });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
