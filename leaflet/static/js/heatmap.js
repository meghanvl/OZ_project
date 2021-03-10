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

// var queue = d3.queue();

// d3.csv("noaa_storm_data.csv").then(function(response) {

//   console.log(response);

//   response.forEach(function(data) {
//     queue.defer(d3.csv, data);
//     data.EVENT_ID = +data.EVENT_ID;
//   });

  var coord1 = [];
  var coord2 = [];

  for (var i = 0; i < data.length; i++) {
    var location = data[i].location;

    if (location) {
      heatArray.push([location.coordinates[1], location.coordinates[0]]);
    }
  }

  var heat = L.heatLayer(heatArray, {
    radius: 20,
    blur: 35
  }).addTo(myMap);

// });
