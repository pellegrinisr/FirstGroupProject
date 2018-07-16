var markerArray = [];

function placeMarker(coordinates, name) {
    var marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        title: name
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
        placeMarker(objectArray[i].coordinates, objectArray[i].name);
    }
}