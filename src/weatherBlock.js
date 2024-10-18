import React from 'react';

const WeatherBlock = ({ weather }) => {
    return (

          <div className="weather_box">
               <div className="weather_box_data">Max:  {weather.daily.temperature_2m_max[0]} {weather.daily_units.temperature_2m_max}</div>
               <div className="weather_box_data">Min: {weather.daily.temperature_2m_min[0]} {weather.daily_units.temperature_2m_min}</div>
               <div className="weather_box_data">Wind weather: {weather.daily.wind_speed_10m_max[0]} {weather.daily_units.wind_speed_10m}</div>
               <div className="weather_box_data">Wind direction: {weather.daily.wind_direction_10m_dominant[0]} {weather.daily_units.wind_direction_10m}</div>
               <div className="weather_box_data">Rain: {weather.daily.rain_sum[0]} {weather.daily_units.precipitation_unit}</div>
               <div className="weather_box_data">Snow: {weather.daily.snowfall_sum[0]} {weather.daily_units.precipitation_unit}</div>
          </div>

    );
};

export default WeatherBlock;