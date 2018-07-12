$(document).ready(function() {
    function getCoordinates(addressString) {
        var convertedAddress = addressString.replace(' ', '+');
        var apiKey = "&key=AIzaSyC3sM_RkAYxBujzi6Qcox7GmkWQ1n-16Uc";
        var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    
        $.ajax({
            url: queryURL + convertedAddress + apiKey,
            method: 'GET'
        }).then(function(response) {
            console.log(response);
            var myLatLng = new google.maps.LatLng(response.results[0].geometry.location.lat, response.results[0].geometry.location.lng);
            console.log(myLatLng);
            return myLatLng
        });
    };
});
  
   