var map;

function initMap() {
    map = L.map('map').setView([49.65260985622448, 23.852961768567724], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {grayscale: true}).addTo(map);

    var marker = L.marker([49.65260985622448, 23.852961768567724]).addTo(map);

}

document.addEventListener('DOMContentLoaded', function() {
    initMap();
});