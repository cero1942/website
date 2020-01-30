import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./App.css";
import * as data from "./data/kose";

const trashGreen = new Icon({
  iconUrl: "/icons8-trash-green.svg",
  iconSize: [25, 25]
});

const trashYellow = new Icon({
  iconUrl: "/icons8-trash-yellow.svg",
  iconSize: [25, 25]
});
const trashOrange = new Icon({
  iconUrl: "/icons8-trash-orange.svg",
  iconSize: [25, 25]
});
const trashRed = new Icon({
  iconUrl: "/icons8-trash-red.svg",
  iconSize: [25, 25]
});

function App() {
  return (
    <Map center={[49.195061, 16.606836]} zoom={10}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.kose.map(kos => (
        <Marker 
          key={kos.id} 
          position={[kos.location.lat, kos.location.long]} 
          icon={
            kos.fullness < 30 ? trashGreen :
            (kos.fullness < 50 ? trashYellow :
            (kos.fullness < 70 ? trashOrange : trashOrange ))}
        />
      ))}
    </Map>
  );
}

export default App;
