import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

const Weather = () => {
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  
  useEffect(() => {
    const root = document.getElementById('root-container') || document.body;
    root.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }

    setLoading(true);
    try {
      const apikey = '66d2996df6e8d0081f4f0806f7537781';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

      const response = await fetch(url);
      const data = await response.json();
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon
      });
    } catch (error) {
      alert("City not found!");
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    search("London");
  }, []);

  return (
    <>
      <button className='theme-toggle' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className='weather'>
        <div className="search-bar">
          <input ref={inputRef} type="text" placeholder='Search' />
          <img src={search_icon} alt="" onClick={() => search(inputRef.current.value)} />
        </div>
        {loading ? (
            <div className="loader"></div>
         ) :  weatherData && (
          <>
            <img src={weatherData.icon} alt="" className='weather-icon' />
            <p className='temperature'>{weatherData.temperature}°C</p>
            <p className='location'>{weatherData.location}</p>
            <div className="weather-data">
              <div className="col">
                <img src={humidity_icon} alt="" />
                <div>
                  <p>{weatherData.humidity}</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind_icon} alt="" />
                <div>
                  <p>{weatherData.windSpeed}</p>
                  <span>Wind speed</span>
                </div>
              </div>
            </div>
            <button className="refresh-btn" onClick={() => search(weatherData.location)}>🔄 Refresh</button>
          </>
        )}
      </div>
    </>
  );
};

export default Weather;
