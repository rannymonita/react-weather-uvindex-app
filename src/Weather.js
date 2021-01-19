import React, { useState } from "react";
import axios from "axios";
import WeatherCurrent from "./WeatherCurrent";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      humid: response.data.main.humidity,
      wind: response.data.wind.speed,
      realFeel: response.data.main.feels_like,
    });
  }

  function search() {
    const apiKey = "823e2e84bc5835e87564bbced4b8cd86";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-md-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control form-control-sm"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-6 col-md-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-secondary btn-sm"
              />
            </div>
          </div>
        </form>
        <WeatherCurrent data={weatherData} />
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
