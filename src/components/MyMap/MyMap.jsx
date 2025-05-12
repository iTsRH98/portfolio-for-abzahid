// MyMap.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyMap = () => {
  const position = [23.7091, 90.4165];

  return (
    <MapContainer
      center={position}
      zoom={15}
      className="h-[300px] w-full rounded-xl z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>I’m here in Dhaka!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
