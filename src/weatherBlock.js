import React from 'react';

const WeatherBlock = ({ dayWeather, units }) => {
    return (
        <div className="weather_box">
            <div className="weather_box_data">Max: {dayWeather.temperature_2m_max} {units.temperature_2m_max}</div>
            <div className="weather_box_data">Min: {dayWeather.temperature_2m_min} {units.temperature_2m_min}</div>
            <div className="weather_box_data">Wind speed: {dayWeather.wind_speed_10m_max} {units.wind_speed_10m}</div>
            <div className="weather_box_data">Wind direction: {dayWeather.wind_direction_10m_dominant} {units.wind_direction_10m}</div>
            <div className="weather_box_data">Rain: {dayWeather.rain_sum} {units.precipitation_unit}</div>
            <div className="weather_box_data">Snow: {dayWeather.snowfall_sum} {units.precipitation_unit}</div>
        </div>
    );
};

export default WeatherBlock;
