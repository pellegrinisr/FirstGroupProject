//function
//to be called when the user clicks on a marker
//will highlight div corresponding to the clicked
//marker


function captureMarkerClicks() {
    if (submitClicked === true) {
        console.log(this);

        for (var i = 0; i < divArray.length; i++) {
            divArray[i].css('background-color', 'white');
        }
        var i = 0;
        var isFound = false;
        while (isFound === false && i < divArray.length) {
            console.log(divArray[i][0].childNodes[0].innerText);
            if (divArray[i][0].childNodes[0].innerText.indexOf(this.title) !== -1) {
                divArray[i].css('background-color', '#fefbd8');
                isFound = true;
            } else {
                i++;
            }
        }
    } else {
        var request = {
            location: {lat: this.position.lat(), lng: this.position.lng()},
            query: this.title
        };

        service.textSearch(request, placeSearchQueryCallback);
        
    }
}

//callback function for PlacesServices textSearch() that
//executes if the user clicks a marker before clicking 
//on the submit button
function placeSearchQueryCallback(results, status) {
    console.log('textSearch called');
    console.log(status);
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);

        var request = {
            placeId: results[0].place_id,
            fields: ['name', 'website', 'formatted_phone_number', 'photos', 'geometry', 'formatted_address']
        };
  
        service = new google.maps.places.PlacesService(map);
        service.getDetails(request, callback);
    }
}
//callback fuction for the PlacesService getDetails method
function callback(place, status) {
    console.log(status);
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(place);
        var contentString = "<div class='info-window-content'>" + "<p>" + place.name + "</p><p>" + place.formatted_address + "</p><p>" + place.formatted_phone_number + "</p><p><a href='" + place.website + "'target='_blank'>" + place.website + "</a></p></div>"
        // var contentDiv = $('<div>').addClass('info-window-content');
        // var nameP = $('<p>').html(place.name);
        // var phoneP = $('<p>').html(place.formatted_phone_number);
        // var siteP = $('<p>').html(place.website);
        // var image = $('<img>').attr('src', place.photos[0]);
        // contentDiv.append(nameP).append(phoneP).append(siteP);
        var infoWindow = new google.maps.InfoWindow({
            content: contentString,
            position: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}
        });
        infoWindow.open(map);
    }
}
