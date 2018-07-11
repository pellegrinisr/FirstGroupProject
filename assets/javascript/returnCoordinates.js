var map;

$(document).ready(function() {
    var apiKey = "&key=AIzaSyC3sM_RkAYxBujzi6Qcox7GmkWQ1n-16Uc";
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

    $('#btn-submit').on('click', function(event) {
        event.preventDefault();
        var searchTerm = $('#destination').val().replace(' ', '+');
        console.log(searchTerm);
        var latCord;
        var longCord;
        var fullURL = queryURL + searchTerm + apiKey;
        $.ajax({
            url: fullURL,
            method: 'GET'
        }).then(function(response) {
            console.log(response);
            console.log(response.results[0].geometry.location.lat);
            latCord = response.results[0].geometry.location.lat;
            console.log(response.results[0].geometry.location.lng);
            longCord = response.results[0].geometry.location.lng;
            //console.log($('#maps'));
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: latCord, lng: longCord},
                zoom: 15
                
            });

            var request = {
                location: {lat: latCord, lng: longCord},
                radius: '200',
                query: 'restaurant',
                minPriceLevel: 3
            }

            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);
        });

    });


    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            $('.output').html('');
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                if (place.rating >= 4) {
                    var marker = new google.maps.Marker({
                        position: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()},
                        map: map
                    })
                    console.log(place);
                    var newRowDiv = $('<div>').addClass('row');
                    var newColDiv = $('<div>').addClass('col-12 output-item');
                    // newColDiv.append('<p>').html(place.name);
                    // newColDiv.append('<p>').html(place.formatted_address)
                    var namePTag = $('<p>').html(place.name);
                    var addressPTag = $('<p>').html(place.formatted_address);
                    newColDiv.append(namePTag).append(addressPTag);
                    newRowDiv.append(newColDiv);
                    $('.output').append(newRowDiv);
                }   
            }
        }
    }


});

//initial callback function for maps api
function initialMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.040713, lng: -118.2467693},
    zoom: 10
    });
}