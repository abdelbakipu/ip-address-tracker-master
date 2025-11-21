// var map = L.map('map').setView([51.505, -0.09], 13);
// let marker;
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// export function updateMap(lat,lng){
//     map.setView([lat,lng] ,13);
//     if(marker) marker.remove();
//     marker = L.marker([lat,lng]).addTo(map);
// }

import L from "leaflet";

let map;

export function updateMap(lat, lng) {
  if (!map) {
    map = L.map("map").setView([lat, lng], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);
  } else {
    map.setView([lat, lng], 13);
  }

  L.marker([lat, lng]).addTo(map);
}
