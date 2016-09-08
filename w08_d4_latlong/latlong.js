console.log('LatLong');

var places = [
{name: "place A", location: {lat: 3, long: 22}},
{name: "place B", location: {lat: 7, long: 27}},
{name: "place C", location: {lat: 5, long: 16}},
{name: "place D", location: {lat: 9, long: 19}},
];

var here = [
{name: "place X"}, location: {lat: 4, long: 20}},
];

function closest(lat, long, cur) {
  forEach (lat)
  (i = 0; i < lat; i++) {
    if (lat - cur)

    for (j = 0; j < long; j++) {
      console.log('lower');
    }
  }
}

// andrews code

function distance(lat1, lon1, lat2, lon2) {
 var R = 6371; // Radius of the earth in km
 var dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
 var dLon = (lon2 - lon1) * Math.PI / 180;
 var a =
    0.5 - Math.cos(dLat)/2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    (1 - Math.cos(dLon))/2;

 return R * 2 * Math.asin(Math.sqrt(a));
}

//  rays code

var myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
          {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
          {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
          {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
          {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
          {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]
// Load the google map API package that we will be using
google.load("visualization", "1", {packages:["map"]});

//My home city
var jinan = {lat:36.6512, long:117.1200};
//California Academy of Science
var cas = {lat:37.7699, long: -122.4661};

//Euclidine distance
function calDistance(p1, p2){
  var d = Math.sqrt( (p1.lat-p2.lat)*(p1.lat-p2.lat) + (p1.long-p2.long)*(p1.long-p2.long) );
  return d;
}

function getGeo(core, wheres){
  var dists = [];
  var dist_1 = [];
  wheres.forEach(function(p){
     var howFar = calDistance(core, {lat: p.location.lat, long: p.location.long});
     var current = {name: p.name, distance: howFar};
     dist_1[p.name] = howFar;
     dists.push(current);
  });
  return dists.sort(function (a, b) {
    if (a.distance > b.distance) {
      return 1;
    }
    if (a.distance < b.distance) {
      return -1;
    }
    return 0;
  });
}

getGeo(cas, myResults).forEach(
  function(p){
    console.log(p.name + " : " + p.distance);
  }
);


$(document).ready(function() {

  function markOnMap(loc_arr) {

             // Initialize a data table using the Google API.
             var table = new google.visualization.DataTable();
             table.addColumn('number', 'Lat');
             table.addColumn('number', 'Lon');
             table.addColumn('string', 'Name');

             // Insert all of the points into the data table.
             table.addRows(loc_arr.length);
             for (rowid = 0; rowid < loc_arr.length; rowid++) {
                  table.setCell(rowid, 0, loc_arr[rowid].location.lat);
                  table.setCell(rowid, 1, loc_arr[rowid].location.long);
                  table.setCell(rowid, 2, loc_arr[rowid].name);
             }

             // Render the data table into a map using Google Maps API.
             var map = new google.visualization.Map(document.getElementById('map_div'));
             map.draw(table, {showTip: true, showLine: true, lineWidth: 3, lineColor: '#009900'});
         }

 markOnMap(myResults);
});


// more rays code

var myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
          {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
          {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
          {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
          {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
          {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]
// Load the google map API package that we will be using
google.load("visualization", "1", {packages:["map"]});

//My home city
var jinan = {lat:36.6512, long:117.1200};
//California Academy of Science
var cas = {lat:37.7699, long: -122.4661};

//Euclidine distance
function calDistance(p1, p2){
  var d = Math.sqrt( (p1.lat-p2.lat)*(p1.lat-p2.lat) + (p1.long-p2.long)*(p1.long-p2.long) );
  return d;
}

function getGeo(core, wheres){
  var dists = [];
  var dist_1 = [];
  wheres.forEach(function(p){
     var howFar = calDistance(core, {lat: p.location.lat, long: p.location.long});
     var current = {name: p.name, distance: howFar};
     dist_1[p.name] = howFar;
     dists.push(current);
  });
  return dists.sort(function (a, b) {
    if (a.distance > b.distance) {
      return 1;
    }
    if (a.distance < b.distance) {
      return -1;
    }
    return 0;
  });
}

getGeo(cas, myResults).forEach(
  function(p){
    console.log(p.name + " : " + p.distance);
  }
);


$(document).ready(function() {

  function markOnMap(loc_arr) {

             // Initialize a data table using the Google API.
             var table = new google.visualization.DataTable();
             table.addColumn('number', 'Lat');
             table.addColumn('number', 'Lon');
             table.addColumn('string', 'Name');

             // Insert all of the points into the data table.
             table.addRows(loc_arr.length);
             for (rowid = 0; rowid < loc_arr.length; rowid++) {
                  table.setCell(rowid, 0, loc_arr[rowid].location.lat);
                  table.setCell(rowid, 1, loc_arr[rowid].location.long);
                  table.setCell(rowid, 2, loc_arr[rowid].name);
             }

             // Render the data table into a map using Google Maps API.
             var map = new google.visualization.Map(document.getElementById('map_div'));
             map.draw(table, {showTip: true, showLine: true, lineWidth: 3, lineColor: '#009900'});
         }

 markOnMap(myResults);
});
