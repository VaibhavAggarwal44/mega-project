import React, { useState } from "react";

import ReactMapGL from "react-map-gl";

const Mapl = (props) => {
  const [viewport, setViewport] = React.useState({
    latitude: props.center.latitude,
    longitude: props.center.longitude,
    zoom: 16,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
};

export default Mapl;
