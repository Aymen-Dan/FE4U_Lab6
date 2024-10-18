import React from 'react';

const WeatherTime = ({ weather }) => {
console.log(weather);
    return (
        <div className="time_container">
           <p>Time: {}</p>
           <p>Sunrise: {weather.daily.sunrise[0].slice(-5)}</p>
           <p>Sunset: {weather.daily.sunset[0].slice(-5)}</p>
        </div>
    );
};

export default WeatherTime;
