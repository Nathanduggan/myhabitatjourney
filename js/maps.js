function initMap() {
  // The location of Uluru
  var uluru = {lat: 53.1424, lng: -7.6921};
   var uluru = {lat: -13.2543, lng: 34.3015};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}