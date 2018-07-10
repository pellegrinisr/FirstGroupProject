
var map;
function initMap() {
    console.log('initMap called');
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.9850, lng: -118.4695},
    zoom: 15
    });
}
