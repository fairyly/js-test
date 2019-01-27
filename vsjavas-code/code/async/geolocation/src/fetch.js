/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var fetchLocation = function(onSuccess, onError) {
  var returnLocation = function(position) {
    var location = { 
      lat: position.coords.latitude, lon: position.coords.longitude };

    onSuccess(location);
  };
  
  navigator.geolocation.getCurrentPosition(returnLocation, onError);
};