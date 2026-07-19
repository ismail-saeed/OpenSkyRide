import { createContext, useContext, useState } from "react";

const RideContext = createContext();

export function RideProvider({ children }) {
// Pickup
const [pickup, setPickup] = useState("");

// Destination
const [destination, setDestination] = useState("");

// Google Places Objects
const [pickupPlace, setPickupPlace] = useState(null);
const [destinationPlace, setDestinationPlace] = useState(null);

// Directions
const [directions, setDirections] = useState(null);

// Route Info
const [distance, setDistance] = useState("");
const [duration, setDuration] = useState("");

// Selected Ride
const [selectedRide, setSelectedRide] = useState(null);

// Driver
const [driver, setDriver] = useState(null);

// Clear Current Trip
const clearTrip = () => {
setDestination("");
setDestinationPlace(null);
setDirections(null);
setDistance("");
setDuration("");
setSelectedRide(null);
setDriver(null);
};

return (
<RideContext.Provider
value={{
pickup,
setPickup,

destination,
setDestination,

pickupPlace,
setPickupPlace,

destinationPlace,
setDestinationPlace,

directions,
setDirections,

distance,
setDistance,

duration,
setDuration,

selectedRide,
setSelectedRide,

driver,
setDriver,

clearTrip,
}}
>
{children}
</RideContext.Provider>
);
}

export function useRide() {
const context = useContext(RideContext);

if (!context) {
throw new Error("useRide must be used inside RideProvider");
}

return context;
}