import React, { useState } from "react";
import axios from "axios";
import icon from "./asset/02d.svg";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      humid: response.data.main.humidity,
      wind: response.data.wind.speed,
      realFeel: response.data.main.feels_like,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-12 col-md-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control form-control-sm"
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
        <div className="row">
          <div className="col-md-6">
            <h3>{weatherData.city}</h3>
            <span className="date">
              <p>Sunday Jan 17</p>
              <p>Last updated 17:08</p>
            </span>
            <br />
            <div className="clearfix">
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
              </div>
              <div className="float-left">
                <span className="unit">°C | °F</span>
              </div>
            </div>
            <p>{weatherData.description}</p>
          </div>
          <div className="col-md-6">
            <img
              id="main-icon"
              alt="weather"
              src={icon}
              className="icon-current"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>UV Index</h4>
            <hr />
            <ul className="list-group">
              <li className="list-group-item">
                Value : <span id="uv-index">2</span> (low)
              </li>
              <li className="list-group-item">
                Suggestion :{" "}
                <span id="uv-suggestion">
                  Use extra protection when staying outdoor.
                </span>
              </li>
              <li className="list-group-item">
                For more info about Sun Safety,{" "}
                <a
                  href="https://www.epa.gov/sunsafety/action-steps-sun-safety"
                  target="_blank"
                  rel="noreferrer"
                >
                  click here
                </a>
                .
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Weather Details</h4>
            <hr />
            <ul className="list-group">
              <li className="list-group-item">
                Real feel :{" "}
                <span id="real-feel-temp">
                  {Math.round(weatherData.realFeel)}
                </span>
                &deg;
              </li>
              <li className="list-group-item">
                Humidity : <span id="humidity">{weatherData.humid}</span>%
              </li>
              <li className="list-group-item">
                Wind :{" "}
                <span id="wind-speed">{Math.round(weatherData.wind)}</span>{" "}
                Km/hr
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "823e2e84bc5835e87564bbced4b8cd86";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
