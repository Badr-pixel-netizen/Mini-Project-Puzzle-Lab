import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPuzzleById, submitAnswer, requestHints } from "../api";
import { SubmitAnswerForm } from "./SubmitAnswerForm";
import { PuzzleDetail } from "../types";
import ErrorMessage from "./ErrorMessage";

function PuzzleSection() {
  const { puzzleId } = useParams();
  const [puzzle, setPuzzle] = useState<PuzzleDetail | null>(null);
  const [resultMessage, setResultMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [hintError, setHintError] = useState("");

  async function SubmitAnswer(answer: string): Promise<boolean> {
    if (!puzzle?.currentStage) return false;

    setResultMessage("");
    setHintError("");
    try {
      const result = await submitAnswer(
        Number(puzzleId),
        puzzle.currentStage.id,
        answer,
      );
      setResultMessage(result.correct ? "Correct Answer" : "Wrong Answer");
      setPuzzle(result.puzzle);
      return result.correct;
    } catch (error) {
      setResultMessage("Could not submit your answer. Please try again.");
      console.log(error);
      return false;
    }
  }

  async function loadPuzzle(id: number) {
    setIsLoading(true);
    setHasError(false);

    try {
      const data = await getPuzzleById(id);
      setPuzzle(data);
    } catch (error) {
      setHasError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function RequestHints() {
    if (!puzzle?.currentStage || puzzle.currentStage.hintsRemaining === 0)
      return;
    setHintError("");
    try {
      const result = await requestHints(puzzle.id, puzzle.currentStage.id);
      setPuzzle(result.puzzle);
    } catch (error) {
      setHintError("Could not reveal a hint. Please try again.");
      console.log(error);
    }
  }

  useEffect(() => {
    loadPuzzle(Number(puzzleId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className={puzzle?.solved ? "panel result-page" : "panel puzzle-panel"}
      aria-busy={isLoading}
    >
      <Link className="back-link" to="/">
        Back to puzzles
      </Link>

      {isLoading && <p>Loading puzzle...</p>}

      {!isLoading && hasError && (
        <ErrorMessage onRetry={() => loadPuzzle(Number(puzzleId))} />
      )}

      {!isLoading &&
        !hasError &&
        puzzle &&
        !puzzle.solved &&
        puzzle.currentStage && (
          <>
            <p className="eyebrow">Puzzle {puzzle.id}</p>
            <h1>{puzzle.title}</h1>
            <p className="puzzle-story">{puzzle.story}</p>

            <div className="gameplay-layout">
              <div className="gameplay-main">
                <div className="stage-heading">
                  <p className="eyebrow">
                    Stage {puzzle.currentStage.id} of {puzzle.totalStages}
                  </p>
                  <h2>{puzzle.currentStage.title}</h2>
                  <p className="stage-question">
                    {puzzle.currentStage.question}
                  </p>
                </div>

                <ol className="clue-list">
                  {puzzle.currentStage.clues.map((clue, index) => (
                    <li className="clue-card" key={index}>
                      <p className="clue-card-title">Clue {index + 1}</p>
                      <p className="clue-card-text">{clue}</p>
                    </li>
                  ))}
                </ol>

                <SubmitAnswerForm
                  key={puzzle.currentStage.id}
                  onSubmit={SubmitAnswer}
                />
                {resultMessage && (
                  <p
                    className={
                      resultMessage === "Correct Answer"
                        ? "answer-feedback success"
                        : "answer-feedback error"
                    }
                    role="status"
                  >
                    {resultMessage}
                  </p>
                )}
              </div>

              <aside className="hint-panel">
                <p className="eyebrow">A nudge in the right direction</p>
                <h2>Stage hints</h2>
                <p className="hint-note">
                  {puzzle.currentStage.hintsRemaining} hints remaining for this
                  stage.
                </p>
                {puzzle.currentStage.revealedHints.length === 0 && (
                  <p className="hint-note">
                    Need another angle? Reveal one hint at a time.
                  </p>
                )}
                <ol className="hint-list">
                  {puzzle.currentStage.revealedHints.map((hint) => (
                    <li key={hint.hintId}>{hint.hint}</li>
                  ))}
                </ol>
                <button
                  className="action-button secondary"
                  onClick={RequestHints}
                  disabled={puzzle.currentStage.hintsRemaining === 0}
                >
                  {"Reveal a hint"}
                </button>
                {hintError && (
                  <p className="message error" role="status">
                    {hintError}
                  </p>
                )}
              </aside>
            </div>
          </>
        )}

      {!isLoading && !hasError && puzzle?.solved && (
        <>
          <p className="eyebrow">Puzzle {puzzle.id} complete</p>
          <p className="case-closed">Case closed</p>
          <h1>{puzzle.title}</h1>
          <p className="result-intro">
            All {puzzle.totalStages} stages solved. The final reveal is yours.
          </p>
          <p className="result-reveal">{puzzle.finalReveal}</p>
          {puzzle.id < 3 ? (
            <Link className="action-button" to={`/puzzles/${puzzle.id + 1}`}>
              Next puzzle →
            </Link>
          ) : (
            <Link className="action-button" to="/">
              Back to home →
            </Link>
          )}
        </>
      )}
    </section>
  );
}

export default PuzzleSection;
