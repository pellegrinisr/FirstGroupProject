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
        });
    });
});