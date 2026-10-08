import { useEffect, useState } from "react";
import { getAllPuzzles } from "../api";
import PuzzleCard from "./PuzzleCard";
import { PuzzleSummary } from "../types";
import ErrorMessage from "./ErrorMessage";

function PuzzlesSection() {
  const [puzzles, setPuzzles] = useState<PuzzleSummary[] | null>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  async function loadPuzzles() {
    setIsLoading(true);
    setHasError(false);

    try {
      const data = await getAllPuzzles();
      setPuzzles(data);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadPuzzles();
  }, []);

  return (
    <section className="panel puzzles-panel">
      <h1>Puzzle Lab</h1>
      <p>Solve the puzzles in order.</p>

      {isLoading && <p>Loading puzzles...</p>}
      {!isLoading && hasError && <ErrorMessage onRetry={loadPuzzles} />}

      {!isLoading && !hasError && (
        <div className="puzzle-list">
          {puzzles &&
            puzzles.map((puzzle) => (
              <PuzzleCard
                key={puzzle.id}
                id={puzzle.id}
                title={puzzle.title}
                summary={puzzle.summary}
                locked={puzzle.locked}
              />
            ))}
        </div>
      )}
    </section>
  );
}

export default PuzzlesSection;
