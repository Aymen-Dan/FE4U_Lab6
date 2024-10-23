import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WeatherTime from './weatherTime';
import WeatherBlock from './weatherBlock';
import Loader from './loader';


function Weather() {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [time, setTime] = useState(new Date());



useEffect(() => {
setInterval(() => setTime(new Date()), 1000);
initWeather();
}, []);

async function initWeather() {
 setLoading(true);
  await fetch('https://api.open-meteo.com/v1/forecast?latitude=50.4547&longitude=30.5238&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,snowfall_sum,wind_speed_10m_max,wind_direction_10m_dominant&timezone=Europe%2FMoscow')
      .then((response) => response.json())
      .then((json) => {setData(json)}
            )
      .catch((error) => {console.error(error);
             })
      .finally(() => { setLoading(false);
               });
  }


if (loading) {
        return <Loader/>;
    }

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
                        {data ? <WeatherTime weather={data.daily} time={time.toLocaleTimeString()}/> : 'HAHAH'}
                   </div>
                    <div className="weather_boxes_container">
                      {data && data.daily.temperature_2m_max.slice(0, 7).map((_, index) => (
                           <WeatherBlock key={index} dayWeather={{
                               temperature_2m_max: data.daily.temperature_2m_max[index],
                               temperature_2m_min: data.daily.temperature_2m_min[index],
                               wind_speed_10m_max: data.daily.wind_speed_10m_max[index],
                               wind_direction_10m_dominant: data.daily.wind_direction_10m_dominant[index],
                               rain_sum: data.daily.rain_sum[index],
                               snowfall_sum: data.daily.snowfall_sum[index]
                           }} units={data.daily_units} />
                      ))}
                    </div>
              </div>
    </div>
  );
}

export default Weather;

//data ? <pre>{data.daily.sunrise[0].slice(-5)} </pre> : 'Loading...'
 //data ? <pre>{data.daily.sunset[0].slice(-5)}</pre>  : 'Loading...'
 //<WeatherBlock weather={data} />