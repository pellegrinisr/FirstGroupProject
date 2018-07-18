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
    console.log(results[0]);
    console.log(status);
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        var request = {
            placeId: results[0].place_id,
            fields: ['website', 'formatted_phone_number', 'photos', 'name', 'formatted_address']
        };

        service = new google.maps.places.PlacesService(map);
        service.getDetails(request, detailsCallback);
        //$('#description').html('');
        
        
    }
}

function detailsCallback(place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        
        var newPlaceDiv = $('<div>').addClass('output');
        var nameDiv = $('<div>').addClass('name');
        if (place.name === 'Downtown Santa Monica') {
            nameDiv.html('Third Street Promenade');
        } else {
            nameDiv.html(place.name);
        }
        newPlaceDiv.append(nameDiv);
        var addressDiv = $('<div>').addClass('address');
        addressDiv.html(place.formatted_address);
        newPlaceDiv.append(addressDiv);
        // var ratingDiv = $('<div>').addClass('rating');
        // ratingDiv.html("Google's Rating: " + results[0].rating);
        // newPlaceDiv.append(ratingDiv);
        var phoneDiv = $('<div>').addClass('phone');
        phoneDiv.html(place.formatted_phone_number);
        newPlaceDiv.append(phoneDiv);
        var urlDiv = $('<div>').addClass('url');
        var linkTag = "<a href='" + place.website + "' target='_blank'>" + place.name + "</a>";
        urlDiv.html(linkTag);
        newPlaceDiv.append(urlDiv);
        $('#description').append(newPlaceDiv);
        divArray.push(newPlaceDiv);
        console.log(divArray);
        // var priceDiv = $('<div>').addClass('output price');
        // priceDiv.html('Price: ' + results[0].price_level);
        // outputDiv.append(priceDiv);
    }
}