import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map({ latitude, longitude }) {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={15}
      scrollWheelZoom={false}
      style={{
        position: 'relative',
        height: 300,
        width: '100%',
      }}>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibG94dCIsImEiOiJja2c3ZDM1NXQwM2U0MzFvOHd1MGd4MW9rIn0.F9riVxgMLrNO1qGLyjo4_w`}
      />
    </MapContainer>
  );
}
