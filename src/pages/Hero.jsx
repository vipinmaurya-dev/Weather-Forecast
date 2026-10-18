import { useEffect, useState } from "react";
import "../styles/Hero.css";

function Hero({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForcastData] = useState([]);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const city_name = city;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((error) => console.log(error));
  }, [city]);

  useEffect(() => {
    const city_name = "kanpur";

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${API_KEY}&units=metric`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setForcastData(data.list || []);
      })
      .catch((error) => console.log(error));
  }, [city]);
  console.log(weatherData?.name);

  const dailyForecast = forecastData
    .filter((item) => item.dt_txt.includes("12:00:00"))
    .slice(0, 5);

  const getWeatherEmoji = (icon) => {
    if (icon.startsWith("01")) {
      return icon.endsWith("n") ? "🌙" : "☀️";
    }
    if (icon.startsWith("02")) return "🌤️";
    if (icon.startsWith("03")) return "☁️";
    if (icon.startsWith("04")) return "🌥️";
    if (icon.startsWith("09")) return "🌧️";
    if (icon.startsWith("10")) return "🌦️";
    if (icon.startsWith("11")) return "⛈️";
    if (icon.startsWith("13")) return "❄️";
    if (icon.startsWith("50")) return "🌫️";

    return "🌡️";
  };
  return (
    <>
      <div className="hero-main">
        <div className="left-content">
          <div className="weather-hero">
            <div>
              <p>{weatherData?.name}</p>
              <h1>
                {weatherData?.main?.temp != null
                  ? `${Math.round(weatherData.main.temp)}°C`
                  : "--°C"}
              </h1>
              <span>{weatherData?.weather?.[0]?.description}</span>
            </div>

            <div className="weather-icon">
              {getWeatherEmoji(weatherData?.weather?.[0]?.icon || "")}
            </div>
          </div>

          <section className="details-section">
            <div className="details-cards">
              <div className="detail-card">
                <span>💧</span>
                <p>Humidity</p>
                <h3>{weatherData?.main?.humidity ?? "--"}% </h3>
              </div>

              <div className="detail-card">
                <span>💨</span>
                <p>Wind Speed</p>
                <h3>{weatherData?.wind?.speed ?? "--"} Km/h</h3>
              </div>

              <div className="detail-card">
                <span>🌡️</span>
                <p>Feels Like</p>
                <h3>
                  {weatherData?.main?.feels_like
                    ? `${weatherData.main.feels_like}`
                    : "--"}
                  °C
                </h3>
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
              <h3>
                {weatherData?.main?.temp_max != null
                  ? `${weatherData.main.temp_max}`
                  : "--"}
                °C{" "}
              </h3>
            </div>
          </div>

          <hr />

          <div className="temp">
            <div className="icon">
              <span>🌡️</span>
              <small>Min Temperature</small>
            </div>

            <div className="value">
              <h3>
                {weatherData?.main?.temp_min != null
                  ? `${weatherData.main.temp_min}`
                  : "--"}
                °C{" "}
              </h3>
            </div>
          </div>

          <hr />

          {/* Cloudiness */}
          <div className="temp">
            <div className="icon">
              <span>☁️</span>
              <small>Cloudiness</small>
            </div>

            <div className="value">
              <h3>
                {weatherData?.clouds?.all != null
                  ? `${weatherData.clouds.all}%`
                  : "--"}
              </h3>
            </div>
          </div>

          <hr />

          {/* Sunrise */}
          <div className="temp">
            <div className="icon">
              <span>🌅</span>
              <small>Sunrise</small>
            </div>

            <div className="value">
              <h3>
                {weatherData?.sys?.sunrise
                  ? new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                      "en-IN",
                      { hour: "2-digit", minute: "2-digit" },
                    )
                  : "--"}
              </h3>
            </div>
          </div>

          <hr />

          {/* Sunset */}
          <div className="temp">
            <div className="icon">
              <span>🌇</span>
              <small>Sunset</small>
            </div>

            <div className="value">
              <h3>
                {weatherData?.sys?.sunset
                  ? new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                      "en-IN",
                      { hour: "2-digit", minute: "2-digit" },
                    )
                  : "--"}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <section className="forecast-section">
        <div className="forecast-cards">
          {dailyForecast.map((item) => {
            console.log("Weather icon:", item.weather?.[0]?.icon);
            console.log("Weather description:", item.weather?.[0]?.description);

            return (
              <div className="forecast-card" key={item.dt}>
                <p>
                  {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </p>
                <span className="forecast-icon">
                  {getWeatherEmoji(item.weather?.[0]?.icon || "")}
                </span>

                <h3>{Math.round(item.main.temp)}°C</h3>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Hero;
