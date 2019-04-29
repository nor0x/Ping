import React from "react";

import { Header } from "./components/header";
import { MapContainer } from "./containers/map";
import { ContentsContainer } from "./containers/contents";
import { Footer } from "./components/footer";
import { Loading } from "./components/loading";

import { API_BASE_URL } from "./api";
import { useFetch } from "./hooks";

function App() {
  const [pings, isLoading] = useFetch(API_BASE_URL);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <Header />
      <MapContainer
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <ContentsContainer dataset={pings} />
      <Footer />
    </div>
  );
}

export default App;
