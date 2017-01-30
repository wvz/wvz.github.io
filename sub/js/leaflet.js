var mymap = L.map('map').setView([-178, 30], 1.3);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'map',
    accessToken: 'pk.eyJ1IjoibXVzaHJvb212diIsImEiOiJjaXllaHY2bjMwMHcyMndwZTU2Y3VpNGM5In0.VssUdRXRxDcRAK-JB4OifQ'
}).addTo(mymap);