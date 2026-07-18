function BottomSheet({
pickup,
destination,
setPickup,
setDestination,
searchRoute,
}) {
return (
<div
style={{
position: "absolute",
bottom: 0,
left: 0,
right: 0,
background: "#fff",
borderTopLeftRadius: 32,
borderTopRightRadius: 32,
padding: 20,
zIndex: 100,
boxShadow: "0 -10px 30px rgba(0,0,0,.18)",
}}
>
{/* Handle */}
<div
style={{
width: 55,
height: 6,
background: "#D8D8D8",
borderRadius: 50,
margin: "0 auto 18px",
}}
/>

{/* Logo */}
<h2
style={{
textAlign: "center",
margin: 0,
fontSize: 30,
fontWeight: 700,
}}
>
<span style={{ color: "#111" }}>Open</span>
<span style={{ color: "#FFD400" }}>SkyRide</span>
</h2>

<p
style={{
textAlign: "center",
color: "#777",
marginTop: 6,
marginBottom: 24,
}}
>
Request a ride
</p>

{/* Search Card */}
<div
style={{
background: "#F5F5F5",
borderRadius: 18,
padding: 16,
marginBottom: 20,
}}
>
<input
value={pickup}
onChange={(e) => setPickup(e.target.value)}
placeholder="📍 Enter pickup location"
style={{
width: "100%",
padding: 15,
borderRadius: 12,
border: "1px solid #E5E5E5",
marginBottom: 12,
fontSize: 16,
boxSizing: "border-box",
outline: "none",
}}
/>

<input
value={destination}
onChange={(e) => setDestination(e.target.value)}
placeholder="🏁 Where are you going?"
style={{
width: "100%",
padding: 15,
borderRadius: 12,
border: "1px solid #E5E5E5",
fontSize: 16,
boxSizing: "border-box",
outline: "none",
}}
/>
</div>

{/* Quick Destinations */}
<div
style={{
display: "flex",
gap: 10,
marginBottom: 20,
overflowX: "auto",
}}
>
{["🏠 Home", "💼 Work", "⭐ Favorites"].map((item) => (
<div
key={item}
style={{
background: "#F5F5F5",
padding: "10px 16px",
borderRadius: 30,
whiteSpace: "nowrap",
fontWeight: 600,
fontSize: 14,
}}
>
{item}
</div>
))}
</div>

<button
onClick={searchRoute}
style={{
width: "100%",
padding: 16,
borderRadius: 16,
border: "none",
background: "#FFD400",
color: "#111",
fontSize: 18,
fontWeight: 700,
cursor: "pointer",
}}
>
Find Ride
</button>
</div>
);
}

export default BottomSheet;



