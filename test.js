
var map;
function initMap() {
    console.log('initMap called');
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.0486799, lng: -118.2556317},
    zoom: 15
    });
}
