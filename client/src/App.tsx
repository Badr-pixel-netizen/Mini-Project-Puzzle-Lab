import { Link, Route, Routes } from "react-router-dom";
import PuzzlesSection from "./components/PuzzlesSection";
import HowToPlayPage from "./pages/HowToPlayPage";
import PuzzlePage from "./pages/PuzzlePage";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />

      <main className="main-layout">
        <Routes>
          <Route path="/" element={<PuzzlesSection />} />
          <Route path="/puzzles/:puzzleId" element={<PuzzlePage />} />
          <Route path="/how-to-play" element={<HowToPlayPage />} />
          <Route
            path="*"
            element={
              <section className="panel">
                <h1>Page not found</h1>
                <Link to="/">Back to puzzles</Link>
              </section>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
