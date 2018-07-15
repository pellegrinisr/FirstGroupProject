var map;
var apiKey = "&key=AIzaSyC3sM_RkAYxBujzi6Qcox7GmkWQ1n-16Uc";
var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var service;
$('#submit').on('click', function(event) {
    // console.log(objectArray.length);
    event.preventDefault();

})

function handleSearch(searchTerm, placeName) {
    //console.log($('#description').html());
    $.ajax({
        url: queryURL + searchTerm + apiKey,
        method: "GET",
        success: function(response) {
            console.log(placeName);
            //console.log('response: ' + JSON.stringify(response));
            console.log(response);
            var request = {
                location: {lat: response.results[0].geometry.location.lat, lng: response.results[0].geometry.location.lng},
                query: placeName
            };
            //console.log(request);
            //service = new google.maps.places.PlacesService(map);
            //service.textSearch(request, placeQueryCallback);
            var marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                title: name
            });
        },
        error: function(error) {
            alert.log(error.status + error.statusTest);
        }
    });
}

//===========================================
//This shouldn't be called
//===========================================
//initial callback function for maps api
function placeQueryCallback(results, status) {
    console.log('function called');
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        var marker = new google.maps.Marker({
            position: {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()},
            map: map,
            title: results[0].name
        });
        console.log('marker placed: ' + marker.title);
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
    //setTimeout(secondSearch, 5000);
}

// function secondSearch() {
//     console.log('secondSearch function called');
//     for (var i = 0; i < objectArray2.length; i++) {
//         handleSearch(objectArray2[i].location, objectArray2[i].name);
//     }
// }