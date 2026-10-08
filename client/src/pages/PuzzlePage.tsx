import { useParams } from "react-router-dom";
import PuzzleSection from "../components/PuzzleSection";

function PuzzlePage() {
  const { puzzleId } = useParams();

  return <PuzzleSection key={puzzleId} />;
}

export default PuzzlePage;
