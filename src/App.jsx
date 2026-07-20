import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchDestination from "./pages/SearchDestination";
import RideOptions from "./pages/RideOptions";
import FindingDriver from "./pages/FindingDriver";

function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/search" element={<SearchDestination />} />
<Route path="/ride-options" element={<RideOptions />} />
<Route path="/finding-driver" element={<FindingDriver />} />
</Routes>
</BrowserRouter>
);
}

export default App;


