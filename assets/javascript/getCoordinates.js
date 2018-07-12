var address = '21720 Thistledown Circle Yorba Linda Ca';
var convertedAddress = address.replace(' ', '+');
var apiKey = "&key=AIzaSyC3sM_RkAYxBujzi6Qcox7GmkWQ1n-16Uc";
var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

$.ajax({
    url: queryURL + convertedAddress + apiKey,
    method: 'GET'
}).then(function(response) {
    console.log(response);
});