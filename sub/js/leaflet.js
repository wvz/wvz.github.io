
var map = L.map('map').setView([30, -178], 1.5);

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXVzaHJvb212diIsImEiOiJjaXllaHY2bjMwMHcyMndwZTU2Y3VpNGM5In0.VssUdRXRxDcRAK-JB4OifQ', {
    
    }).addTo(map);

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

var someFeatures = [{
    "type": "Feature",
    "properties": {
        "popupContent": "<strong>Luoyang, Henan, China</strong> <br> <em>Born when peonies bloomed.</em> <br> My forever home.",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-247.546, 34.6197]
    },
    }, {

    "type": "Feature",
    "properties": {
        "popupContent": "<strong>Zhengzhou, Henan, China</strong> <br> 2008-2011, High School Diploma <br> Top 0.05% in the NCEE, a.k.a. Gaokao <br>2nd Prize in the National Mathematics Olympiad 2010",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-246.3747, 34.7466]
    },
    }, {

    "type": "Feature",
    "properties": {
        "popupContent": "<strong>Shatin, Hong Kong</strong> <br><em>2011-2015, B.B.A. at the Chinese University of Hong Kong</em><br> Life in the mountains by the sea.",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-245.7926, 22.4198]
    },
    }, {

    "type": "Feature",
    "properties": {
        "popupContent": "<strong>Chapel Hill, NC</strong> <br> <em>2014, exchange student at UNC-Chapel Hill<br> Kenan-Flager Business School </em><br> Go Tar Heels!",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-79.0558, 35.9132]
    },
    }, {

    "type": "Feature",
    "properties": {
        "popupContent": "<strong>Davis, CA</strong><br> <em>2014, summer sessions at UC-Davis</em><br>Constantly fly back 'cuz my family is here.",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-121.7617, 38.5382]
    },
    }, {

    "type": "Feature",
    "properties": {
        "popupContent": "<strong>New York, NY</strong> <br><em>2015-2016, M.A. at Columbia University </em><br> Fun projects grew here. <br> Seeking full-time job opportunities.",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-73.9626, 40.8075]
    },
}];


L.geoJSON(someFeatures, {
    onEachFeature: onEachFeature
}).addTo(map);