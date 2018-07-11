var map;

$(document).ready(function() {
    var apiKey = "&key=AIzaSyC3sM_RkAYxBujzi6Qcox7GmkWQ1n-16Uc";
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

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
            var searchString = 'restaurants';
            var placesURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + searchString + 
                "&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@" + 
                latCord + ',' + longCord + apiKey;
            $.ajax({
                url: placesURL,
                method: 'GET'
            }).then(function(response) {
                console.log(response);
            });
        });

    });
});

//initial callback function for maps api
function initialMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.040713, lng: -118.2467693},
    zoom: 10
    });
}