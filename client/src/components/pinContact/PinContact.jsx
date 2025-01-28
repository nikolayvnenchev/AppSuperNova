import { Marker, Popup } from "../../../leaflet";
// import "./pin.scss";
import { Link } from "react-router-dom";

function PinContact({ item }) {
  return (
    // <Marker position={[41.93015488916809, 25.552315767424865]} />
    // console.log(item.latitude, item.longitude)
    <Marker position={[item.latitude, item.longitude]} />
  );
}

export default PinContact;
