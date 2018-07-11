$(document).ready(function() {
    var apiKey = "&key=AIzaSyC3sM_RkAYxBujzi6Qcox7GmkWQ1n-16Uc";
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    var map;
    $('#btn-submit').on('click', function(event) {
        event.preventDefault();
        var searchTerm = $('#destination').val().replace(' ', '+');
        console.log(searchTerm);

        var fullURL = queryURL + searchTerm + apiKey;
        $.ajax({
            url: fullURL,
            method: 'GET'
        }).then(function(response) {
            console.log(response);
            console.log(response.results[0].geometry.location.lat);
            var latCord = response.results[0].geometry.location.lat;
            console.log(response.results[0].geometry.location.lng);
            var longCord = response.results[0].geometry.location.lng;
            console.log($('#maps'));
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: latCord, lng: longCord},
                zoom: 15
            });
        });
    });
});
    
    

    //function that will send returned coordinates to the google maps api
//     function sendToMaps(lat, long) {
        
//         function initMap() {
//             map = new google.maps.Map(document.getElementById('map'), {
//                 center: {lat: lat, lng: long},
//                 zoom: 8
//             });
//         }
//     }
// });


//initial callback function for maps api
function initialMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.040713, lng: -118.2467693},
    zoom: 10
    });
}