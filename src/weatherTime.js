
import React, { useState, useEffect } from 'react';

const WeatherTime = ({ weather, time }) => {


//console.log(weather);
    return (
        <div className="time_container">
           <p>Time: {time}</p>
           <p>Sunrise: {weather.sunrise[0].slice(-5)}</p>
           <p>Sunset: {weather.sunset[0].slice(-5)}</p>
        </div>
    );
};

export default WeatherTime;
