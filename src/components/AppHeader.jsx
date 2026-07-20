import { useNavigate } from "react-router-dom";
import theme from "../styles/theme";

function AppHeader({
title,
subtitle,
showBack = true,
}) {
const navigate = useNavigate();

return (
<div
style={{
background: theme.colors.black,
color: theme.colors.white,
padding: "18px 20px",
borderBottomLeftRadius: 24,
borderBottomRightRadius: 24,
boxShadow: theme.shadow.card,
}}
>
<div
style={{
display: "flex",
alignItems: "center",
gap: 16,
}}
>
{showBack && (
<button
onClick={() => navigate(-1)}
style={{
width: 42,
height: 42,
border: "none",
borderRadius: "50%",
cursor: "pointer",
background: theme.colors.primary,
color: theme.colors.black,
fontSize: 20,
fontWeight: "bold",
}}
>
←
</button>
)}

<div>
<h2
style={{
margin: 0,
color: theme.colors.primary,
fontSize: 26,
fontWeight: 700,
}}
>
{title}
</h2>

{subtitle && (
<p
style={{
marginTop: 4,
marginBottom: 0,
color: "#DDDDDD",
fontSize: 14,
}}
>
{subtitle}
</p>
)}
</div>
</div>
</div>
);
}

export default AppHeader;
