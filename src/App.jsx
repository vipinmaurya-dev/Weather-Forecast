import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./pages/Hero";

function App() {
  const [city, setCity] = useState("Fatehpur");
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <div className={darkMode ? "" : "light-mode"}>
        <Header
          city={city}
          setCity={setCity}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <div className="main-layout">
          {/* <Sidebar /> */}

          <main className="content">
            <Hero city={city} darkMode={darkMode} />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
