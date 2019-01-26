 function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: {lat: 54.5260, lng: 15.2551},
          mapTypeId: 'terrain'
        });
        
        var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
        
        var locations = [
            { lat: 53.3498, lng: -6.2603},
            { lat: -5.1521, lng: 46.1996},
            { lat: -16.0252, lng: 35.5083}
            ];
            
            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
                var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            });

        var flightPlanCoordinates = [
          {lat: 53.3498, lng: -6.2603},
          {lat: -5.1521, lng: 46.1996},
          {lat: -13.2543, lng: 34.3015},
          {lat: -16.0252, lng: 35.5083}
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF5733',
          strokeOpacity: 2.0,
          strokeWeight: 1
        });

        flightPath.setMap(map);
      }
        