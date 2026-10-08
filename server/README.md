# Puzzle API

JavaScript ES modules and Express, following the simple startup, route, controller and in-memory store patterns in the [teacher's main/server reference](https://github.com/majedhmoud/b4f-cohort8-salamiyah-react-node-bootcamp-2026/tree/main/server).

Run in a separate terminal:

```sh
cd server
npm install
npm start
```

Default port: `3001`. Set `PORT` in your environment or a local `.env` to change it; also update the frontend Vite proxy target. Never commit `.env`.

## Five game APIs

Every path `id` identifies a puzzle. Stage IDs are local to that puzzle.

| Method | Path | Body | Response |
| --- | --- | --- | --- |
| GET | `/api/getAllPuzzles` | None | `{ puzzles: [...] }` with IDs, titles, summaries, `locked`, `totalStages`, `completedStages`, and `solved` |
| GET | `/api/getPuzzleById/:id` | None | Current public puzzle details |
| GET | `/api/getCluesById/:id/clues` | None | Current stage's array of clue strings |
| POST | `/api/submitAnswer/:id/answers` | `{ stageId: 1, answer: "3556" }` | `{ correct, puzzle }` |
| PATCH | `/api/requestHints/:id/hint` | `{ stageId: 1 }` | `{ hintId, hint, puzzle }` |

The existing GET `/api/health`, GET `/api/getPuzzle/:id`, and POST `/api/submitAnswer/:id` remain available. The latter two use the same controllers and level checks as the canonical endpoints, preserving existing frontend calls.

```sh
curl http://localhost:3001/api/getAllPuzzles
curl http://localhost:3001/api/getPuzzleById/1
curl http://localhost:3001/api/getCluesById/1/clues
curl -X POST http://localhost:3001/api/submitAnswer/1/answers -H 'Content-Type: application/json' -d '{"stageId":1,"answer":"wrong"}'
curl -X PATCH http://localhost:3001/api/requestHints/1/hint -H 'Content-Type: application/json' -d '{"stageId":1}'
```

## Responses and validation

Public detail retains `id`, `title`, `story`, `totalStages`, `completedStages`, `solved`, and `currentStage`, and adds `locked`. An active stage contains its ID, title, question, clues, `revealedHints: [{ hintId, hint }]`, and `hintsRemaining`. A solved puzzle has `currentStage: null` and its original `finalReveal`.

A wrong answer is HTTP `200` with `correct: false` and unchanged progress. Answer success responses do not include a feedback `message`; the frontend chooses the correct/wrong text. Answer matching uses `trim().toLowerCase()` against every approved variant. `toLowerCase()` is the user-approved exception to the reference's methods.

IDs follow the reference's `Number(req.params.id)` and `find()` lookup pattern. Nonnumeric, zero or negative path IDs return `400`; unmatched positive numeric IDs, including fractional values, return `404`. Stage IDs must be positive numbers identifying an existing stage; missing, wrong-typed, zero or negative values return `400`, and unmatched positive values return `404`. The answer must be a nonempty string. The client cannot select a hint ID: Express chooses the next unused index.

Controller failures return `{ message }`: `400` invalid input, `403` locked level, `404` nonexistent puzzle/stage, and `409` solved puzzle, existing non-current stage, or exhausted hints. The clues endpoint also returns `409` after completion because there is no current stage. Express retains its default error responses for malformed JSON and unregistered routes.

## State and level order

`data.js` is unchanged; only `store.js` imports it. `puzzleProgress` is an array of records created with `map()`, using `find()` to locate records, matching the reference's array-based store style. Each record contains the current stage index, solved state, and a separate hint count for each stage.

One shared progress record per puzzle serves every visitor. Puzzle IDs define the agreed levels: puzzle 1 is available first, puzzle 2 requires puzzle 1, and puzzle 3 requires puzzles 1 and 2. Detail, clues, answers and hints all enforce these conditions. The collection supplies the lock state for frontend cards. GET requests never reset or advance progress. Browser reload retains progress; restarting Express resets stages, solved flags and hints, and relocks levels 2 and 3.

Hint IDs start at zero within their puzzle/stage. Only revealed hints and current-stage content are public. Correct answers, unused hints, future stages and unfinished endings are never returned. There are no accounts, database, persistence or reset endpoint. Frontend button disabling, route redirects and hint UI remain client work.
