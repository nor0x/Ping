import React from "react";

import { Header } from "./components/header";
import { MapContainer } from "./containers/map";
import { ContentsContainer } from "./containers/contents";
import { Footer } from './components/footer'

function App() {
  return (
    <div className="container">
      <Header />
      <MapContainer
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <ContentsContainer />
      <Footer />
    </div>
  );
}

export default App;
