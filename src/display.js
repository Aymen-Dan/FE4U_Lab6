import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Display() {
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
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default Display;