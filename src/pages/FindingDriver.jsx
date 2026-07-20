import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRide } from "../context/RideContext";

function FindingDriver() {
const navigate = useNavigate();

const {
selectedRide,
clearTrip,
} = useRide();

useEffect(() => {
if (!selectedRide) {
navigate("/ride-options");
}
}, [selectedRide, navigate]);

return (
<div
style={{
minHeight: "100vh",
background: "#f7f7f7",
display: "flex",
justifyContent: "center",
alignItems: "center",
padding: 20,
position: "relative",
}}
>
<button
onClick={() => navigate(-1)}
style={{
position: "absolute",
top: 30,
left: 30,
border: "none",
background: "transparent",
fontSize: 20,
cursor: "pointer",
fontWeight: "bold",
}}
>
← Back
</button>

<div
style={{
width: "100%",
maxWidth: 420,
background: "#fff",
borderRadius: 20,
padding: 30,
textAlign: "center",
boxShadow: "0 8px 24px rgba(0,0,0,.12)",
}}
>
<div
style={{
fontSize: 60,
marginBottom: 20,
}}
>
🚖
</div>

<h2
style={{
marginTop: 0,
marginBottom: 10,
}}
>
Finding Your Driver...
</h2>

<p
style={{
color: "#666",
marginBottom: 30,
}}
>
Please wait while we connect you with the nearest available driver.
</p>

<div
style={{
width: "100%",
height: 8,
background: "#e5e5e5",
borderRadius: 999,
overflow: "hidden",
}}
>
<div
style={{
width: "60%",
height: "100%",
background: "#FFD400",
borderRadius: 999,
}}
/>
</div>

<button
onClick={() => {
clearTrip();
navigate("/");
}}
style={{
marginTop: 30,
width: "100%",
padding: 16,
border: "none",
borderRadius: 12,
background: "#111",
color: "#fff",
fontSize: 16,
fontWeight: "bold",
cursor: "pointer",
}}
>
Cancel Ride
</button>
</div>
</div>
);
}

export default FindingDriver;
