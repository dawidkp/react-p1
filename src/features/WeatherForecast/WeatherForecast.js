import React, { useEffect, useState } from 'react';

import './WeatherForecast.scss';

function WeatherForecast() {
 
  const [weather,setWeather] = useState([]);

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
          <h2>{weather?.daily?.time[0]}</h2>
          <h2>{weather.latitude}</h2>
          <h2>{weather?.daily?.temperature_2m_max[0]}℃</h2>
        </div>

        <div className="weather__box">
          <h2>Feels like: {weather?.daily?.apparent_temperature_max[0]}℃</h2>
          <h2>Rainfall: {weather?.daily?.rain_sum[0]} mm</h2>
          <h2>Wind: {weather?.daily?.windspeed_10m_max[0]} km/h</h2>
          <h2>Sunrise: {weather?.daily?.sunrise[0].substring(11)} AM</h2>
          <h2>Sunset: {weather?.daily?.sunset[0].substring(11)} PM</h2>
        </div>
      </div>

      <div className="weather__5days__box">
        <div className="weather__little__box">
          <h3>{weather?.daily?.time[1]}</h3>
          <h3>{weather?.daily?.temperature_2m_max[1]}℃</h3>
          <h3>Rainfall: {weather?.daily?.rain_sum[1]} mm</h3>
        </div>
        <div className="weather__little__box">
        <h3>{weather?.daily?.time[2]}</h3>
          <h3>{weather?.daily?.temperature_2m_max[2]}℃</h3>
          <h3>Rainfall: {weather?.daily?.rain_sum[2]} mm</h3>
        </div>
        <div className="weather__little__box">
        <h3>{weather?.daily?.time[3]}</h3>
          <h3>{weather?.daily?.temperature_2m_max[3]}℃</h3>
          <h3>Rainfall: {weather?.daily?.rain_sum[3]} mm</h3>
        </div>
        <div className="weather__little__box">
        <h3>{weather?.daily?.time[4]}</h3>
          <h3>{weather?.daily?.temperature_2m_max[4]}℃</h3>
          <h3>Rainfall: {weather?.daily?.rain_sum[4]} mm</h3>
        </div>
        <div className="weather__little__box">
        <h3>{weather?.daily?.time[5]}</h3>
          <h3>{weather?.daily?.temperature_2m_max[5]}℃</h3>
          <h3>Rainfall: {weather?.daily?.rain_sum[5]} mm</h3>
        </div>
      </div>

    </section>
  );
}

export default WeatherForecast;
