import { MapContainer, TileLayer } from "../../../leaflet/src/Leaflet";
import "./map.scss";
// import "./leaflet.css";
import Pin from "../pin/Pin";

function Map({ items }) {
  return (
    <MapContainer
      center={
        items.length === 1
          ? [items[0].latitude, items[0].longitude]
          : [42.6194, 25.3930]
      }
      zoom={6}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
