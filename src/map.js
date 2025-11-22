import L from "leaflet";
import locIcon  from './assets/images/icon-location.svg';
let map;
let w = 46/1.5;
let h = 56/1.5;
let myIcon = L.icon({
  iconUrl: locIcon,
  iconSize: [w, h],
  iconAnchor: [w/2,h],
})
export function updateMap(lat, lng) {
  if (!map) {
    map = L.map("map").setView([lat, lng], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);
  } else {
    map.setView([lat, lng], 13);
  }

  L.marker([lat, lng],{icon : myIcon}).addTo(map);
}
