import { useNavigate } from "react-router-dom";
import { useRide } from "../context/RideContext";

function BottomSheet({ pickup, destination }) {
const navigate = useNavigate();

const {
distance,
duration,
} = useRide();

const tripReady =
pickup &&
destination &&
distance &&
duration;

return (
<div
style={{
position: "absolute",
left: 0,
right: 0,
bottom: 0,
background: "#fff",
borderTopLeftRadius: 24,
borderTopRightRadius: 24,
padding: 20,
boxShadow: "0 -8px 25px rgba(0,0,0,.12)",
zIndex: 1000,
}}
>
<div
style={{
width: 50,
height: 5,
borderRadius: 10,
background: "#ddd",
margin: "0 auto 20px",
}}
/>

{!tripReady ? (
<>
<h2
style={{
margin: 0,
marginBottom: 20,
}}
>
Where are you going?
</h2>

<input
readOnly
value={pickup}
placeholder="Pickup location"
onClick={() =>
navigate("/search?type=pickup")
}
style={{
width: "100%",
padding: 16,
marginBottom: 12,
borderRadius: 12,
border: "1px solid #ddd",
cursor: "pointer",
boxSizing: "border-box",
}}
/>

<input
readOnly
value={destination}
placeholder="Where to?"
onClick={() =>
navigate("/search?type=destination")
}
style={{
width: "100%",
padding: 16,
borderRadius: 12,
border: "1px solid #ddd",
cursor: "pointer",
boxSizing: "border-box",
}}
/>
</>
) : (
<>
<h2
style={{
marginTop: 0,
}}
>
Trip Summary
</h2>

<p>
📍 <strong>Distance:</strong> {distance}
</p>

<p>
⏱ <strong>Duration:</strong> {duration}
</p>

<button
style={{
width: "100%",
padding: 16,
borderRadius: 12,
border: "none",
background: "#000",
color: "#fff",
fontSize: 18,
fontWeight: 600,
cursor: "pointer",
marginTop: 15,
}}
>
Choose Ride
</button>
</>
)}
</div>
);
}

export default BottomSheet;





