//function
//to be called when the user clicks on a marker
//will highlight div corresponding to the clicked
//marker
function captureMarkerClicks() {
    console.log(this);
    var coordinates = {lat: this.position.lat(), lng: this.position.lng()};
    getPlaceData(this.title, coordinates);
}