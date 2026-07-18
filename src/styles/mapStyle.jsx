const mapStyle = [
{
featureType: "administrative",
elementType: "labels.text.fill",
stylers: [{ color: "#6b7280" }],
},
{
featureType: "administrative.country",
elementType: "geometry.stroke",
stylers: [{ color: "#d1d5db" }],
},
{
featureType: "poi",
elementType: "labels.icon",
stylers: [{ visibility: "off" }],
},
{
featureType: "poi.business",
stylers: [{ visibility: "off" }],
},
{
featureType: "poi.school",
stylers: [{ visibility: "off" }],
},
{
featureType: "poi.medical",
stylers: [{ visibility: "simplified" }],
},
{
featureType: "poi.park",
elementType: "geometry.fill",
stylers: [
{ color: "#b8e6b3" },
{ saturation: 15 },
],
},
{
featureType: "road",
elementType: "geometry",
stylers: [{ color: "#ffffff" }],
},
{
featureType: "road",
elementType: "geometry.stroke",
stylers: [{ color: "#ececec" }],
},
{
featureType: "road.highway",
elementType: "geometry",
stylers: [{ color: "#fff5bf" }],
},
{
featureType: "road.highway",
elementType: "geometry.stroke",
stylers: [{ color: "#ffe066" }],
},
{
featureType: "road.arterial",
elementType: "geometry",
stylers: [{ color: "#ffffff" }],
},
{
featureType: "road.local",
elementType: "geometry",
stylers: [{ color: "#fafafa" }],
},
{
featureType: "transit",
stylers: [{ visibility: "off" }],
},
{
featureType: "water",
elementType: "geometry",
stylers: [{ color: "#b9e7ff" }],
},
{
featureType: "water",
elementType: "labels.text.fill",
stylers: [{ color: "#4a90c2" }],
},
{
featureType: "landscape",
elementType: "geometry",
stylers: [{ color: "#f6f8f5" }],
},
{
featureType: "landscape.man_made",
elementType: "geometry",
stylers: [{ color: "#f3f4f6" }],
},
{
featureType: "landscape.natural",
elementType: "geometry",
stylers: [{ color: "#eaf7e7" }],
},
{
featureType: "poi.attraction",
stylers: [{ visibility: "simplified" }],
},
{
featureType: "poi.government",
stylers: [{ visibility: "simplified" }],
},
{
featureType: "poi.place_of_worship",
stylers: [{ visibility: "simplified" }],
},
];

export default mapStyle;
