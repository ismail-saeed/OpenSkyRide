import { useEffect, useState } from "react";
import {
GoogleMap,
DirectionsRenderer,
} from "@react-google-maps/api";

import mapStyle from "../styles/mapStyle";
import marker from "../assets/opensky-marker.svg";

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

useEffect(() => {
if (!map || !directions) return;

const bounds = new window.google.maps.LatLngBounds();

directions.routes[0].legs.forEach((leg) => {
bounds.extend(leg.start_location);
bounds.extend(leg.end_location);
});

map.fitBounds(bounds);
}, [map, directions]);

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
polylineOptions: {
strokeColor: "#FFD400",
strokeWeight: 6,
strokeOpacity: 0.9,
},
}}
/>
)}
</GoogleMap>

{/* OpenSkyRide Marker */}
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

{/* My Location Button */}
<button
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
}}
>
📍
</button>
</div>
);
}

export default Map;