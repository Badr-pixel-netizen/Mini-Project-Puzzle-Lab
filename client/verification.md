# Player journey verification

Verified on 4 October 2026 (Asia/Damascus), using the real local Express API and Vite frontend. Tested `member-majed`, based on `a1fef8b`, with uncommitted Task 01 changes. Implementation/verification was completed with assistant support; this does not claim member authorship or a merged submission.

## Setup

Final clean-source copy verification also passed: offline locked installation in both folders, client build/lint, all server syntax checks, backend startup, and HTTP smoke checks for all four endpoints. The temporary copy was removed after verification.

- `cd server && npm ci`, then `npm start` on 3001: passed.
- `cd client && npm ci`, `npm run build`, and `npm run lint`: passed for the shared foundation; build/lint also passed after all page implementations were added.
- Frontend: `npm run dev -- --host 127.0.0.1 --port 5181 --strictPort`.
- Browser: Codex in-app browser at `http://127.0.0.1:5181/`, with real requests through the Vite proxy.

## Puzzle runs

| Puzzle | Executed journey | Result |
| --- | --- | --- |
| The Heisenberg Formula | Unfinished result → Continue → wrong answer → both hints → reload retains hints → Enter submits stage 1 → case-insensitive stage 2 → final stage → exact reveal → reload result | Passed |
| The Los Pollos Logistics | Selection → original story and equal-weight clue → all three stages → automatic result navigation and exact reveal | Passed |
| The Desert Cache Protocol | Selection → listed landmark spelling variant → solvent stage → six-letter cipher stage → automatic result navigation and exact reveal | Passed |

All nine stages were completed through the actual interface. Server endpoint checks separately verified both hints, exhaustion, wrong answers, and every accepted variant for all stages.

## Recovery checks

| Check | Observed result |
| --- | --- |
| Empty answer | Submit disabled; no request |
| Pending answer | Answer and hint actions disabled together |
| Wrong answer | Same stage; answer retained; readable feedback |
| Correct answer | Server next stage; input cleared; new stage hints unused |
| First hint | Hint shown; next-hint action remains available |
| Second hint/exhaustion | Both hints shown; disabled All hints revealed control |
| Reload | Revealed hints and stage progress retained |
| Unfinished result URL | Continue message; no ending |
| Completed result/reload | Original ending from solved server detail |
| Malformed `/puzzles/abc` | Invalid-address message and return link |
| Missing `/puzzles/999` | Server 404 message, Retry, and return link |
| Unknown `/missing-page` | Not Found message and recovery link |
| Backend stopped during collection load | Error shown; Retry recovers after restart |
| Backend stopped during answer request | Input retained; both controls released; no fake advancement |
| Shared-progress conflict | A second API client advanced the stage; stale browser POST received 409, refreshed stage, and cleared stale input |
| Server restart | Reopened stage 1 with unused hints |
| Browser back/forward | Selection/instructions navigation remained functional |
| Empty collection response | Empty message; no fake cards |
| Solved response missing ending | Error with Retry; no generic success/reveal |

Empty-collection and missing-ending checks used a temporary isolated HTTP fixture. It was stopped; the real backend was restored. No fixture is imported by the product.

## Layout checks

- Dark green, cream text, muted yellow actions, system font, and agreed classes verified visually.
- Requested browser viewport overrides: 1200×900 and 375×812. The browser reported effective content widths 923 and 288 respectively.
- Wide gameplay used a row; narrow gameplay stacked into a column. Narrow document width was 277 versus reported viewport width 288: no horizontal overflow.
- Long story/clue text remained in normal scrolling flow. Keyboard Enter submission worked; Tab reached a control with a visible solid focus outline. Input has an accessible label; feedback is expressed in words and color.
- Temporary viewport override was reset after testing. Screenshots remain private; they are not production assets.

## Issues

No unresolved gameplay/backend defect was found in the executed flows. React Router emitted its two v7 future-flag advisory warnings; no unhandled application errors occurred during successful play. Expected failed-request messages occurred during deliberate offline/404/409 tests. No claims of a browser support matrix or external deployment are made.

## Results

All three complete journeys, listed recovery cases, and responsive/keyboard checks passed. Client build/lint and server syntax checks passed. API helpers additionally passed 40 isolated response-contract checks; backend endpoints passed 92 independent live checks. The only seed-file change is its named ES-module export.
