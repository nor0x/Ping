import React, { useState } from "react";

import { Header } from "./components/header";
import { MapContainer } from "./containers/map";
import { ContentsContainer } from "./containers/contents";
import { Footer } from "./components/footer";
import { Loading } from "./components/loading";
import { SubmitModal } from "./components/submit-modal";

import { API_BASE_URL } from "./api";
import { useFetch } from "./hooks";

function App() {
  const [pings, isLoading] = useFetch(API_BASE_URL);
  const [isCloseModal, setModalState] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <Header setModalState={setModalState} />
      <MapContainer
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <ContentsContainer dataset={pings} />
      <SubmitModal isCloseModal={isCloseModal} setModalState={setModalState} />
      <Footer />
    </div>
  );
}

export default App;
