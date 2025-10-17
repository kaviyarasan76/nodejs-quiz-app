Node.js Quiz App

An interactive web-based quiz application built with Node.js, Express, and vanilla JavaScript. The app fetches quiz questions from a backend API, lets users select answers, submit them, and receive scores with badges based on performance.

Features

Responsive and user-friendly UI with HTML, CSS, and JavaScript

Dynamic quiz questions fetched from backend API endpoint (GET /api/quiz)

Validates user has answered all questions before submission

Submits user answers via POST /api/submit

Displays results with score and badge (Gold, Silver, Bronze, or none)

Restart quiz functionality without page reload

Simple REST API backend built with Express

Serves frontend static files from public directory

Project Structure
nm-project/
│
├── index.js           # Main Express server file
├── package.json       # Project dependencies and scripts
├── README.md          # This file
├── public/
│   └── index.html     # Frontend HTML + CSS + JS
│
└── node_modules/      # Installed dependencies

Installation

Clone the repo:

git clone <https://github.com/kaviyarasan76>


Navigate to the project directory:

cd nm-project


Install dependencies:

npm install

Usage
Start the backend server
node index.js


This starts the Express server on port 3000 (default).

Access the frontend

Open a browser and navigate to http://localhost:3000

Click Start Quiz to begin.

Answer all questions and submit.

View your score and badge.

Restart quiz to play again.

API Endpoints
GET /api/quiz

Returns a JSON array of quiz questions:

[
  {
    "id": 1,
    "question": "What is Node.js?",
    "options": [
      "A JavaScript runtime",
      "A database",
      "A web framework",
      "A programming language"
    ]
  },
  ...
]

POST /api/submit

Accepts user answers in JSON format:

{
  "1": "A JavaScript runtime",
  "2": "Some answer",
  ...
}


Responds with score summary:

{
  "score": 3,
  "total": 5
}

Customization

Questions & Scoring: Modify the quiz questions and scoring logic inside index.js.

Frontend Styling: Update CSS in public/index.html to match your branding.

Features: Extend the frontend JavaScript for additional functionality.

License

This project is licensed under the MIT License.

Author

Created by L.kaviyarasan
<img width="1600" height="900" alt="nm project 1 screenshot" src="https://github.com/user-attachments/assets/404655f6-abfd-4641-a04d-127c2d023a54" />
<img width="1600" height="852" alt="nm project 2 screnshot" src="https://github.com/user-attachments/assets/14ed253c-c561-4a16-957f-5f978f5c4394" />
<img width="1600" height="852" alt="nm project 3 screenshot" src="https://github.com/user-attachments/assets/7b769b64-0065-4877-b19f-0f5166c4bd2a" />

