function TopBar() {
return (
<div
style={{
position: "absolute",
top: 20,
left: 20,
right: 20,
zIndex: 200,
display: "flex",
justifyContent: "space-between",
alignItems: "center",
}}
>
<button
style={{
width: 50,
height: 50,
borderRadius: "50%",
border: "none",
background: "#FFFFFF",
boxShadow: "0 5px 15px rgba(0,0,0,.18)",
fontSize: 22,
cursor: "pointer",
}}
>
☰
</button>

<div
style={{
background: "#FFFFFF",
padding: "12px 20px",
borderRadius: 25,
boxShadow: "0 5px 15px rgba(0,0,0,.18)",
fontWeight: 700,
fontSize: 20,
}}
>
<span style={{ color: "#111111" }}>Open</span>
<span style={{ color: "#FFD400" }}>SkyRide</span>
</div>

<button
style={{
width: 50,
height: 50,
borderRadius: "50%",
border: "none",
background: "#FFD400",
color: "#111111",
fontSize: 22,
fontWeight: "bold",
cursor: "pointer",
boxShadow: "0 5px 15px rgba(0,0,0,.18)",
}}
>
👤
</button>
</div>
);
}

export default TopBar;