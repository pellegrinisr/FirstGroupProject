var map;
var apiKey = "&key=AIzaSyC3sM_RkAYxBujzi6Qcox7GmkWQ1n-16Uc";
var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var service;
var markerArray = [];


function handleSearch(searchTerm, placeName) {
    //console.log($('#description').html());
    console.log(searchTerm);
    console.log(placeName);
    $.ajax({
        url: queryURL + searchTerm + apiKey,
        method: "GET",
        success: function(response) {
            console.log(placeName);
            console.log(response);
            
            var request = {
                location: {lat: response.results[0].geometry.location.lat, lng: response.results[0].geometry.location.lng},
                query: placeName
            };
            console.log(request);
            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, placeQueryCallback);
        },
        error: function(error) {
            alert.log(error.status + error.statusTest);
        }
    });
}


//initial callback function for maps api
function placeQueryCallback(results, status, pagination) {
    console.log('placeQueryCallback function called');
    
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
        markerArray.push({
            position: {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()},
            map: map,
            title: results[0].name
        });
        //console.log('inside placeQueryCallback(), markerArray: ' + markerArray);
    }   
}
function initialMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.040713, lng: -118.2467693},
        zoom: 10
    }); 
    for (var i = 0; i < objectArray.length; i++) {
        handleSearch(objectArray[i].location, objectArray[i].name);
    }
}
setTimeout(function() {console.log(markerArray)}, 5000);