function RideSearch({
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
top: 20,
left: 20,
width: 380,
background: "#FFFFFF",
borderRadius: 24,
padding: 24,
zIndex: 10,
boxShadow: "0 15px 40px rgba(0,0,0,0.18)",
}}
>
<h2
style={{
textAlign: "center",
marginBottom: 8,
fontWeight: "700",
fontSize: "32px",
letterSpacing: "0.5px",
}}
>
<span style={{ color: "#111111" }}>Open</span>
<span style={{ color: "#FFD400" }}>SkyRide</span>
</h2>

<p
style={{
textAlign: "center",
color: "#666666",
fontSize: "14px",
marginBottom: 24,
}}
>
Your ride is just a few taps away
</p>

<input
value={pickup}
onChange={(e) => setPickup(e.target.value)}
placeholder="📍 Pickup Location"
style={{
width: "100%",
padding: "15px 16px",
borderRadius: 14,
border: "2px solid #FFD400",
marginBottom: 16,
fontSize: 16,
boxSizing: "border-box",
outline: "none",
}}
/>

<input
value={destination}
onChange={(e) => setDestination(e.target.value)}
placeholder="🏁 Destination"
style={{
width: "100%",
padding: "15px 16px",
borderRadius: 14,
border: "2px solid #FFD400",
marginBottom: 24,
fontSize: 16,
boxSizing: "border-box",
outline: "none",
}}
/>

<button
onClick={searchRoute}
style={{
width: "100%",
padding: 16,
background: "#FFD400",
color: "#111111",
border: "none",
borderRadius: 14,
fontSize: 18,
fontWeight: "700",
cursor: "pointer",
}}
>
Continue
</button>
</div>
);
}

export default RideSearch;