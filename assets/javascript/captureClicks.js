$(document).ready(function() {
    var apiKey = "&key=AIzaSyC3sM_RkAYxBujzi6Qcox7GmkWQ1n-16Uc";
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    $(document).on('click', '.dropdown-item', function(event) {
        var location = $(this).html().trim();
        //console.log(map);
        console.log(location);
        $.ajax({
            url: queryURL + location + apiKey,
            method: "GET",
            success: function(response) {
                var coordinates = {lat: response.results[0].geometry.location.lat, lng: response.results[0].geometry.location.lng};
                map.setCenter(coordinates);
                map.setZoom(14)
            },
            error: function(error) {
                alert.log(error.status + error.statusTest);
            }
        });
    })
});