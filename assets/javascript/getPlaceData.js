//will make the call to the google places api
//accepts two arguments: placeName is a string
//representing the name of the place.
//coordinates is a google LatLng object, or a
//LatLng literal (i.e {lat: ___, lng: ___})
function getPlaceData(placeName, coordinates) {
    console.log('getPlaceData called. ' + 'placeName: ' + placeName);
    var request = {
        location: coordinates,
        query: placeName
    };
    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, placeQueryCallback);
}
//function called by the google PlacesService.textSearch() function
function placeQueryCallback(results, status) {
    console.log('placeQueryCallback executed');
    console.log(status);
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        //$('#description').html('');
        console.log(results[0]);
        var newPlaceDiv = $('<div>').addClass('output');
        var nameDiv = $('<div>').addClass('name');
        if (results[0].name === 'Downtown Santa Monica') {
            nameDiv.html('Third Street Promenade');
        } else {
            nameDiv.html(results[0].name);
        }
        newPlaceDiv.append(nameDiv);
        var addressDiv = $('<div>').addClass('address');
        addressDiv.html(results[0].formatted_address);
        newPlaceDiv.append(addressDiv);
        var ratingDiv = $('<div>').addClass('rating');
        ratingDiv.html("Google's Rating: " + results[0].rating);
        newPlaceDiv.append(ratingDiv);
        $('#description').append(newPlaceDiv);
        divArray.push(newPlaceDiv);
        console.log(divArray);
        // var priceDiv = $('<div>').addClass('output price');
        // priceDiv.html('Price: ' + results[0].price_level);
        // outputDiv.append(priceDiv);
    }
}