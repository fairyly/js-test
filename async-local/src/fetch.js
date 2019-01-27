let fetchLocal = function(onSuccess, onError) {
  let returnLocal = function(position) {
    let local = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    };
    onSuccess(local);
  };
  navigator.geolocation.getCurrentPosition(returnLocal, onError);
}
