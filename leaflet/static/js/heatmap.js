// var myMap = L.map("map", {
//   center: [36.1717, -86.9562],
//   zoom: 10
// });


// L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//   tileSize: 512,
//   maxZoom: 18,
//   zoomOffset: -1,
//   id: "mapbox/streets-v11",
//   accessToken: API_KEY
// }).addTo(myMap);

// function createMaps(maps) {

  
//   d3.csv("static/js/noaa_storm_data.csv").then(function(tornado, err) {
//     if (err) throw err;
//     // parse data
//     tornado.forEach(function(data) {
//       data.BEGIN_LAT = +data.BEGIN_LAT;
//       data.BEGIN_LON = +data.BEGIN_LON;
//       data.END_LAT = +data.END_LAT;
//         data.END_LON = +data.END_LON;
        
        
//         const coord1 = [data.BEGIN_LAT, data.BEGIN_LON];
//         const coord2 = [data.END_LAT, data.END_LON];
        
        
//         const tornadoMark = L.ExtraMarkers.icon({
//           icon: "ion-ios-thunderstorm",
//           iconColor: "white",
//           markerColor: "blue-dark",
//           shape: "circle",
          
//         });
        
//         // layer group with begin and end markers, snake animation and popup
//         const route = L.layerGroup([
//           L.marker(coord1, {icon: tornadoMark}).bindPopup("<b></h3>Begin Lat, Lon: " + coord1 + " </h3><hr>Begin Date: " + data.BEGIN_DATE + " </h3><hr>F Scale: " 
//           + data.TOR_F_SCALE + " </h3><hr>Tornado Length: " + data.TOR_LENGTH + " </h3><hr>Tornado Width: " + data.TOR_WIDTH),
//           L.polyline([coord1, coord2]),
//           L.marker(coord2, {icon: tornadoMark}).bindPopup("<h3>End Lat, Lon: " + coord2 + "</h3>")
//         ], { snakingPause: 200 });
//         route.addTo(myMap).snakeIn();
        
        
//       });
//     });
    
//   d3.csv("static/js/cities.csv").then(function(cities, err) {
//     if (err) throw err;
//     console.log(cities)

//     cities.forEach(function(data) {
//       console.log(data);
      
//         data.Cloudiness = +data.Cloudiness;
//         data.Humidity = +data.Humidity;
//         data.Lat = +data.Lat;
//         data.Lng = +data.Lng;
//         data.Max_Temp = +data.Max_Temp;
//         data.Wind_Speed = +data.Wind_Speed;
        
//         var marker = L.marker([45.52, -122.67], {
//           draggable: true,
//           title: "My First Marker"
//         }).addTo(myMap);
        
//         // Binding a pop-up to our marker
//         marker.bindPopup("<h1>" + data.City + "</h1>");
        
//         //     var cityMarkers = ([data.Lat, data.Lng])
//         //     // .bindPopup("<h1>" + data.City + "</h1>")]);
//       //     console.log(cityMarkers);
      
      
//       //     // Add all the cityMarkers to a new layer group.
//       //     // Now we can handle them as one group instead of referencing each individually
//       //     var cityLayer = L.layerGroup(cityMarkers);
      
//       //     // Define variables for our tile layers
//       //     var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//       //     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//       //     maxZoom: 18,
//       //     id: "light-v10",
//       //     accessToken: API_KEY
//       //     });
      
//       //     var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//         //     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//         //     maxZoom: 18,
//         //     id: "dark-v10",
//       //     accessToken: API_KEY
//       //     });
      
//       //     // Only one base layer can be shown at a time
//       //     var baseMaps = {
//         //     Light: light,
//         //     Dark: dark
//       //     };
      
//       //     // Overlays that may be toggled on or off
//       //     var overlayMaps = {
//         //     Cities: cityLayer
//         //     };
        
//         //     // Create map object and set default layers
//         //     var myMap = L.map("map", {
//           //     center: [36.1717, -86.9562],
//       //     zoom: 10,
//       //     layers: [light, cityLayer]
//       //     });
      
//       //     // Pass our map layers into our layer control
//       //     // Add the layer control to the map
//       //     L.control.layers(baseMaps, overlayMaps).addTo(myMap);
      
      
      
      
//     });
    
//   });

// }


// Test

const lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

var layers = {
  Tornadoes: new L.LayerGroup(),
  Current_Weather: new L.LayerGroup(),
};

var myMap = L.map("map", {
  center: [36.1717, -86.9562],
  zoom: 10,
  layers: [
    layers.Tornadoes,
    layers.Current_Weather
  ]
});

lightmap.addTo(myMap);

const baseMaps = {
  "Tornado Events": layers.Tornadoes
};

const overlayMaps = {
  "Current Weather": layers.Current_Weather
};

L.control.layers(baseMaps, overlayMaps).addTo(myMap); 


d3.csv("static/js/noaa_storm_data.csv").then(function(tornado) {

  tornado.forEach(function(TornadoData) {
    TornadoData.BEGIN_LAT = +TornadoData.BEGIN_LAT;
    TornadoData.BEGIN_LON = +TornadoData.BEGIN_LON;
    TornadoData.END_LAT = +TornadoData.END_LAT;
    TornadoData.END_LON = +TornadoData.END_LON;

  
    const coord1 = [TornadoData.BEGIN_LAT, TornadoData.BEGIN_LON];
    const coord2 = [TornadoData.END_LAT, TornadoData.END_LON];
      
      
    const tornadoMark = L.ExtraMarkers.icon({
      icon: "icon ion-funnel",
      iconColor: "white",
      markerColor: "blue-dark",
      shape: "circle",

    });
      
      // layer group with begin and end markers, snake animation and popup
    const route = L.layerGroup([
      L.marker(coord1, {icon: tornadoMark}).bindPopup("<b></h3>Begin Lat, Lon: " + coord1 + " </h3><hr>Begin Date: " + TornadoData.BEGIN_DATE + " </h3><hr>F Scale: " 
      + TornadoData.TOR_F_SCALE + " </h3><hr>Tornado Length: " + TornadoData.TOR_LENGTH + " </h3><hr>Tornado Width: " + TornadoData.TOR_WIDTH),
      L.polyline([coord1, coord2]),
      L.marker(coord2, {icon: tornadoMark}).bindPopup("<h3>End Lat, Lon: " + coord2 + "</h3>")
    ], { snakingPause: 200 });
    route.addTo(myMap).snakeIn();
  });

  

  d3.csv("static/js/cities.csv").then(function(cities) {

      cities.forEach(function(CityData) {
        CityData.Cloudiness = +CityData.Cloudiness;
        CityData.Humidity = +CityData.Humidity;
        CityData.Lat = +CityData.Lat;
        CityData.Lng = +CityData.Lng;
        CityData.Max_Temp = +CityData.Max_Temp;
        CityData.Wind_Speed = +CityData.Wind_Speed;

        
        const weatherMark = L.ExtraMarkers.icon({
          icon: "icon ion-cloud",
          iconColor: "white",
          markerColor: "orange",
          shape: "circle"
        });

        // NOTE: newMarker was added to map and not layers.Current_Weather
        const newMarker = L.marker([CityData.Lat, CityData.Lng], {icon: weatherMark})
        newMarker.addTo(layers.Current_Weather);

        newMarker.bindPopup("<b></h3>City: " + CityData.City + "</h3><hr>Latitude: " + CityData.Lat + "</h3><hr>Longitude: " + CityData.Lng +
        "</h3><hr>Cloudiness: " + CityData.Cloudiness + "</h3><hr>Humidity: " + CityData.Humidity + "</h3><hr>Max Temperature: " + CityData.Max_Temp +
        "</h3><hr>Wind Speed: " + CityData.Wind_Speed);

      });










  });

  // const lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  //   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  //   tileSize: 512,
  //   maxZoom: 18,
  //   zoomOffset: -1,
  //   id: "mapbox/streets-v11",
  //   accessToken: API_KEY
  // });

  // const layers = {
  //   Tornadoes: new L.LayerGroup(),
  //   Current_Weather: new L.LayerGroup(),
  // };

  // const myMap = L.map("map", {
  //   center: [36.1717, -86.9562],
  //   zoom: 10,
  //   layers: [
  //     layers.Tornadoes,
  //     layers.Current_Weather
  //   ]
  // });

  // lightmap.addTo(myMap);

  // const overlays = {
  //   "Tornado Events": layers.Tornadoes,
  //   "Current Weather": layers.Current_Weather
  // };

  // L.control.layers(null, overlays).addTo(myMap);



});

L.control.layers(baseMaps, overlayMaps).addTo(myMap);  

