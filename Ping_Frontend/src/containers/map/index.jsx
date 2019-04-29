/* eslint-disable no-undef */

import React from "react";
import { compose, withProps, withHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";

import "./index.css";

export const MapContainer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCJpMlKrjQ6G9Jf7I8jp1RObNp4C7LvRJc&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ margin: `32px 0px`, height: `100%` }} />
  }),
  withHandlers(() => {
    const refs = {
      map: undefined,
    }

    return {
      onMapMounted: () => ref => {
        refs.map = ref
        console.log(refs.map)
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom())
      }
    }
  }),
  withScriptjs,
  withGoogleMap,
)(props => {
  const { pings, currentIndex } = props;
  const targetPos = {
    lat: pings[currentIndex].latitude,
    lng: pings[currentIndex].longitude
  };
  console.log(targetPos);

  return (
    <GoogleMap
      defaultZoom={2}
      defaultCenter={{ lat: 37.33939, lng: -121.89496 }}
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
    </GoogleMap>
  );
});
