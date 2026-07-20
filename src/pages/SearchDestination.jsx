import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Autocomplete } from "@react-google-maps/api";
import { useRide } from "../context/RideContext";

function SearchDestination() {
const navigate = useNavigate();
const [searchParams] = useSearchParams();

const type = searchParams.get("type");

const {
pickup,
destination,
setPickup,
setDestination,
setPickupPlace,
setDestinationPlace,
} = useRide();

const [autocomplete, setAutocomplete] = useState(null);
const inputRef = useRef(null);

useEffect(() => {
setTimeout(() => {
inputRef.current?.focus();
}, 300);
}, []);

const onLoad = (auto) => {
setAutocomplete(auto);
};

const onPlaceChanged = () => {
if (!autocomplete) return;

const place = autocomplete.getPlace();

if (
!place ||
!place.formatted_address ||
!place.geometry
) {
return;
}

const location = {
lat: place.geometry.location.lat(),
lng: place.geometry.location.lng(),
};

if (type === "pickup") {
setPickup(place.formatted_address);
setPickupPlace(location);
} else {
setDestination(place.formatted_address);
setDestinationPlace(location);
}

navigate("/");
};

return (
<div
style={{
minHeight: "100vh",
background: "#f8f8f8",
}}
>
{/* Header */}
<div
style={{
background: "#000",
color: "#FFD400",
padding: "18px 20px",
display: "flex",
alignItems: "center",
gap: 15,
}}
>
<button
onClick={() => navigate(-1)}
style={{
background: "transparent",
border: "none",
color: "#FFD400",
fontSize: 24,
cursor: "pointer",
}}
>
←
</button>

<div>
<h2
style={{
margin: 0,
color: "#FFD400",
}}
>
OpenSkyRide
</h2>

<small style={{ color: "#fff" }}>
{type === "pickup"
? "Choose Pickup"
: "Choose Destination"}
</small>
</div>
</div>

{/* Search Box */}
<div
style={{
padding: 20,
}}
>
<Autocomplete
onLoad={onLoad}
onPlaceChanged={onPlaceChanged}
>
<input
ref={inputRef}
type="text"
defaultValue={
type === "pickup"
? pickup
: destination
}
placeholder={
type === "pickup"
? "Enter pickup location..."
: "Where are you going?"
}
style={{
width: "100%",
padding: 18,
borderRadius: 16,
border: "1px solid #ddd",
fontSize: 17,
outline: "none",
boxSizing: "border-box",
background: "#fff",
boxShadow: "0 4px 12px rgba(0,0,0,.08)",
}}
/>
</Autocomplete>

{/* Quick Access */}
<div
style={{
marginTop: 30,
background: "#fff",
borderRadius: 16,
padding: 18,
boxShadow: "0 4px 12px rgba(0,0,0,.08)",
}}
>
<h3 style={{ marginTop: 0 }}>
Quick Access
</h3>

<div style={{ padding: "12px 0" }}>
📍 Use Current Location
</div>

<hr />

<div style={{ padding: "12px 0" }}>
🏠 Home
</div>

<hr />

<div style={{ padding: "12px 0" }}>
💼 Work
</div>

<hr />

<div style={{ padding: "12px 0" }}>
⭐ Saved Places
</div>
</div>
</div>
</div>
);
}

export default SearchDestination;