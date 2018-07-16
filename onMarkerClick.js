//will make the call to the google places api
//accepts two arguments: placeName is a string
//representing the name of the place.
//coordinates is a google LatLng object, or a
//LatLng literal (i.e {lat: ___, lng: ___})
function getPlaceData(placeName, coordinates) {
    var request = {
        location: coordinates,
        query: placeName
    };
    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, placeQueryCallback);
}
//function called by the google PlacesService.textSearch() function
function placeQueryCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        var outputDiv = $('#description');
        outputDiv.html('');
        console.log(results[0]);
        var nameDiv = $('<div>').addClass('output name');
        nameDiv.html(results[0].name);
        outputDiv.append(nameDiv);
        var addressDiv = $('<div>').addClass('output address');
        addressDiv.html(results[0].formatted_address);
        outputDiv.append(addressDiv);
        var ratingDiv = $('<div>').addClass('output rating');
        ratingDiv.html("Google's Rating: " + results[0].rating);
        outputDiv.append(ratingDiv);
        // var priceDiv = $('<div>').addClass('output price');
        // priceDiv.html('Price: ' + results[0].price_level);
        // outputDiv.append(priceDiv);
    }
}

//function
//to be called when the user clicks on a marker
//will call the getPlaceData(string, LatLng) function,
function captureMarkerClicks() {
    var placeName = this.title;
    var coordinates = {lat: this.position.lat(), lng: this.position.lng()};
    getPlaceData(placeName, coordinates);
}