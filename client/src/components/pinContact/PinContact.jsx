import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
// import "./pin.scss";
import { Link } from "react-router-dom";

const customIcon = new L.Icon({
    iconUrl: "/marker-icon.png", // Path to your image in the public folder
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Popup anchor, adjust if needed
    shadowUrl: "/marker-shadow.png", // Optional shadow (if you have it)
    shadowSize: [41, 41], // Size of the shadow
  });

function PinContact({ item }) {
  return (
    // <Marker position={[41.93015488916809, 25.552315767424865]} />
    // console.log(item.latitude, item.longitude)
    <Marker position={[item.latitude, item.longitude]} icon={customIcon}/>
  );
}

export default PinContact;
