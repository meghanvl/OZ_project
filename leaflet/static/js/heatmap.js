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

var coord1 = [];
// var coord2 = [];

d3.csv("static/js/noaa_storm_data.csv").then(function(tornado, err) {
  if (err) throw err;
    // parse data
    tornado.forEach(function(data) {
      data.BEGIN_LAT = +data.BEGIN_LAT;
      data.BEGIN_LON = +data.BEGIN_LON;
      data.END_LAT = +data.END_LAT;
      data.END_LON = +data.END_LON;
      console.log(data.BEGIN_LAT)
      var line = [
      [data.BEGIN_LAT, data.BEGIN_LON],
      [data.END_LAT, data.END_LON] 
      ];
      L.polyline(line, {
        color: "purple"
      }).addTo(myMap);
      // L.marker([data.BEGIN_LAT, data.BEGIN_LON]).addTo(myMap);
    // var markers = L.marker([data.BEGIN_LAT, data.BEGIN_LON]).addTo(myMap);
    // var begin = L.marker([data.BEGIN_LAT, data.BEGIN_LON]).addTo(myMap);
    // markers.addLayer(L.marker([data.BEGIN_LAT, data.BEGIN_LON]));
    // myMap.addLayer(markers);
    });
  });
    
  // var firstLat = {};
  // for (var i = 0; i < tornado.length; i++) {
  //   firstLat.push(tornado[i].BEGIN_LAT)}; 
  //   console.log(firstLat);
  // });
  


  // d3.csv("static/js/noaa_storm_data.csv", function(data) {
  // {BEGIN_LAT: [], BEGIN_LON:[]}
  // // [{lat:value,lon:value},{}]
  // data.BEGIN_LAT.forEach(function(lat) { 


  // for (var i = 0; i < data.length; i++) {
  //   var location = [data[i].BEGIN_LAT, data[i].BEGIN_LON];
  //   console.log(location)
    

  //   // console.log(data[i])
    

  //   if (location) {
      
  //     console.log(location)
  //   }

      // .bindPopup(response[i].name));
      // console.log(+location.split(",",2),+location.split(",",1))
    // }
      
   // Add our marker cluster layer to the map
    
      // coord1.push(location);
      // coord2.push([location.END_LAT[0], location.END_LON[1]]);
      // L.marker([+location.split(",")[0],+location.split(",")[1]]).addTo(myMap);
      // console.log(coord1)
//     }
    
// });


  // / Coordinates for each point to be used in the polyline
  // console.log(coord1)
// var line = [
//   coord1
  // ];
// Create a polyline using the line coordinates and pass in some initial options
// L.polyline(line, {
//   color: "red"
// }).addTo(myMap);
  
  // var heat = L.heatLayer(coord1, {
  //   radius: 20,
  //   blur: 35
  // }).addTo(myMap);

