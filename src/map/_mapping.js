import React from "react";
import GoogleMapReact from 'google-map-react';


export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 52.0548047,
      lng: 21.3841915
    },
    zoom: 18
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
  );
}