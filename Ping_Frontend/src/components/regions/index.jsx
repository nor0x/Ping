import React from "react";

import "./index.css";
export const Regions = ({
  currentRegion,
  setCurrentRegion,
  isHeatmapLoading
}) => {
  const regions = [
    "massachusetts",
    "california",
    "virginia",
    "texas",
    "ohio",
    "florida"
  ];

  const loadingButton = (
    <button className="button region-button-style is-gray">loading</button>
  );
  const allButton = (
    <button
      className={`button region-button-style ${
        currentRegion === "" ? "is-dark" : ""
      }`}
      onClick={() => setCurrentRegion("")}
    >
      ALL
    </button>
  );

  return (
    <div className="region-contaniner">
      {isHeatmapLoading ? loadingButton : allButton}
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
