# Backend verification

Verified on 4 October 2026 (Asia/Damascus). Tested the local implementation on `member-majed`, based on `a1fef8b`, with uncommitted Task 01 changes. This records executed checks, not a teammate submission or a merged commit.

## Setup

Final clean-source copy verification also passed: offline locked installation in both folders, client build/lint, all server syntax checks, backend startup, and HTTP smoke checks for all four endpoints. The temporary copy was removed after verification.

- Locked installation: `cd server && npm ci` — passed (69 packages; no audit findings).
- Startup: `npm start` — passed on the default port 3001.
- Independent checks used a separate instance of the real `server/index.js` on port 3197. That instance was stopped after testing.
- JavaScript syntax checks passed for `index.js`, `data.js`, `store.js`, `routes/puzzles.js`, and `controllers/puzzles.js`.

## Endpoint checks

All four endpoints were tested independently over HTTP. Expected status, response fields, original content, and progress before/after were checked. All **92 checks passed**.

| # | Check | Result |
| --- | --- | --- |
| 1 | collection has exactly three original public summaries | Passed |
| 2 | fresh puzzle 1: original story/current stage and no spoilers | Passed |
| 3 | fresh puzzle 2: original story/current stage and no spoilers | Passed |
| 4 | fresh puzzle 3: original story/current stage and no spoilers | Passed |
| 5 | malformed path abc | Passed |
| 6 | malformed path 1abc | Passed |
| 7 | malformed path 0 | Passed |
| 8 | malformed path -1 | Passed |
| 9 | malformed path 1.5 | Passed |
| 10 | malformed path 01 | Passed |
| 11 | malformed path 9007199254740992 | Passed |
| 12 | missing puzzle | Passed |
| 13 | missing body | Passed |
| 14 | null body | Passed |
| 15 | array body | Passed |
| 16 | empty object | Passed |
| 17 | string stage | Passed |
| 18 | fraction stage | Passed |
| 19 | zero stage | Passed |
| 20 | missing answer | Passed |
| 21 | numeric answer | Passed |
| 22 | empty answer | Passed |
| 23 | whitespace answer | Passed |
| 24 | hint missing body | Passed |
| 25 | hint null body | Passed |
| 26 | hint array body | Passed |
| 27 | hint missing stage | Passed |
| 28 | hint string stage | Passed |
| 29 | hint fraction stage | Passed |
| 30 | malformed JSON | Passed |
| 31 | primitive JSON | Passed |
| 32 | POST nonexistent stage before conflicts | Passed |
| 33 | POST existing future stage | Passed |
| 34 | POST nonexistent puzzle | Passed |
| 35 | PATCH nonexistent stage before conflicts | Passed |
| 36 | PATCH existing future stage | Passed |
| 37 | PATCH nonexistent puzzle | Passed |
| 38 | wrong answer is 200 and changes no progress/hints | Passed |
| 39 | puzzle 1 stage 1 hint 0 ordered and retained | Passed |
| 40 | puzzle 1 stage 1 hint 1 ordered and retained | Passed |
| 41 | puzzle 1 stage 1 hint exhaustion and wrong answer preserve state | Passed |
| 42 | puzzle 1 stage 1 correct answer advances once | Passed |
| 43 | puzzle 1 stage 2 hint 0 ordered and retained | Passed |
| 44 | puzzle 1 stage 2 hint 1 ordered and retained | Passed |
| 45 | puzzle 1 stage 2 hint exhaustion and wrong answer preserve state | Passed |
| 46 | puzzle 1 stage 2 correct answer advances once | Passed |
| 47 | puzzle 1 stage 3 hint 0 ordered and retained | Passed |
| 48 | puzzle 1 stage 3 hint 1 ordered and retained | Passed |
| 49 | puzzle 1 stage 3 hint exhaustion and wrong answer preserve state | Passed |
| 50 | puzzle 1 stage 3 correct answer advances once | Passed |
| 51 | solved puzzle 1 rejects answers/hints but GET retains ending | Passed |
| 52 | puzzle 2 stage 1 hint 0 ordered and retained | Passed |
| 53 | puzzle 2 stage 1 hint 1 ordered and retained | Passed |
| 54 | puzzle 2 stage 1 hint exhaustion and wrong answer preserve state | Passed |
| 55 | puzzle 2 stage 1 correct answer advances once | Passed |
| 56 | puzzle 2 stage 2 hint 0 ordered and retained | Passed |
| 57 | puzzle 2 stage 2 hint 1 ordered and retained | Passed |
| 58 | puzzle 2 stage 2 hint exhaustion and wrong answer preserve state | Passed |
| 59 | puzzle 2 stage 2 correct answer advances once | Passed |
| 60 | puzzle 2 stage 3 hint 0 ordered and retained | Passed |
| 61 | puzzle 2 stage 3 hint 1 ordered and retained | Passed |
| 62 | puzzle 2 stage 3 hint exhaustion and wrong answer preserve state | Passed |
| 63 | puzzle 2 stage 3 correct answer advances once | Passed |
| 64 | solved puzzle 2 rejects answers/hints but GET retains ending | Passed |
| 65 | puzzle 3 stage 1 hint 0 ordered and retained | Passed |
| 66 | puzzle 3 stage 1 hint 1 ordered and retained | Passed |
| 67 | puzzle 3 stage 1 hint exhaustion and wrong answer preserve state | Passed |
| 68 | puzzle 3 stage 1 correct answer advances once | Passed |
| 69 | puzzle 3 stage 2 hint 0 ordered and retained | Passed |
| 70 | puzzle 3 stage 2 hint 1 ordered and retained | Passed |
| 71 | puzzle 3 stage 2 hint exhaustion and wrong answer preserve state | Passed |
| 72 | puzzle 3 stage 2 correct answer advances once | Passed |
| 73 | puzzle 3 stage 3 hint 0 ordered and retained | Passed |
| 74 | puzzle 3 stage 3 hint 1 ordered and retained | Passed |
| 75 | puzzle 3 stage 3 hint exhaustion and wrong answer preserve state | Passed |
| 76 | puzzle 3 stage 3 correct answer advances once | Passed |
| 77 | solved puzzle 3 rejects answers/hints but GET retains ending | Passed |
| 78 | server restart resets every puzzle independently | Passed |
| 79 | two independent requests see the same hint progress | Passed |
| 80 | concurrent repeated correct answer advances only once | Passed |
| 81 | accepted variant puzzle 1 stage 1: 3556 | Passed |
| 82 | accepted variant puzzle 1 stage 2: heisenberg | Passed |
| 83 | accepted variant puzzle 1 stage 3: 2145 | Passed |
| 84 | accepted variant puzzle 2 stage 1: 3200 | Passed |
| 85 | accepted variant puzzle 2 stage 2: phoenix | Passed |
| 86 | accepted variant puzzle 2 stage 3: 2835 | Passed |
| 87 | accepted variant puzzle 3 stage 1: spire | Passed |
| 88 | accepted variant puzzle 3 stage 1: twin rock spire | Passed |
| 89 | accepted variant puzzle 3 stage 1: twin spire | Passed |
| 90 | accepted variant puzzle 3 stage 1: spires | Passed |
| 91 | accepted variant puzzle 3 stage 2: acetone | Passed |
| 92 | accepted variant puzzle 3 stage 3: purity | Passed |

## Reproduce important cases

Restart `npm start` before a sequence that requires fresh progress. Use a second terminal:

```sh
curl -i http://localhost:3001/api/getAllPuzzles
curl -i http://localhost:3001/api/getPuzzle/1
curl -i http://localhost:3001/api/getPuzzle/abc
curl -i http://localhost:3001/api/getPuzzle/999
curl -i -X POST http://localhost:3001/api/submitAnswer/1 -H 'Content-Type: application/json' -d '{"stageId":1,"answer":"wrong"}'
curl -i -X POST http://localhost:3001/api/submitAnswer/1 -H 'Content-Type: application/json' -d '{"stageId":"1","answer":"3556"}'
curl -i -X PATCH http://localhost:3001/api/requestStageHint/1 -H 'Content-Type: application/json' -d '{"stageId":1}'
```

Expected: collection/detail `200`; malformed path `400`; unknown puzzle `404`; wrong answer `200` with `correct: false`; string stage ID `400`; hint `200` with ID 0. Repeat the hint request: ID 1, then `409`. GET detail retains exactly those revealed hints.

```sh
curl -i -X POST http://localhost:3001/api/submitAnswer/1 -H 'Content-Type: application/json' -d '{"stageId":1,"answer":" 3556 "}'
curl -i -X POST http://localhost:3001/api/submitAnswer/1 -H 'Content-Type: application/json' -d '{"stageId":1,"answer":"3556"}'
curl -i -X POST http://localhost:3001/api/submitAnswer/1 -H 'Content-Type: application/json' -d '{"stageId":2,"answer":"HEISENBERG"}'
curl -i -X POST http://localhost:3001/api/submitAnswer/1 -H 'Content-Type: application/json' -d '{"stageId":3,"answer":"2145"}'
curl -i http://localhost:3001/api/getPuzzle/1
```

Expected: first answer advances once; repeated stage 1 returns `409`; stage 2 advances; stage 3 completes; detail retains the exact final reveal. Further valid answer/hint mutations return `409`. A nonexistent stage remains `404` even on a solved puzzle.

## State and privacy checks

- Rejected requests, wrong answers, and GETs did not mutate progress.
- Ordered hints, stage/puzzle hint isolation, shared progress across independent clients, and restart resets passed.
- Concurrent duplicate correct answers produced one `200` and one `409`, advancing only once.
- All accepted answer variants passed, including trim/case normalization. No seed text was changed.
- Collection exposed only selection fields. Detail never exposed answer keys, unused hints, future stages, or a premature ending.

## Issues

No unresolved backend defect was found in this verification. Tests cover the simple shared-memory demo contract; no persistence, authentication, or reset endpoint is implemented.

## Results

92 passed, 0 failed, 0 blocked. Browser integration evidence is in `client/verification.md`. Re-run after backend changes; this report describes the tested working tree, not future edits.
