	  function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: {lat: 54.5260, lng: 15.2551},
          center: {lat: 8.7832, lng: 34.5085},
          mapTypeId: 'terrain'
        });
        
      
        

        var flightPlanCoordinates = [
          {lat: 53.3498, lng: -6.2603},
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
        