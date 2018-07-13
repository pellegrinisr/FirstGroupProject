var map;
var placeName;

$(document).ready(function() {
 
    var apiKey = "&key=AIzaSyC3sM_RkAYxBujzi6Qcox7GmkWQ1n-16Uc";
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    var service;
    $('#submit').on('click', function(event) {
       // console.log(objectArray.length);
        event.preventDefault();
       for (var i = 0; i < objectArray.length; i++) {
            console.log('before ajax call: ' + objectArray[i]);
            //console.log(objectArray[i].name);
            var searchTerm = objectArray[i].location;
            placeName = objectArray[i].name;
            //console.log($('#description').html());
            $.ajax({
                url: queryURL + searchTerm + apiKey,
                method: "GET"
            }).then(function(response) {
                //console.log(response);
               // console.log(objectArray[i].name)
              console.log(placeName);
               console.log('response: ' + JSON.stringify(response));
               
                var request = {
                    location: {lat: response.results[0].geometry.location.lat, lng: response.results[0].geometry.location.lng},
                    query: placeName
                };
                console.log(request);
                service = new google.maps.places.PlacesService(map);
                service.textSearch(request, placeQueryCallback);
            });
        }
    })
    

    function placeQueryCallback(results, status) {
        console.log('function called');
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            console.log('success');
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                console.log(place);
            }

        }   
    }
});


//initial callback function for maps api
function placeQueryCallback(results, status) {
    console.log('function called');
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log('success');
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            console.log(place);
        }

    }   
}
function initialMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.040713, lng: -118.2467693},
        zoom: 10
    }); 
    // for (var i = 0; i < objectArray.length; i++) {
    //     console.log('before ajax call: ' + objectArray[i]);
    //     //console.log(objectArray[i].name);
    //     var searchTerm = objectArray[i].location;
    //     placeName = objectArray[i].name;
    //     //console.log($('#description').html());
    //     $.ajax({
    //         url: queryURL + searchTerm + apiKey,
    //         method: "GET"
    //     }).then(function(response) {
    //         console.log(placeName);
    //         //console.log(response);
    //        // console.log(objectArray[i].name)
    //        console.log('inside then function of ajax ccall: ' + objectArray[0].name);
    //        console.log('response: ' + JSON.stringify(response));
           
    //         var request = {
    //             location: {lat: response.results[0].geometry.location.lat, lng: response.results[0].geometry.location.lng},
    //             query: placeName
    //         };
    //         service = new google.maps.places.PlacesService(map);
    //         service.textSearch(request, placeQueryCallback);
    //     });
    // }

}