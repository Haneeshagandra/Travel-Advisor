// src/components/Map.js
import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ places, setClickedPlace }) => {
  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {places.map((place, index) => (
        <Marker
          key={index}
          position={[place.latitude, place.longitude]}
          icon={L.icon({
            iconUrl: place.icon,
            iconSize: [25, 25],
            iconAnchor: [12, 12],
          })}
          eventHandlers={{
            click: () => setClickedPlace(place),
          }}
        >
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
