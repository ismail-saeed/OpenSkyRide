import { useState } from "react";
import { LoadScript } from "@react-google-maps/api";

import Map from "../components/Map";
import BottomSheet from "../components/BottomSheet";
import TopBar from "../components/TopBar";

const libraries = ["places"];

function Home() {
const [pickup, setPickup] = useState("");
const [destination, setDestination] = useState("");
const [directions, setDirections] = useState(null);

const center = {
lat: 32.817,
lng: -97.170,
};

const searchRoute = () => {
if (!pickup || !destination) return;

const service = new google.maps.DirectionsService();

service.route(
{
origin: pickup,
destination: destination,
travelMode: google.maps.TravelMode.DRIVING,
},
(result, status) => {
if (status === "OK") {
setDirections(result);
} else {
alert("Unable to calculate route.");
}
}
);
};

return (
<LoadScript
googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
libraries={libraries}
>
<div
style={{
position: "relative",
width: "100%",
height: "100vh",
overflow: "hidden",
}}
>
<Map
center={center}
directions={directions}
/>

<TopBar />

<BottomSheet
pickup={pickup}
destination={destination}
setPickup={setPickup}
setDestination={setDestination}
searchRoute={searchRoute}
/>
</div>
</LoadScript>
);
}

export default Home;

