// src/components/LocationMarker.js
import React from 'react';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

const LocationMarker = ({ place, setClickedPlace }) => {
  return (
    <Marker
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
  );
};

export default LocationMarker;
