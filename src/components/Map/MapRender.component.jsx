import React from "react";
import Info from "../Info/Info.component";
// Redux
import { useSelector } from "react-redux";

// React-leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapRender = () => {
  const { userData, status } = useSelector((state) => state.requestUserData);
  
  const lat = userData.lat;
  const lng = userData.lng;

  if(status === 'loading') return 'Loading...'
  
  return (
    <React.Fragment>
      <MapContainer
        center={[lat, lng]}
        zoom={16}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <Info />
    </React.Fragment>
  );
};

export default MapRender;
