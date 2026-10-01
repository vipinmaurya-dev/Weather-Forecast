import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./pages/Hero";

function App() {
  return (
    <>
      <Header />
      <div className="main-layout">
        <Sidebar />

        <main className="content">
          <Hero />
        </main>
      </div>
    </>
  );
}

export default App;
