//function
//to be called when the user clicks on a marker
//will highlight div corresponding to the clicked
//marker
function captureMarkerClicks() {
    console.log(this.title);

    for (var i = 0; i < divArray.length; i++) {
        divArray[i].css('background-color', 'white');
    }
    var i = 0;
    var isFound = false;
    while (isFound === false && i < divArray.length) {
        console.log(divArray[i][0].childNodes[0].innerText.indexOf(this.title));
        if (divArray[i][0].childNodes[0].innerText.indexOf(this.title) !== -1) {
            divArray[i].css('background-color', '#fefbd8');
            isFound = true;
        } else {
            i++;
        }
    }
}