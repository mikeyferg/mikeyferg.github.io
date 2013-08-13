// Your JS code goes here.
navigator.geolocation.getCurrentPosition(function(pos) {
var latitude = pos.coords.latitude;
var longitude = pos.coords.longitude;
alert("Your position: " + latitude + ", " + longitude);
});