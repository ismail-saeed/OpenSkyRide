import { useState } from "react";
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
} = useRide();

const [autocomplete, setAutocomplete] = useState(null);

const onLoad = (auto) => {
setAutocomplete(auto);
};

const onPlaceChanged = () => {
if (!autocomplete) return;

const place = autocomplete.getPlace();

if (!place || !place.formatted_address) return;

if (type === "pickup") {
setPickup(place.formatted_address);
} else {
setDestination(place.formatted_address);
}

navigate("/");
};

return (
<div
style={{
padding: 20,
}}
>
<button
onClick={() => navigate(-1)}
style={{
marginBottom: 20,
border: "none",
background: "transparent",
fontSize: 18,
cursor: "pointer",
}}
>
← Back
</button>

<h2>Search Location</h2>

<Autocomplete
onLoad={onLoad}
onPlaceChanged={onPlaceChanged}
>
<input
type="text"
defaultValue={
type === "pickup"
? pickup
: destination
}
placeholder={
type === "pickup"
? "Enter pickup location"
: "Enter destination"
}
style={{
width: "100%",
padding: 16,
fontSize: 16,
borderRadius: 12,
border: "1px solid #ddd",
outline: "none",
boxSizing: "border-box",
}}
/>
</Autocomplete>
</div>
);
}

export default SearchDestination;