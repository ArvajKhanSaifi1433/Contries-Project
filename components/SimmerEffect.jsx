import React from "react";
import "./SimmerEffect.css";

Array.from({ length: 10 }).map((ele, i) => (
  <div className="country-card shimmer-card" key={i}></div>
));

function SimmerEffect() {
  return (
    <>
      <div className="countries-container">
        {Array.from({ length: 100 }).map((ele, i) => (
          <div className="country-card shimmer-card" key={i}>
            <div className="flag-container"></div>
            <div className="car-text">
              <h3 className="card-title"></h3>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SimmerEffect;
