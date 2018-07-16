$('#submit').on('click', function(event) {
    event.preventDefault();
    var location = $('#location').val();
    var type = $('#type').val();
    var price = $('#price').val();
    var priceInt;
    if (price === '$') {
        priceInt = 1;
    } else if (price === '$$') {
        priceInt = 2;
    } else if (price === '$$$') {
        priceInt = 3;
    } else {
        priceInt = 'All';
    }
    filterObjectArray(location, type, priceInt);
})


function filterObjectArray(location, type, price) {
    console.log(price);
    var priceInt;
    if (location !== 'All') {
        for (var i = 0; i < objectArray.length; i++) {
            if (objectArray[i].location !== location) {
                search(objectArray[i]);
            }
        }
    }
    if (price !== 'All') {
        for (var i = 0; i < objectArray.length; i++) {
            if (objectArray[i].price !== price) {
                search(objectArray[i]);
            }
        }
    }
    if (type !== 'All') {
        for (var i = 0; i < objectArray.length; i++) {
            if (objectArray[i].type !== type) {
                search(objectArray[i]);
            }
        }
    }
}

function search(placeObject) {
    var j = 0;
    var isFound = false;
    while (j < markerArray.length && isFound === false) {
        if (markerArray[j].title === placeObject.name) {
            console.log('true');
            markerArray[j].setVisible(false);
            isFound = true;
        } else {
            markerArray[j].setVisible(true);
            j++;
        }
    }
}