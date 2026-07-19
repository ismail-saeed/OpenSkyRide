
import { useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

import Map from "../components/Map";
import BottomSheet from "../components/BottomSheet";
import TopBar from "../components/TopBar";

import { useRide } from "../context/RideContext";

const libraries = ["places"];

function Home() {
const {
pickup,
destination,

directions,
setDirections,

setDistance,
setDuration,
} = useRide();

const center = {
lat: 32.817,
lng: -97.170,
};

const { isLoaded, loadError } = useJsApiLoader({
id: "google-map-script",
googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
libraries,
});

useEffect(() => {
if (!isLoaded) return;
if (!pickup || !destination) return;

const service = new window.google.maps.DirectionsService();

service.route(
{
origin: pickup,
destination: destination,
travelMode: window.google.maps.TravelMode.DRIVING,
},
(result, status) => {
if (status === "OK") {
setDirections(result);

const leg = result.routes[0].legs[0];

setDistance(leg.distance.text);
setDuration(leg.duration.text);
}
}
);
}, [
isLoaded,
pickup,
destination,
setDirections,
setDistance,
setDuration,
]);

if (loadError) {
return <h2>Failed to load Google Maps.</h2>;
}

if (!isLoaded) {
return <h2>Loading Maps...</h2>;
}

return (
<div
style={{
width: "100%",
height: "100vh",
position: "relative",
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
/>
</div>
);
}

export default Home;

