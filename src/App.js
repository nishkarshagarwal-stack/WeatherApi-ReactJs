import React from "react";
import { useState } from "react";
import axios from 'axios'
function App() {

  const[data, setData] = useState({})
  const[location, setLocation] = useState('')
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d93ae5bb448741cd153cb3af4e77c2e7`
  
  const searchLocation = (event) => {
    if(event.key === 'Enter' ){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  
  return (
    <div className="App">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder='Enter location'
        onKeyPress={searchLocation}
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
           <p>{data.name}</p>
          </div>
          <div className="temprature">
            <h1>{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}</h1>
          </div>
          <div className="decription">
            <p>
              {data.weather ? <h1>{data.weather[0].main}</h1> : null}
            </p>
          </div>
        </div>

{data.name != undefined && 
        <div className="bottom">
          <div className="feels">
          <p>{data.main ? <p>{data.main.feels_like}°F</p> : null}</p>
          <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p>{data.main ? <p>{data.main.humidity}%</p> : null}</p>
            <p>humidity</p>
          </div>
          <div className="wind">
            <p>{data.wind ? <p>{data.wind.speed} MPH</p> : null}</p>
            <p>Wind</p>
          </div>
        </div>
}

      </div>
    </div>
  );
}

export default App;
