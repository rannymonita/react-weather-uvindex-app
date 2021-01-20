import React from "react";

export default function UvIndex() {
  return (
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
  );
}