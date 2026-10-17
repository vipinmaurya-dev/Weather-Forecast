import { CloudSun, Moon, Search, Sun } from "lucide-react";
import { useState } from "react";
import "../styles/Header.css";

function Header() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <header className="header">
      <div className="header-logo">
        <span>
          <CloudSun size={30} />
        </span>

        <h2>
          Weather <span>Forecast</span>
        </h2>
      </div>

      <form className="search-box" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="city"
          id="city-search"
          placeholder="Search city..."
          aria-label="Search city"
        />

        <button type="submit" aria-label="Search">
          <Search size={20} />
        </button>
      </form>

      <div className="header-actions">
        <button
          type="button"
          className="theme-btn"
          aria-label="Toggle theme"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
