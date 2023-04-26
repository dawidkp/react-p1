import React, { useEffect, useState } from 'react';

import './WeatherForecast.scss';

function WeatherForecast() {
 
  const [weather,setWeather] = useState([]);
  const { daily, latitude } = weather;

  function fetchWeatherData() {
    return fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,rain_sum,windspeed_10m_max&timezone=Europe%2FBerlin")
    .then(response => response.json())
    .then(data => setWeather(data))
  }

  useEffect(() => {
    fetchWeatherData()
  }, [])

  return (
    <section className="weather">
      <h1 className="weather__header">5 days forecast</h1>

      <div className="weather__boxes">
        <div className="weather__box">
          <h2>{daily?.time[0]}</h2>
          <h2>{latitude}</h2>
          <h2>{daily?.temperature_2m_max[0]}℃</h2>
      </div>

        <div className="weather__box">
          <h2>Feels like: {daily?.apparent_temperature_max[0]}℃</h2>
          <h2>Rainfall: {daily?.rain_sum[0]} mm</h2>
          <h2>Wind: {daily?.windspeed_10m_max[0]} km/h</h2>
          <h2>Sunrise: {daily?.sunrise[0].substring(11)} AM</h2>
          <h2>Sunset: {daily?.sunset[0].substring(11)} PM</h2>
        </div>
      </div>

      <div className="weather__5days__box">
        {daily?.time.slice(2, 6).map((time, index) => (
        <div className="weather__little__box" key={index}>
        <h3>{time}</h3>
        <h3>{daily?.temperature_2m_max[index + 2]}℃</h3>
        <h3>Rainfall: {daily?.rain_sum[index + 2]} mm</h3>
      </div>
      ))}
</div>

    </section>
  );
}

export default WeatherForecast;
