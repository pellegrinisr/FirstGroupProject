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

function filterObjectArray(location, type, price) {
    var filteredByLocation = [];
    var filteredByPrice = [];
    var filteredByType = [];

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
        console.log(type);
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
    console.log(filteredByType);
    if (filteredByType.length === 0) {
        $('#description').html("I'm Sorry, You're search did not return any results");
    } 
    // else {
    //     for (var i = 0; i < filteredByType.length; i++) {
    //         getPlaceData(filteredByType[i].name, filteredByType[i].coordinates);
    //     }
    // }
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

