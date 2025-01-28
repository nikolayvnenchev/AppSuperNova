import { MapContainer, TileLayer } from "react-leaflet";
import "./mapContact.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";
import PinContact from "../pinContact/PinContact";

// const item1 = [41.93015488916809, 25.552315767424865];
// const item2 = [42.69952498425297, 23.325874451073695];
let items = [
    {
        longitude: 25.552315767424865,
        latitude: 41.93015488916809
    },
    {
        longitude: 23.325874451073695,
        latitude: 42.69932498425297
    }
]

function MapContact() {

  return (
    <MapContainer
      center={
        [41.9344, 25.5554]
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
        <PinContact item={item} key={item.longitude} />
      ))}
    </MapContainer>
  );
}

export default MapContact;