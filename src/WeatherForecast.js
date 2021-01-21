import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import ForecastPreview from "./ForecastPreview";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && forecast.lat === props.lat && forecast.lon === props.lon) {
    return (
      <div className="row">
        <div className="col-md-12">
          <h4>Forecast</h4>
          <hr />
        </div>
        <div className="forecast row">
          <ForecastPreview data={forecast.daily[1]} unit={props.unit} />
          <ForecastPreview data={forecast.daily[2]} unit={props.unit} />
          <ForecastPreview data={forecast.daily[3]} unit={props.unit} />
          <ForecastPreview data={forecast.daily[4]} unit={props.unit} />
          <ForecastPreview data={forecast.daily[5]} unit={props.unit} />
          <ForecastPreview data={forecast.daily[6]} unit={props.unit} />
        </div>
      </div>
    );
  } else {
    let apiKey = "823e2e84bc5835e87564bbced4b8cd86";
    let exclude = "&exclude=hourly,minutely";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}${exclude}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleForecastResponse);

    return "Loading...";
  }
}
