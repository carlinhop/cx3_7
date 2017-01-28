var app = function(){
  var map;
  var infowindow;


  map = new google.maps.Map(document.getElementById('main-map'), {
    center: {lat: -33.867, lng: 151.195},
    zoom: 15
  });

  

function initMap(event){
  
    var city = {lat: event.latLng.lat(), lng: event.latLng.lng()};
    console.log(city);

    map = new google.maps.Map(document.getElementById('main-map'), {
      center: city,
      zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: city,
      radius: 500,
      type: ['store']
    }, callback);
    console.log(service);
    map.addListener('click',initMap);
}  

  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }

  map.addListener('click',initMap);
}


window.onload = app;