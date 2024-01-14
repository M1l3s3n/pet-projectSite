var map;

function initMap() {
    map = L.map('map').setView([49.83508248399536, 24.008341055404156], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {grayscale: true}).addTo(map);

    var marker = L.marker([49.83508248399536, 24.008341055404156]).addTo(map);

}

document.addEventListener('DOMContentLoaded', function() {
    initMap();
});