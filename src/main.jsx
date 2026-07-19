import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

import { RideProvider } from "./context/RideContext";

createRoot(document.getElementById("root")).render(
<StrictMode>
<RideProvider>
<App />
</RideProvider>
</StrictMode>
);