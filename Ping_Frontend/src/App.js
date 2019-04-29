import React, { useState } from "react";

import { Header } from "./components/header";
import { MapContainer } from "./containers/map";
import { ContentsContainer } from "./containers/contents";
import { Footer } from "./components/footer";
import { Loading } from "./components/loading";
import { SubmitModal } from "./components/submit-modal";
import { Regions } from "./components/regions";

import { API_BASE_URL } from "./api";
import { useFetch } from "./hooks";

const INITIAL_REGION = "california";
function App() {
  const [isCloseModal, setModalState] = useState(false);
  const [isLogin, setUserStatus] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRegion, setCurrentRegion] = useState(INITIAL_REGION);

  // API call
  const [pings, isLoading] = useFetch(API_BASE_URL);
  // const [heatmapData, isHeatmapLoading] = useFetch(
  //   `${API_BASE_URL}/Heatmap/${currentRegion}`
  // );

  if (isLoading) {
    return <Loading />;
  }

  // console.log(heatmapData);

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
      />
      <MapContainer
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        pings={pings}
        currentIndex={currentIndex}
      />
      <ContentsContainer dataset={pings} setCurrentIndex={setCurrentIndex} />
      <SubmitModal isCloseModal={isCloseModal} setModalState={setModalState} />
      <Footer />
    </div>
  );
}

export default App;
