var myMap = L.map("map", {
  center: [37.0902, -95.7129],
  zoom: 5
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// var data = "..//data/noaa_storm_data.csv";

d3.csv("/data/noaa_storm_data.csv", function(data) {
  console.log(data[0]);
});

  var coord1 = [];
  // var coord2 = [];

  for (var i = 0; i < data.length; i++) {
    var location = data[i].location;

    if (location) {
      coord1.push([location.BEGIN_LAT[0], location.BEGIN_LON[1]]);
      // coord2.push([location.END_LAT[0], location.END_LON[1]]);
      console.log(coord1)
    }
  }

  // / Coordinates for each point to be used in the polyline
var line = [
  coord1,
  ];
// Create a polyline using the line coordinates and pass in some initial options
L.polyline(line, {
  color: "red"
}).addTo(myMap);
  
  // var heat = L.heatLayer(coord1, {
  //   radius: 20,
  //   blur: 35
  // }).addTo(myMap);

// });
