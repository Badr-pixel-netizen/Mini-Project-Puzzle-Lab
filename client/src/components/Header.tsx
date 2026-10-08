import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <Link className="brand" to="/" aria-label="Puzzle Lab">
          <span className="brand-logo" aria-hidden="true">
            <span className="brand-word">
              <span className="brand-mark">
                <span className="element-number">15</span>P
              </span>
              <span>uzzle</span>
            </span>
            <span className="brand-word brand-word-lab">
              <span className="brand-mark">
                <span className="element-number">57</span>La
              </span>
              <span>b</span>
            </span>
          </span>
        </Link>

        <nav>
          <Link className="nav-link" to="/">
            Puzzles
          </Link>
          <Link className="nav-link" to="/how-to-play">
            How to Play
          </Link>
        </nav>
      </div>
    </header>
  );
}
