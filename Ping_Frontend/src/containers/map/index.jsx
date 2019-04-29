import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// import { CustomMarker } from'./custom-marker'

import "./index.css";

export const MapContainer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCJpMlKrjQ6G9Jf7I8jp1RObNp4C7LvRJc&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ margin: `32px 0px`, height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(({ pings }) => {
  return (
    <GoogleMap
      defaultZoom={2}
      defaultCenter={{ lat: 37.33939, lng: -121.89496 }}
    >
      {pings.map((ping, index) => (
        <Marker key={index} position={{ lat: ping.latitude, lng: ping.longitude }} />
      ))}
    </GoogleMap>
  );
});
