import React from "react";

import "./index.css";
export const Regions = ({ currentRegion, setCurrentRegion }) => {
  const regions = [
    "massachusetts",
    "california",
    "arizona",
    "virginia",
    "pennsylvania",
    "nevada",
    "texas",
    "montana",
    "kansas",
    "ohio",
    "florida"
  ];

  return (
    <div className="region-contaniner">
      {regions.map((region, index) => (
        <button
          key={`region_button_${index}`}
          className={`button region-button-style ${
            region === currentRegion ? "is-dark" : ""
          }`}
          onClick={() => setCurrentRegion(region)}
        >
          {region}
        </button>
      ))}
    </div>
  );
};
