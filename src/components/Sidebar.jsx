
import "../styles/Sidebar.css";
import { Heart, Home, Search, Settings, Sun } from "lucide-react";

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
       
        <nav className="sidebar-nav">
          <p className="nav-item active">
            <Home size={20} /> Home
          </p>

          <p className="nav-item">
            <Heart size={20} /> Favourites
          </p>

          <p className="nav-item">
            <Search size={20} /> Search
          </p>

          <p className="nav-item">
            <Settings size={20} /> Setting
          </p>
        </nav>

        <div className="bottom-card">
          <h3>Good Weather</h3>
          <p>Better Mood !</p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
