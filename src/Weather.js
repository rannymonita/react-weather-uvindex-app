import React from "react";
import icon from "./asset/02d.svg";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-12 col-md-8">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
            />
          </div>
          <div className="col-6 col-md-4">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-secondary"
            />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-md-6">
          <h3>Lisbon</h3>
          <span className="date">
            <p>Sunday Jan 17</p>
            <p>Last updated 17:08</p>
          </span>
          <br />
          <div className="clearfix">
            <div className="float-left">
              <span className="temperature">18</span>
            </div>
            <div className="float-left">
              <span className="unit">°C | °F</span>
            </div>
          </div>
          <p>Clear Sky</p>
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
              Real feel : <span id="real-feel-temp">15</span>&deg;
            </li>
            <li className="list-group-item">
              Humidity : <span id="humidity">87</span>%
            </li>
            <li className="list-group-item">
              Wind : <span id="wind-speed">2</span> Km/hr
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
