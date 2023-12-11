import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIconx from "../../../assets/marker-icon.png";
import markerIcon2x from "../../../assets/marker-icon-2x.png";
import { useRef } from "react";

const Map = (props) => {
  const mapRef = useRef();

  const markerIcon = new L.Icon({
    iconUrl: markerIconx,
    iconRetinaUrl: markerIcon2x,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
  });

  return (
    <MapContainer
      ref={mapRef}
      className="map"
      center={[props.coordinates.lat, props.coordinates.lng]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[props.coordinates.lat, props.coordinates.lng]}
        icon={markerIcon}
      />
    </MapContainer>
  );
};

export default Map;
