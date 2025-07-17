//48.8575° N, 2.3514° E
let coordinates = [48.8575, 2.3514];

let map = L.map("map",{
  center: coordinates,
  zoom: 18 
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
