/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
/*
var createURL = function(latitude, longitude) {
  return 'http://maps.google.com?q=' + latitude + ',' + longitude;
}
*/

var createURL = function(latitude, longitude) {
  if (latitude && longitude)
    return 'http://maps.google.com?q=' + latitude + ',' + longitude;
  return '';
};

var setLocation = function(window, url) {
  window.location = url;
};

var locate = function() {
 navigator.geolocation.getCurrentPosition(onSuccess, onError);
};

/*
var onError = function() {}
var onSuccess = function() {}
*/

var onError = function(error) {
  document.getElementById('error').innerHTML = error.message;
};

/*
var onSuccess = function(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  
  createURL(latitude, longitude);
}   
*/

var onSuccess = function(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  
  var url = createURL(latitude, longitude);
  setLocation(window, url);
};
