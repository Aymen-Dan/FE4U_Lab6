import React from 'react';
import { useNavigate } from 'react-router-dom';

const Weather = (props) => {


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
                 <p>Time: </p>
                 <p>Sunrise: </p>
                 <p>Sunrise: </p>
            </div>
         </div>

         <div className="weather_boxes_container">

              <div className="weather_box">1</div>
              <div className="weather_box">2</div>
              <div className="weather_box">3</div>
              <div className="weather_box">4</div>
              <div className="weather_box">5</div>
         </div>
    </div>
</div>
          );
}

export default Weather;