import "../styles/Hero.css";

function Hero() {
  return (
    <>
      <div className="hero-main">
        <div className="left-content">
          <div className="weather-hero">
            <div>
              <p>Prayagraj</p>
              <h1>28°C</h1>
              <span>Partly Cloudy</span>
            </div>

            <div className="weather-icon">☁️</div>
          </div>

          <section className="details-section">
            <div className="details-cards">
              <div className="detail-card">
                <span>💧</span>
                <p>Humidity</p>
                <h3>65%</h3>
              </div>

              <div className="detail-card">
                <span>💨</span>
                <p>Wind Speed</p>
                <h3>12 km/h</h3>
              </div>

              <div className="detail-card">
                <span>🌡️</span>
                <p>Feels Like</p>
                <h3>30°C</h3>
              </div>
            </div>
          </section>
        </div>

        <div className="right-content">
          <h3>Today's Details</h3>
          <hr />

          <div className="temp">
            <div className="icon">
              <span>🌡️</span>
              <small>Max Temperature</small>
            </div>

            <div className="value">
              <h3>32 </h3>
            </div>
          </div>

          <hr />

          <div className="temp">
            <div className="icon">
              <span>🌡️</span>
              <small>Min Temperature</small>
            </div>

            <div className="value">
              <h3>30 </h3>
            </div>
          </div>

          <hr />
        </div>
      </div>

      <section className="forecast-section">
        <div className="forecast-cards">
          <div className="forecast-card">
            <p>Today</p>
            <span>☀️</span>
            <h3>28°C</h3>
          </div>

          <div className="forecast-card">
            <p>Tue</p>
            <span>🌤️</span>
            <h3>29°C</h3>
          </div>

          <div className="forecast-card">
            <p>Wed</p>
            <span>☁️</span>
            <h3>27°C</h3>
          </div>

          <div className="forecast-card">
            <p>Thu</p>
            <span>🌧️</span>
            <h3>25°C</h3>
          </div>

          <div className="forecast-card">
            <p>Fri</p>
            <span>☀️</span>
            <h3>30°C</h3>
          </div>

          <div className="forecast-card">
            <p>Sat</p>
            <span>🌤️</span>
            <h3>31°C</h3>
          </div>

          <div className="forecast-card">
            <p>Sun</p>
            <span>☁️</span>
            <h3>28°C</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
