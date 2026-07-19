import { useEffect, useState } from "react";
import {
GoogleMap,
DirectionsRenderer,
} from "@react-google-maps/api";

import mapStyle from "../styles/mapStyle";
import marker from "../assets/opensky-marker.svg";
import { useRide } from "../context/RideContext";

const containerStyle = {
width: "100%",
height: "100vh",
};

const mapOptions = {
styles: mapStyle,
disableDefaultUI: true,
zoomControl: false,
streetViewControl: false,
mapTypeControl: false,
fullscreenControl: false,
clickableIcons: false,
gestureHandling: "greedy",
};

function Map({ center, directions }) {
const [map, setMap] = useState(null);

const {
setPickup,
setPickupPlace,
} = useRide();

useEffect(() => {
if (!map || !directions) return;

map.fitBounds(directions.routes[0].bounds);

window.google.maps.event.addListenerOnce(
map,
"idle",
() => {
const zoom = map.getZoom();

if (zoom > 15) {
map.setZoom(15);
}
}
);
}, [map, directions]);

const goToMyLocation = () => {
if (!navigator.geolocation) return;

navigator.geolocation.getCurrentPosition(
(position) => {
const location = {
lat: position.coords.latitude,
lng: position.coords.longitude,
};

map?.panTo(location);
map?.setZoom(16);

const geocoder = new window.google.maps.Geocoder();

geocoder.geocode(
{
location,
},
(results, status) => {
if (
status === "OK" &&
results &&
results.length > 0
) {
setPickup(results[0].formatted_address);
setPickupPlace(location);
}
}
);
},
(error) => {
console.log(error);
}
);
};

return (
<div
style={{
width: "100%",
height: "100%",
position: "relative",
}}
>
<GoogleMap
mapContainerStyle={containerStyle}
center={center}
zoom={15}
options={mapOptions}
onLoad={(mapInstance) => setMap(mapInstance)}
>
{directions && (
<DirectionsRenderer
directions={directions}
options={{
suppressMarkers: true,
preserveViewport: false,
polylineOptions: {
strokeColor: "#FFD400",
strokeWeight: 6,
strokeOpacity: 0.9,
},
}}
/>
)}
</GoogleMap>

{!directions && (
<div
style={{
position: "absolute",
top: "50%",
left: "50%",
transform: "translate(-50%, -100%)",
zIndex: 999,
pointerEvents: "none",
}}
>
<img
src={marker}
alt="Marker"
style={{
width: 52,
height: 68,
}}
/>
</div>
)}

<button
onClick={goToMyLocation}
style={{
position: "absolute",
right: 20,
bottom: 300,
width: 56,
height: 56,
borderRadius: "50%",
border: "none",
background: "#FFFFFF",
boxShadow: "0 6px 18px rgba(0,0,0,.25)",
fontSize: 22,
cursor: "pointer",
display: "flex",
alignItems: "center",
justifyContent: "center",
zIndex: 1000,
}}
>
📍
</button>
</div>
);
}

export default Map;
