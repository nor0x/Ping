/* eslint-disable no-undef */

import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polygon
} from "react-google-maps";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

import "./index.css";

export const MapContainer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCJpMlKrjQ6G9Jf7I8jp1RObNp4C7LvRJc&v=3.exp&libraries=geometry,drawing,places,visualization",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ margin: `32px 0px`, height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const { pings, currentIndex, heatmapData } = props;
  const targetPos = {
    lat: pings[currentIndex].latitude,
    lng: pings[currentIndex].longitude
  };
  const { bounds, color } = heatmapData;

  const heatmaps = bounds.map(d => new google.maps.LatLng(d.item1, d.item2));

  return (
    <GoogleMap
      defaultZoom={2}
      defaultCenter={{ lat: 37.33939, lng: -121.89496 }}
      ref={map => map && map.panTo(targetPos)}
      options={{
        streetViewControl: false,
        zoomControl: false,
        rotateControl: false,
        fullscreenControl: false,
        keyboardShortcuts: false
      }}
    >
      {pings.map((ping, index) => (
        <MarkerWithLabel
          key={index}
          position={{ lat: ping.latitude, lng: ping.longitude }}
          opacity={0}
          labelAnchor={new google.maps.Point(18, 20)}
        >
          <div className={`marker marker_${ping.status}`} />
        </MarkerWithLabel>
      ))}
      <Polygon
        path={heatmaps}
        options={{
          fillColor: color || "#FF0000",
          strokeColor: color || "#FF0000"
        }}
      />
      {/* <HeatmapLayer data={heatmaps} /> */}
    </GoogleMap>
  );
});
