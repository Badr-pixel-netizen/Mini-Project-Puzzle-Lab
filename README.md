# Puzzle Lab

Puzzle Lab is an interactive mystery game and full-stack web app designed as a portfolio project to showcase my ability to build a polished user experience, connect a frontend to a backend API, and create a game loop with progression, clues, and puzzle-solving logic.

The project was built around the idea of a small investigative experience: the player works through a series of puzzles, reads story-driven clues, and unlocks new challenges as they progress. It combines storytelling, UI design, and backend logic in a compact but complete application.

## Why I built this project

This project reflects my interest in building engaging, problem-solving web experiences with real-world engineering patterns. It is designed to demonstrate:

- Frontend development with React and TypeScript
- API-driven architecture with Express
- State management and user interaction flow
- Puzzle progression and validation logic
- A portfolio-ready project that feels complete and interactive

I created it as a personal GitHub project to highlight both my creative thinking and my technical implementation skills.

## Project overview

Players start on a puzzle board, choose an available challenge, and work through a sequence of clues and questions to solve each stage. As they complete tasks correctly, they unlock the next part of the experience. The app includes:

- A landing page with puzzle cards
- Puzzle progression logic with locked and unlocked levels
- Hint system for players who need guidance
- A story-focused interface with clue-based gameplay
- Frontend routing and a clean multi-page experience
- A backend API that serves puzzle data and validates answers

## Tech stack

- Frontend: React, Vite, TypeScript
- Backend: Node.js, Express
- Styling: Custom CSS in the client app
- Data flow: REST API between client and server

## Features

- Interactive puzzle selection and gameplay flow
- Hint requests and answer submission handling
- Locked level progression to encourage sequential solving
- Reusable UI components for the game interface
- Clean separation between presentation and API logic
- Scalable structure for adding more puzzles in the future

## How it works

The app is split into two main parts:

1. Client application
   - Built with React
   - Displays the puzzle list, game flow, instructions, and UI states
   - Communicates with the server API for puzzle data and validation

2. Server API
   - Built with Express
   - Stores puzzle data and game state in memory
   - Provides endpoints for retrieving puzzles, clues, hints, and answer validation

## Project structure

```text
Mini-Project-Puzzle-Lab/
├── client/
│   ├── src/
│   ├── package.json
│   ├── vite.config.ts
│   └── index.html
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── data.js
│   ├── index.js
│   ├── store.js
│   └── package.json
├── postman/
├── README.md
└── .gitignore
```

## Getting started

### 1. Install the server dependencies

```bash
cd server
npm install
```

### 2. Start the backend

```bash
npm start
```

The server runs on port 3001 by default.

### 3. Install the frontend dependencies

```bash
cd ../client
npm install
```

### 4. Run the frontend

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal to view the app.

## Portfolio note

This project represents a practical example of my ability to develop a small but complete product from concept to working prototype. It is intentionally designed to be easy to understand, visually engaging, and technically solid enough to showcase my frontend and backend development skills in a GitHub portfolio.

I see this as a strong example of how I approach:

- clean user-facing design
- modular component architecture
- structured API development
- building interactive experiences with logic and progression

## Future improvements

Some ideas for expanding the project include:

- adding more puzzles and story chapters
- introducing persistent saved progress
- adding sound effects or richer animations
- improving the game UI with a more premium design system
- adding authentication or leaderboard features

## License

This project is created for personal portfolio use and learning purposes.
