import React from "react";

import "./index.css";
export const Regions = ({
  currentRegion,
  setCurrentRegion,
  isAllHeatmapLoading,
  setAllHeatmapLoading
}) => {
  const regions = [
    "Massachusetts",
    "California",
    "Virginia",
    "Texas",
    "Ohio",
    "Florida"
  ];

  const loadingButton = (
    <button className="button region-button-style is-gray" disabled={true}>
      loading
    </button>
  );
  const allButton = (
    <button
      className={`button region-button-style ${
        currentRegion === "" ? "is-dark" : ""
      }`}
      onClick={() => {
        setAllHeatmapLoading(true)
        setCurrentRegion("");
      }}
    >
      ALL
    </button>
  );

  return (
    <div className="region-contaniner">
      {isAllHeatmapLoading ? loadingButton : allButton}
      {regions.map((region, index) => (
        <button
          key={`region_button_${index}`}
          className={`button region-button-style ${
            region.toLocaleLowerCase() === currentRegion.toLocaleLowerCase()
              ? "is-dark"
              : ""
          }`}
          onClick={() => setCurrentRegion(region)}
        >
          {region}
        </button>
      ))}
    </div>
  );
};
