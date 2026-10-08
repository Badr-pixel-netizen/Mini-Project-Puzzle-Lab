import { Link } from "react-router-dom";

interface PuzzleCardProps {
  id: number;
  title: string;
  summary: string;
  locked: boolean;
}

function PuzzleCard({ id, title, summary, locked }: PuzzleCardProps) {
  let difficulty = "Easy";
  if (id === 2) difficulty = "Medium";
  if (id === 3) difficulty = "Hard";

  return (
    <article className={locked ? "puzzle-card puzzle-card-locked" : "puzzle-card"}>
      <div className="puzzle-card-meta">
        <p className="eyebrow">Puzzle {id}</p>
        <span className="difficulty-label">{difficulty}</span>
      </div>
      <h2 className="puzzle-card-title">{title}</h2>
      <p className="puzzle-card-summary">{summary}</p>
      <div className="puzzle-card-footer">
        {locked ? (
          <button className="action-button" disabled>
            Investigate · Locked
          </button>
        ) : (
          <Link className="action-button" to={`/puzzles/${id}`}>
            Investigate <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
    </article>
  );
}

export default PuzzleCard;
