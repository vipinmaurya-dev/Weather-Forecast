import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./pages/Hero";

function App() {
  const [city, setCity] = useState("Fatehpur");
  return (
    <>
      <Header city={city} setCity={setCity} />
      <div className="main-layout">
        {/* <Sidebar /> */}

        <main className="content">
          <Hero city={city} />
        </main>
      </div>
    </>
  );
}

export default App;
