var markers = new Array();
	// initMap Start
function initMap() {		
        // Create a new StyledMapType object, passing it an array of styles,
        // and the name to be displayed on the map type control.
    var styledMapType = new google.maps.StyledMapType(
[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
],
      {name: 'Styled Map'});
        /*  Create a map object, and include the MapTypeId to add
         to the map type control. */
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 30.266666, lng: -97.733330},
          zoom: 9.5,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          },
		  mapTypeControl: false,
		  zoomControl: false
        });
		
		var imageoption = {
		  url: base_url+'assets/css/images/map_location.png',
          size: new google.maps.Size(120, 120),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 32)
        };
		//var bounds ;
		var infowindow = new google.maps.InfoWindow({});
		var i = 0;
		//var data_val =document.querySelectorAll('.service-area-map');
		//console.log(data_val);
		document.querySelectorAll('.service-area-map1').forEach(event => {
				marker = new google.maps.Marker({
						title:event.getAttribute("data-title"),
						position: new google.maps.LatLng(event.getAttribute("data-lat"), event.getAttribute("data-lon")),				 
						icon: imageoption,
						map: map
					});
					
			markers.push(marker);
			//map.panToBounds(bounds);  
			/* Click event */
			google.maps.event.addListener(marker,'click', (function(marker, i) {
				return function() {
					var dir= event.getAttribute("data-title") + '<br><a href ="https://www.google.com/maps/search/?api=1&query='					+ event.getAttribute("data-lat") + ',' + event.getAttribute("data-lon") + '" target="_blank" >Get directions</a>';
					infowindow.setContent(dir)
					infowindow.open(map, marker)
					map.setZoom(10);		
					map.setCenter(marker.getPosition());
				}
				})(marker, i)
			)
			/* mouseover event */
			google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
				return function() {
				  $("#services_"+i).addClass("highlighted");
				  var elementOffset = $("#services_"+i).offset().top;
					if(elementOffset >= 1200)
					{
					$(".location-list").scrollTop(1010);
					}
					if(elementOffset <= 1200)
					{
					$(".location-list").scrollTop(0);
					}
				}
			  })(marker, i)
			)
			/* mouseout event */
			google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {			  
				return function() {
				  $("#services_"+i).removeClass("highlighted");
				} 
			  })(marker, i)
			)
			i++
		});

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
      }
      // initMap end
	  function triggerClick(i) {
			google.maps.event.trigger(markers[i], 'click');  
	  }