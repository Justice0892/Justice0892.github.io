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

let circleMarker01 = L.circle(coordinates,{
  color: "black",
  fillColor: "yellow",
  fillOpacity: 0.5,
  radius: 500
}).bindPopup("
             <center
            <h3>Hello from Paris!</h3>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/RmnRF_lNDbA?si=2Xz0tpgmtffGEMI0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             </center>").addTo(map);
             
