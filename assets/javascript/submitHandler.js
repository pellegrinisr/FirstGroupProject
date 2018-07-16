var apiKey = "&key=AIzaSyC3sM_RkAYxBujzi6Qcox7GmkWQ1n-16Uc";
var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

//event handler for the submit button
$('#submit').on('click', function(event) {
    event.preventDefault();
    for (var i = 0; i < markerArray.length; i++) {
        markerArray[i].setVisible(true);
    }
    $('#description').html('');
    var location = $('#location').val();
    var type = $('#type').val();
    var price = $('#price').val();
    var priceInt;
    if (price === '$') {
        priceInt = 1;
    } else if (price === '$$') {
        priceInt = 2;
    } else if (price === '$$$') {
        priceInt = 3;
    } else {
        priceInt = 'All';
    }
    filterObjectArray(location, type, priceInt);
});

//function to handle ajax call
//if user selects a location
//so that we can recenter the map
function getCoordinates(searchTerm) {
    $.ajax({
        url: queryURL + searchTerm + apiKey,
        method: "GET",
        success: function(response) {
            console.log(response);
            map.setCenter({lat: response.results[0].geometry.location.lat, lng: response.results[0].geometry.location.lng});
            map.setZoom(12);
        },
        error: function(error) {
            alert.log(error.status + error.statusTest);
        }
    });
}

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
        //outputDiv.html('');
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


function filterObjectArray(location, type, price) {
    var filteredByLocation = [];
    var filteredByPrice = [];
    var filteredByType = [];
    var refocusCoords;

    if (location !== 'All') {
        getCoordinates(location);
        for (var i = 0; i < objectArray.length; i++) {
            if (objectArray[i].location !== location) {
                searchForMarker(objectArray[i]);
            } else {
                //getPlaceData(objectArray[i].name, objectArray[i].coordinates);
                filteredByLocation.push(objectArray[i]);
            }
        } 
    } else {
        filteredByLocation = objectArray.slice();
    }
    if (price !== 'All') {
        for (var i = 0; i < filteredByLocation.length; i++) {
            if (filteredByLocation[i].price !== price) {
                searchForMarker(filteredByLocation[i]);
            } else {
               //getPlaceData(objectArray[i].name, objectArray[i].coordinates);
               filteredByPrice.push(filteredByLocation[i]);
            }
        }
    } else {
        filteredByPrice = filteredByLocation.slice();
    }
    if (type !== 'All') {
        for (var i = 0; i < filteredByPrice.length; i++) {
            if (filteredByPrice[i].type !== type) {
                searchForMarker(filteredByPrice[i]);
            } else {
                //getPlaceData(objectArray[i].name, objectArray[i].coordinates);
                filteredByType.push(filteredByPrice[i]);
            }
        }
    } else {
        filteredByType = filteredByPrice.slice();
    }
    if (filteredByType.length === 0) {
        $('#description').html("I'm Sorry, You're search did not return any results");
    } else {
        for (var i = 0; i < filteredByType.length; i++) {
            getPlaceData(filteredByType[i].name, filteredByType[i].coordinates);
        }
    }
}

function searchForMarker(placeObject) {
    var j = 0;
    var isFound = false;
    while (j < markerArray.length && isFound === false) {
        if (markerArray[j].title === placeObject.name) {
            console.log('true');
            markerArray[j].setVisible(false);
            isFound = true;
        } else {
           // markerArray[j].setVisible(true);
            j++;
        }
    }
}

