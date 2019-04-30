import React, { useState } from "react";

import { Header } from "./components/header";
import { MapContainer } from "./components/map";
import { ContentsContainer } from "./components/contents";
import { Footer } from "./components/footer";
import { Loading } from "./components/loading";
import { SubmitModal } from "./components/submit-modal";
import { Regions } from "./components/regions";

import { API_BASE_URL, API_HEATMAP_URL } from "./api";
import { useFetch } from "./hooks";

const INITIAL_REGION = "california";

function App() {
  // container
  const [isCloseModal, setModalState] = useState(false);
  const [isLogin, setUserStatus] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRegion, setCurrentRegion] = useState(INITIAL_REGION);
  const [dataStatus, setDataStatus] = useState(0);

  // API call
  const [pings, isLoading] = useFetch(API_BASE_URL, dataStatus);
  const [heatmapData, isHeatmapLoading] = useFetch(
    `${API_HEATMAP_URL}/${currentRegion}`,
    currentRegion
  );

  if (isLoading || isHeatmapLoading) {
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
        isHeatmapLoading={isHeatmapLoading}
      />
      <MapContainer
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        pings={pings}
        currentIndex={currentIndex}
        heatmapData={heatmapData}
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
