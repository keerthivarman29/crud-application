# crud-application
CRUD Application — React.js Frontend & Node.js Backend
 Project Overview
This project is a CRUD (Create, Read, Update, Delete) web application built using React.js for the frontend and Node.js with Express.js for the backend.
It performs basic operations such as adding, displaying, editing, deleting, and filtering user details stored in a local JSON file (sample.json).
The goal of this project is to demonstrate a full-stack implementation of a CRUD workflow — from API creation to UI integration — using modern web technologies.

Setup Steps
1. Project Structure
The project is divided into two main parts:
Backend (Server side) – Created using Node.js and Express.js
Frontend (Client side) – Created using React.js with Vite

2. Backend Setup
Create a folder named crud and open it in your terminal.
Initialize a Node.js project using npm init -y.
Install required dependencies:
express for building the server
cors to enable cross-origin access
nodemon for automatic server restarts during development
Create a file named app.js for your server logic and a sample.json file to act as a simple database.
Start the backend using the command npm run dev or node app.js.
The backend runs at http://localhost:8000
.
3. Frontend Setup
Inside the crud folder, create a new React app using Vite.
Install dependencies:
axios for making HTTP requests
react and vite (default packages)
Replace the default App.jsx and App.css files with your project files.
Run the frontend using npm run dev.
The frontend runs at http://localhost:5174
 and communicates with the backend.

4. Connecting Frontend and Backend
The backend uses CORS to allow requests from http://localhost:5174.
All data is fetched and updated using Axios through API routes (/users, /users/:id, etc.).
The frontend automatically displays updates after every operation (add, update, delete).

Tech Stack Used

Frontend
React.js – component-based UI library for building interactive user interfaces
Vite – fast modern build tool for React
Axios – for making HTTP API calls
CSS – for styling, color themes, modals, and table designs

Backend
Node.js – JavaScript runtime for server-side operations
Express.js – lightweight framework to handle routes and APIs
CORS – middleware to enable frontend-backend communication
FS (File System module) – to read/write data in sample.json

Development Tools
Nodemon – for auto-restarting the server on code changes
VS Code – code editor
GitHub – version control and project hosting

file creeation
<img width="1166" height="500" alt="Screenshot (22)" src="https://github.com/user-attachments/assets/3d220ce4-9172-486c-a2d6-09a47c1c9da2" />
app.jsx
<img width="1920" height="1080" alt="Screenshot (25)" src="https://github.com/user-attachments/assets/38ea08fd-da7e-40a8-afb2-09563b8686f7" />
app.css
<img width="1920" height="1080" alt="Screenshot (27)" src="https://github.com/user-attachments/assets/695c7b1e-96cb-43b5-be6b-321bab5f5c4e" />
client
<img width="1920" height="1080" alt="Screenshot (29)" src="https://github.com/user-attachments/assets/fa8f8e20-37d4-4a73-8e26-9ef702da60d8" />
server
<img width="1332" height="652" alt="Screenshot (18)" src="https://github.com/user-attachments/assets/2642cd89-6b03-48da-9b12-260cd33a36e8" />
crud interface
<img width="1297" height="916" alt="Screenshot (30)" src="https://github.com/user-attachments/assets/e9dd5cc0-7373-4a97-bd03-3673e5358fa9" />
add details
<img width="1659" height="872" alt="Screenshot (31)" src="https://github.com/user-attachments/assets/41115d2c-5792-460c-9ab3-0c0aeb380e6d" />
delete details
<img width="1487" height="891" alt="Screenshot (32)" src="https://github.com/user-attachments/assets/27df0e62-bfa9-4990-a29a-516aa934e106" />
update details
<img width="1682" height="727" alt="Screenshot (33)" src="https://github.com/user-attachments/assets/82d08c1a-9908-417c-ba12-018ed347f57a" />

Assumptions and Bonus Features Implemented

Assumptions
The project is intended for learning and demonstration purposes (not production-level security or performance).
Data is stored locally in sample.json, not in a real database.
The backend and frontend run on different local ports (8000 and 5174).

Bonus Features
Delete Confirmation Popup – A safety prompt appears before deleting any user.
Search Filter – Users can filter data by name or city without refreshing the page.
Dynamic Modal – The same modal is reused for both “Add” and “Edit” functionalities.
Live Updates – After every operation, the UI automatically refreshes to show the latest data.
Field Validation – Alerts when required fields are missing during add/update operations.

References & Learning Resources
Express.js Documentation(https://expressjs.com/)
React.js Official Docs(https://react.dev/)
Axios Library(https://axios-http.com/)
Vite Documentation(https://vitejs.dev/)
Node.js Official Website(https://nodejs.org/)
Nodemon Package(https://www.npmjs.com/package/nodemon)


Developed by: [KEERTHIVARMAN.NS]
GitHub Repository: []













