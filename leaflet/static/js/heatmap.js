var myMap = L.map("map", {
  center: [36.1717, -86.9562],
  zoom: 10
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);


d3.csv("static/js/noaa_storm_data.csv").then(function(tornado, err) {
  if (err) throw err;
    // parse data
    tornado.forEach(function(data) {
      data.BEGIN_LAT = +data.BEGIN_LAT;
      data.BEGIN_LON = +data.BEGIN_LON;
      data.END_LAT = +data.END_LAT;
      data.END_LON = +data.END_LON;
      

      const coord1 = [data.BEGIN_LAT, data.BEGIN_LON];
      const coord2 = [data.END_LAT, data.END_LON];

      // layer group with begin and end markers, snake animation and popup
      const route = L.layerGroup([
        L.marker(coord1).bindPopup("<b></h3>Begin Lat, Lon: " + coord1 + " </h3><hr>Begin Date: " + data.BEGIN_DATE + " </h3><hr>F Scale: " 
        + data.TOR_F_SCALE + " </h3><hr>Tornado Length: " + data.TOR_LENGTH + " </h3><hr>Tornado Width: " + data.TOR_WIDTH),
        L.polyline([coord1, coord2]),
        L.marker(coord2).bindPopup("<h3>End Lat, Lon: " + coord2 + "</h3>")
      ], { snakingPause: 200 });
      route.addTo(myMap).snakeIn();

      // makeWeatherIcon(icon, markerColor = "red", iconColor = "white",
      // extraClasses = NULL)
      // weatherIcons(icon, markerColor = "red", iconColor = "white",
      // extraClasses = NULL)
      // iconSet = weatherIconList(
      // tornado = makeWeatherIcon(icon = "tornado")
      // )
  
      // iconSet[c("tornado")]
      // // leaflet() %>%
      // //   addTiles() %>%
      //   addWeatherMarkers(
      //     coord1, coord2,
      //     label = "This is a label",
      //     icon = makeWeatherIcon(
      //       icon = "hot",
      //       iconColor = "#ffffff77",
      //       markerColor = "blue"
        //   )
        // )
    });
  });
    
  

