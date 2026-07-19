import { useNavigate } from "react-router-dom";
import { useRide } from "../context/RideContext";

const rides = [
{
id: 1,
name: "UberX",
icon: "🚗",
price: "$12.50",
time: "2 min away",
description: "Affordable everyday rides",
},
{
id: 2,
name: "Comfort",
icon: "🚙",
price: "$18.75",
time: "4 min away",
description: "Newer cars with extra legroom",
},
{
id: 3,
name: "XL",
icon: "🚐",
price: "$26.40",
time: "5 min away",
description: "Perfect for groups",
},
{
id: 4,
name: "Luxury",
icon: "💎",
price: "$39.90",
time: "6 min away",
description: "Premium luxury vehicles",
},
];

function RideOptions() {
const navigate = useNavigate();

const {
selectedRide,
setSelectedRide,
distance,
duration,
} = useRide();

return (
<div
style={{
minHeight: "100vh",
background: "#f8f8f8",
}}
>
<div
style={{
background: "#000",
color: "#fff",
padding: "18px",
display: "flex",
alignItems: "center",
gap: "15px",
}}
>
<button
onClick={() => navigate(-1)}
style={{
background: "transparent",
border: "none",
color: "#fff",
fontSize: 24,
cursor: "pointer",
}}
>
←
</button>

<h2 style={{ margin: 0 }}>
Choose your ride
</h2>
</div>

<div
style={{
padding: 20,
}}
>
<div
style={{
background: "#fff",
borderRadius: 15,
padding: 15,
marginBottom: 20,
}}
>
<p>
📍 <strong>Distance:</strong> {distance}
</p>

<p>
⏱ <strong>Duration:</strong> {duration}
</p>
</div>

{rides.map((ride) => (
<div
key={ride.id}
onClick={() => setSelectedRide(ride)}
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
background:
selectedRide?.id === ride.id
? "#FFF6CC"
: "#fff",
border:
selectedRide?.id === ride.id
? "2px solid #FFD400"
: "1px solid #ddd",
borderRadius: 15,
padding: 18,
marginBottom: 15,
cursor: "pointer",
}}
>
<div
style={{
display: "flex",
gap: 15,
alignItems: "center",
}}
>
<div
style={{
fontSize: 34,
}}
>
{ride.icon}
</div>

<div>
<h3
style={{
margin: 0,
}}
>
{ride.name}
</h3>

<small>
{ride.description}
</small>

<br />

<small>
{ride.time}
</small>
</div>
</div>

<h3>{ride.price}</h3>
</div>
))}

<button
disabled={!selectedRide}
onClick={() => alert("Ride confirmed successfully!")}
style={{
width: "100%",
padding: 18,
border: "none",
borderRadius: 14,
marginTop: 20,
background: selectedRide ? "#000" : "#bbb",
color: "#fff",
fontSize: 18,
fontWeight: "bold",
cursor: selectedRide ? "pointer" : "default",
}}
>
Confirm Ride
</button>
</div>
</div>
);
}

export default RideOptions;
