import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchDestination from "./pages/SearchDestination";

function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/search" element={<SearchDestination />} />
</Routes>
</BrowserRouter>
);
}

export default App;

