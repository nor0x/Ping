import React, { useState, useEffect } from "react";

import { Header } from "./components/header";
import { MapContainer } from "./components/map";
import { ContentsContainer } from "./components/contents";
import { Footer } from "./components/footer";
import { Loading } from "./components/loading";
import { SubmitModal } from "./components/submit-modal";
import { Regions } from "./components/regions";

import { API_BASE_URL, API_HEATMAP_URL } from "./api";

const INITIAL_REGION = "california";

function App() {
  // container
  const [isCloseModal, setModalState] = useState(false);
  const [isLogin, setUserStatus] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRegion, setCurrentRegion] = useState(INITIAL_REGION);
  const [dataStatus, setDataStatus] = useState(0);

  // API call
  const [isLoading, setLoading] = useState(true);
  const [pings, setPings] = useState([]);

  const [heatmapData, setHeatmapData] = useState([]);
  const [isAllHeatmapLoading, setAllHeatmapLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_BASE_URL);
      const json = await response.json();
      setPings(json);
      setLoading(false);
    };
    fetchData();
  }, [dataStatus]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_HEATMAP_URL}/${currentRegion}`);
      const json = await response.json();
      setHeatmapData(json);
      if (currentRegion === "") {
        setAllHeatmapLoading(false);
      } else {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentRegion]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <Header
        isLogin={isLogin}
        setModalState={setModalState}
        setUserStatus={setUserStatus}
      />
      <Regions
        currentRegion={currentRegion}
        setCurrentRegion={setCurrentRegion}
        isAllHeatmapLoading={isAllHeatmapLoading}
        setAllHeatmapLoading={setAllHeatmapLoading}
      />
      <MapContainer
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        pings={pings}
        currentIndex={currentIndex}
        heatmapData={heatmapData}
        // allHeatmapData={allHeatmapData}
        currentRegion={currentRegion}
      />
      <ContentsContainer
        dataset={pings}
        setCurrentIndex={setCurrentIndex}
        setDataStatus={setDataStatus}
        dataStatus={dataStatus}
      />
      <SubmitModal isCloseModal={isCloseModal} setModalState={setModalState} />
      <Footer />
    </div>
  );
}

export default App;
