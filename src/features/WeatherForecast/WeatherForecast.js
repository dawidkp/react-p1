import React from 'react';

import './WeatherForecast.scss';

function WeatherForecast() {
  const now = new Date();
  const currentDate = `${now.getDate()}.0${now.getMonth()+1}.${now.getFullYear()}`  

  return (
    <section className="weather__forecast">
      <div className="weather__box">
        <h1>5 days forecast</h1>
        <h1>{currentDate}</h1>

      </div>
    </section>
  );
}

export default WeatherForecast;
