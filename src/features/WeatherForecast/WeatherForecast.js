import React, { useEffect, useState } from 'react';


import './WeatherForecast.scss';

function WeatherForecast() {
 
  const [weather,setWeather] = useState([]);

  function fetchWeatherData() {
    return fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max&timezone=auto")
    .then(response => response.json())
    .then(data => setWeather(data))
  }

  useEffect(() => {
    fetchWeatherData()
  }, [])


  return (
    <section className="weather__forecast">
      <div className="weather__box">
        <h1>5 days forecast</h1>
        <div>
          <h2>{weather?.daily?.time[0]}</h2>
          <h2>{weather.latitude}</h2>
          <h2>{weather?.daily?.temperature_2m_max[0]}℃</h2>
        </div>
      </div>
    </section>
  );
}

export default WeatherForecast;
