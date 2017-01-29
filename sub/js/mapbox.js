mapboxgl.accessToken = 'pk.eyJ1IjoibXVzaHJvb212diIsImEiOiJjaXllaHY2bjMwMHcyMndwZTU2Y3VpNGM5In0.VssUdRXRxDcRAK-JB4OifQ';

var map = new mapboxgl.Map({
          container: 'map',
          zoom: 1.3,
          style: 'mapbox://styles/mapbox/outdoors-v10',
          center: [-178, 30],
});

//var popup = new mapboxgl.Popup({closeOnClick: false})
     //.setLngLat([-96, 37.8])
     //.setHTML('<h1>Hello World!</h1>')
     //.addTo(map);
      
map.on('load', function () {

    // Add a layer showing the places.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Luoyang, Henan, China</strong> <br> ?-2008 <br> Born when peonies bloomed. <br> My forever home.",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [112.4540, 34.6197]
                    }
                }, 

                    {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Zhengzhou, Henan, China</strong> <br> 2008-2011, High School Diploma <br> Top 0.05% in the NCEE, a.k.a. Gaokao <br>2nd Prize in the National Mathematics Olympiad 2010",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [113.6253, 34.7466]
                    }
                }, 
                                
                    {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Shatin, Hong Kong</strong> <br><em>2011-2015, B.B.A. at the Chinese University of Hong Kong</em><br> Life in the mountains by the sea.",
                        "icon": "harbor"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.2074, 22.4198]
                    }
                }, 
                    
                    {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Chapel Hill, NC</strong> <br> <em>2014, exchange student at UNC-Chapel Hill<br> Kenan-Flager Business School </em><br> Go Tar Heels!",
                        "icon": "town-hall"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-79.0558, 35.9132]
                    }
                }, 
                    
                    {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Davis, CA</strong><br> <em>2014, summer sessions at UC-Davis</em><br>Constantly fly back 'cuz my family is there.",
                        "icon": "bicycle"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-121.7617, 38.5382]
                    }
                }, 
                    
                    {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>New York, NY</strong> <br><em>2015-2016, M.A. at Columbia University </em><br> Fun projects grew here. <br> Seeking full-time job opportunities.",
                        "icon": "zoo"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-73.9626, 40.8075]
                    }
                    
              }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
        }
    });
});            
      
      
      
// When a click event occurs near a place, open a popup at the location of
// the feature, with description HTML from its properties.
map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['places'] });

    if (!features.length) {
        return;
    }

    var feature = features[0];

    // Populate the popup and set its coordinates
    // based on the feature found.
    var popup = new mapboxgl.Popup()
        .setLngLat(feature.geometry.coordinates)
        .setHTML(feature.properties.description)
        .addTo(map);
});

// Use the same approach as above to indicate that the symbols are clickable
// by changing the cursor style to 'pointer'.
map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['places'] });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
});