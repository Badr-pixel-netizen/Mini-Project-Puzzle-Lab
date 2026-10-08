import { Link } from "react-router-dom";

function HowToPlayPage() {
  return (
    <section className="panel how-to-play-page">
      <p className="eyebrow">Before you investigate</p>
      <h1>How to Play</h1>
      <p className="intro">Read the evidence, follow the clues, and work through the three puzzles in order.</p>
      <ol className="instruction-list">
        <li className="instruction-step">Start with the first puzzle.</li>
        <li className="instruction-step">Read the story, question, and clues.</li>
        <li className="instruction-step">Submit your answer to complete each stage.</li>
        <li className="instruction-step">Request a hint when you need help.</li>
        <li className="instruction-step">Complete the puzzle to unlock the next one.</li>
      </ol>
      <Link className="action-button" to="/">Start investigating →</Link>
    </section>
  );
}

export default HowToPlayPage;
