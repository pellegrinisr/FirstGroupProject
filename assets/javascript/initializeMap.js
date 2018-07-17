var markerArray = [];
var service;

function placeMarker(coordinates, name, type) {
    var iconLink;
    if (type === 'Restaurants') {
        iconLink = 'https://maps.gstatic.com/mapfiles/ms2/micons/restaurant.png';
    } else if (type === 'Hotels') {
        iconLink = 'https://maps.gstatic.com/mapfiles/ms2/micons/lodging.png';
    } else {
        iconLink = 'https://maps.gstatic.com/mapfiles/ms2/micons/camera.png';
    }
    var marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        title: name,
        icon: iconLink
    });
    markerArray.push(marker);
	google.maps.event.addListener(marker, 'click', captureMarkerClicks);
}


function initialMap() { 
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.040713, lng: -118.2467693},
        zoom: 11
    }); 

    for (var i = 0; i < objectArray.length; i++) {
        placeMarker(objectArray[i].coordinates, objectArray[i].name, objectArray[i].type    );
    }
    service = new google.maps.places.PlacesService(map);
}