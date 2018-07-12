var map;


$(document).ready(function() {
    var apiKey = "&key=AIzaSyC3sM_RkAYxBujzi6Qcox7GmkWQ1n-16Uc";
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    var service;
    var markerArray = [];

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

           var minPriceLevel;
           var maxPriceLevel;
           if ($('#radOne').prop('checked')) {
                minPriceLevel = 1;
                maxPriceLevel = 1;
           } else if ($('#radTwo').prop('checked')) {
               minPriceLevel = 2;
               maxPriceLevel = 2;
           } else {
               minPriceLevel = 3;
               maxPriceLevel = 4;
           }

            var request = {
                location: {lat: latCord, lng: longCord},
                radius: '200',
                query: 'restaurants',
                minPriceLevel: minPriceLevel,
                maxPriceLevel: maxPriceLevel
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
                console.log('placeID: ' + place.place_id);

                var marker = new google.maps.Marker({
                    position: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()},
                    map: map
                });
                markerArray.push(marker);
                console.log(place);
                var newRowDiv = $('<div>').addClass('row');
                var newColDiv = $('<div>').addClass('col-12 output-item');
                // newColDiv.append('<p>').html(place.name);
                // newColDiv.append('<p>').html(place.formatted_address)
                var namePTag = $('<p>').html(place.name);
                var addressPTag = $('<p>').html(place.formatted_address);
                var priceIcon = '';
                if (place.price_level === 1) {
                    priceIcon = '$';
                } else if (place.price_level === 2) {
                    priceIcon = '$$';
                } else if (place.price_level === 3) {
                    priceIcon = '$$$';
                } else if (place.price_level === 4) {
                    priceIcon = '$$$$';
                } 
                var costLevelPTag = $('<p>').html(priceIcon); 
                var ratingPTag = $('<p>').html('Rating: ' + place.rating);
                newColDiv.append(namePTag).append(addressPTag).append(ratingPTag).append(costLevelPTag);
                newRowDiv.append(newColDiv);
                $('.output').append(newRowDiv);   
                google.maps.event.addListener(marker, 'click', function() {
                    console.log(this.position.lat() + ', ' + this.position.lng());
                    console.log(this);
                   // alert()
                })
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