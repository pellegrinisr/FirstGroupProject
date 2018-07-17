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
        var contentString = '<img src=' + results[0].icon + '>';
        console.log(contentString);
        //var contentDiv = $('<div>').addClass('info-window-content');
        var infoWindow = new google.maps.InfoWindow({
            content: contentString,
            position: {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()}
        })
        console.log(infoWindow);
        infoWindow.open(map);
    }
}