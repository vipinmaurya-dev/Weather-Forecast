import { CloudSun, Moon, Search, Sun } from "lucide-react";
import "../styles/Header.css";
import { useState } from "react";

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

      <div className="search-box">
        <input type="text" name="" id="" placeholder="Search city..." />

        <button type="button">
          <Search />
        </button>
      </div>

      <div className="header-actions">
        <button
          type="button"
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun size={30} /> : <Moon size={30} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
