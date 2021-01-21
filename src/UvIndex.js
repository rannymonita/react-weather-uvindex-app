import React, { useState } from "react";
import axios from "axios";

export default function UvIndex(props) {
  const [uv, setUv] = useState(null);
  function showUv(response) {
    setUv(Math.round(response.data.current.uvi));
  }
  let lat = props.data.latitude;
  let lon = props.data.longitude;
  let apiKey = "4ab708342c5912861cff58318048bf52";
  let exclude = "&exclude=hourly,minutely,daily";
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}${exclude}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showUv);

  if (uv >= 11) {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">UV Index : {uv} (extremely high)</li>
          <li className="list-group-item">
            Suggestion : Unprotected skin and eyes can burn in minutes. Avoid
            sun exposure between 10 a.m. and 4 p.m. and reapply sunscreen at
            least every two hours, and more often if you're sweating or jumping
            in and out of the water.
          </li>
        </ul>
      </div>
    );
  } else if (uv >= 8) {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">UV Index : {uv} (very high)</li>
          <li className="list-group-item">
            Suggestion : Seek shade and wear protective clothing, a wide-brimmed
            hat, and UV-blocking sunglasses. Reapply sunscreen at least every
            two hours, and more often if you're sweating or jumping in and out
            of the water.
          </li>
        </ul>
      </div>
    );
  } else if (uv >= 6) {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">UV Index : {uv} (high)</li>
          <li className="list-group-item">
            Suggestion : Reduce time in the sun between 10 a.m. and 4 p.m. and
            reapply sunscreen at least every two hours, and more often if you're
            sweating or jumping in and out of the water.
          </li>
        </ul>
      </div>
    );
  } else if (uv >= 3) {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">UV Index : {uv} (moderate)</li>
          <li className="list-group-item">
            Suggestion : Stay in shade near midday when the sun is strongest.
          </li>
        </ul>
      </div>
    );
  } else if (uv < 3) {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">UV Index : {uv} (low)</li>
          <li className="list-group-item">
            Suggestion : Wear sunglasses on bright days and use broad spectrum
            SPF 30+ sunscreen.
          </li>
        </ul>
      </div>
    );
  } else {
    return "Loading...";
  }
}
