import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WeatherTime from './weatherTime';
import WeatherBlock from './weatherBlock';

const Weather = (props) => {
const [data, setData] = useState(null);

useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=50.4547&longitude=30.5238&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,snowfall_sum,wind_speed_10m_max,wind_direction_10m_dominant&timezone=Europe%2FMoscow')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

console.log(JSON.stringify(data, null, 2));


  return (
     <div>
              <div className="header_bar">

                  <p className="main_header">Weather</p>
                  <nav className="main-navigation">
                      <ul>
                          <li><a className="link-navigation" href="">Home</a></li>
                          <li><a className="link-navigation" href="">Language</a></li>
                          <li><a className="link-navigation" href="">Map</a></li>
                          <li><a className="link-navigation" href="">API</a></li>
                          <li><a className="link-navigation" href="">About</a></li>
                      </ul>
                  </nav>
                    <div className="search_container">
                      <input
                        className="input_search"
                        type="search"
                        id="search_field"
                        placeholder="Search"
                        />
                     </div>
              </div>

              <div className="notHeader">
                   <div className="title_div">
                      <div className="location_container">
                           <p id="city_text">Kyiv</p>
                       <p id="country_text">Ukraine</p>
                      </div>
                        <div className="time_container">
                            <p>Time: {}</p>
                            <p>Sunrise: {data.daily.sunrise[0].slice(-5)}</p>
                            <p>Sunset: {data.daily.sunset[0].slice(-5)}</p>
                        </div>
                   </div>
                    <div className="weather_boxes_container">
                      <WeatherBlock weather={data} />
                    </div>
              </div>
    </div>
  );
}

export default Weather;

//data ? <pre>{data.daily.sunrise[0].slice(-5)} </pre> : 'Loading...'
 //data ? <pre>{data.daily.sunset[0].slice(-5)}</pre>  : 'Loading...'