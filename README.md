INDEX.HTML
 
 README.md file tailored for my Node.js Quiz App based on the HTML and JS :
# Node.js Quiz App

An interactive web-based quiz application designed to test knowledge related to Node.js and IT topics. The quiz dynamically fetches questions from a backend API, allows users to select answers, submit them, and receive a score with badges based on their performance.

---

## Features

- Clean, responsive UI with HTML, CSS, and vanilla JavaScript
- Fetches quiz questions from an API endpoint (`/api/quiz`)
- Validates all questions are answered before allowing submission
- Submits answers via POST request to `/api/submit`
- Displays results and awards badges (Gold, Silver, Bronze, or none)
- Allows users to restart the quiz without refreshing the page

---

## Usage

1. **Start the backend server** (not included here) that exposes the following API endpoints:
   - `GET /api/quiz` – Returns JSON array of quiz questions with options.
   - `POST /api/submit` – Accepts JSON answers and returns score and total.

2. **Open the `index.html`** file in a web browser or serve it via a web server pointing to the frontend folder.

3. Click **Start Quiz** to begin.

4. Select answers for all questions and click **Submit**.

5. View your score and badge, then restart if desired.

---

## Project Structure

/ (root)
├── index.html # Main frontend HTML + CSS + JS
├── README.md # This file
└── (Backend server) # You need a backend server for API endpoints

---

## API Contract

### GET `/api/quiz`

Response example:
```json
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
Request body example:
{
  "1": "A JavaScript runtime",
  "2": "Some answer",
  ...
}
Response example:
{
  "score": 3,
  "total": 5
}
________________________________________
Customization
•	Update the backend API endpoints to serve your own quiz questions and scoring logic.
•	Modify the styling in the <style> block within index.html to match your branding.
•	Extend the frontend logic in the script section for additional features.
________________________________________
License
This project is licensed under the MIT License.
________________________________________
Author
Created by L.kaviyarasan
________________________________________




PACKAGE.JSON

README template for your nm-project using Express:
# nm-project

A basic Node.js project using Express 5.1.0.

## Description

This is a starter project setup with Express 5.1.0 as a dependency. We can build your Node.js web application using this foundation.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
2.	Navigate into the project directory:
cd nm-project
3.	Install dependencies:
npm install
Usage
To start your Express app, create an index.js file (if not already created) with your Express server setup.
Example index.js:
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
Run the server:
node index.js
Visit http://localhost:3000 in your browser to see the app running.
Scripts
•	npm test — currently outputs an error message (no tests specified).
License
ISC

SERVER.JS
 a clear and concise README.md file tailored for your quiz app project:
# nm-project

A simple quiz API built with Node.js and Express.

## Description

This project provides a backend API for a quiz application. It serves quiz questions and evaluates user answers, returning the quiz score.

## Features

- Fetch quiz questions with options (without answers).
- Submit answers and receive a score.
- Simple REST API design.
- Serves static files from the `public` directory.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
2.	Navigate into the project folder:
cd nm-project
3.	Install dependencies:
npm install
Usage
Start the server:
node index.js
The server runs on port 3000 by default. You can change this by setting the PORT environment variable.
API Endpoints
•	GET /api/quiz
Returns a list of quiz questions with options (no answers).
•	POST /api/submit
Submit answers as JSON, e.g.:
•	{
•	  "1": "Central Processing Unit",
•	  "2": "All of the above",
•	  "3": "Queue"
•	}
Response will contain the score and total questions:
{
  "score": 3,
  "total": 11
}
Project Structure
•	index.js — main server file.
•	public/ — directory for static assets (if any).
Example
Use curl or Postman to test:
curl http://localhost:3000/api/quiz
curl -X POST http://localhost:3000/api/submit \
-H "Content-Type: application/json" \
-d '{"1":"Central Processing Unit","2":"All of the above"}'
License
ISC


<img width="1600" height="900" alt="nm project 1 screenshot" src="https://github.com/user-attachments/assets/e8d953ba-afc1-4ff2-bfb4-6fa14ce7ff64" />


<img width="1600" height="852" alt="nm project 2 screnshot" src="https://github.com/user-attachments/assets/832b55fc-5260-406e-a37f-9af3061ec616" />
<img width="1600" height="852" alt="nm project 3 screenshot" src="https://github.com/user-attachments/assets/cd2c2803-c25c-435a-9487-98209ad39dbc" />
