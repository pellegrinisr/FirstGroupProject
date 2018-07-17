
var objectArray = [
    //Restaurants
    {
        name: "Father's Office",
        location: 'Santa Monica',
        type: 'Restaurants',
        coordinates: {lat: 34.029588, lng: -118.498408},
        price: 1
    },

    {
        name: "Fig",
        location: "Santa Monica",
        type: 'Restaurants',
        coordinates: {lat: 34.018216, lng: -118.501257},
        price: 2
    },

    {
        name: "Melisse",
        location: 'Santa Monica',
        type: 'Restaurants',
        coordinates: {lat: 34.024552, lng: -118.491353}, 
        price: 3
    },

    {
        name: 'Il Pastaio',
        location: 'Beverly Hills',
        type: 'Restaurants',
        coordinates: {lat: 34.070908, lng: -118.400814},
        price: 1
    },

    {
        name: 'Hinoki & the Bird',
        location: 'Beverly Hills',
        type: 'Restaurants',
        coordinates: {lat: 34.056730, lng: -118.415212},
        price: 2
    },

    {
        name: 'Spago',
        location: 'Beverly Hills',
        type: 'Restaurants',
        coordinates: {lat: 34.067920, lng: -118.397593},
        price: 2
    },

    {
        name: "Park's BBQ",
        location: 'Koreatown',
        type: 'restaurat',
        coordinates: {lat: 34.054214,  lng: -118.292047},
        price: 3
    },

    {
        name: 'Guelaguetza',
        location: 'Koreatown',
        type: 'Restaurants',
        coordinates: {lat: 34.052887, lng: -118.300354},
        price: 2
    },

    {
        name: 'Beverly Soon Tofu',
        location: 'Koreatown',
        type: 'Restaurants',
        coordinates: {lat: 34.053122, lng: -118.292524},
        price: 1
    },

    {
        name: 'Badmaash', 
        location: 'Downtown LA',
        type: 'Restaurants',
        coordinates: {lat: 34.051326, lng: -118.244825},
        price: 2
    },

    {
        name: 'Grand Central Market',
        location: 'Downtown LA',
        type: 'Restaurants',
        coordinates: {lat: 34.050842, lng:-118.248774},
        price: 1
    },

    {
        name: 'Broken Spanish',
        location: 'Downtown LA',
        type: 'Restaurants',
        coordinates: {lat: 34.043505, lng: -118.263499},
        price: 3
    },

    {
        name: 'Guisados',
        location: 'Hollywood',
        type: 'Restaurants',
        coordinates: {lat: 34.084674, lng: -118.385251},
        price: 1
    }, 

    {
        name: 'Luv2eat Thai Bistro',
        location: 'Hollywood',
        type: 'Restaurants',
        coordinates: {lat: 34.097752, lng: -118.335917},
        price: 2
    },

    {
        name: 'Trois Mec',
        location: 'Hollywood',
        type: 'Restaurants',
        coordinates: {lat: 34.084454, lng: -118.338133},
        price: 3
    },
    
    //Attractions
    {
        name: 'Bradbury Building',
        location: 'Downtown LA',
        type: 'Attractions',
        coordinates: {lat: 34.050837, lng: -118.247822},
        price: 1
    },

    {
        name: 'OUE Skyspace LA',
        location: 'Downtown LA',
        type: 'Attractions',
        coordinates: {lat: 34.050917, lng: -118.254618},
        price: 2
    },

    {
        name: 'Walt Disney Concert Hall', 
        location: 'Downtown LA',
        type: 'Attractions',
        coordinates: {lat: 34.055458, lng: -118.249856},
        price: 3
    },

    {
        name: 'Palisades Park',
        location: 'Santa Monica',
        type: 'Attractions',
        coordinates: {lat: 34.023340, lng: -118.509463},
        price: 1
    },

    {
        name: 'Santa Monica Pier',
        location: 'Santa Monica',
        type: 'Attractions',
        coordinates: {lat: 34.009458, lng: -118.496991},
        price: 2
    },

    {
        name: 'Third Street Promenade',
        location: 'Santa Monica',
        type: 'Attractions',
        coordinates: {lat: 34.016291, lng: -118.496432},
        price: 3
    },

    {
        name: 'Walk of Fame',
        location: 'Hollywood',
        type: 'Attractions',
        coordinates: {lat: 34.100798, lng: -118.340939},
        price: 1
    },

    {
        name: "TCL Chinese Theatre",
        location: 'Hollywood',
        type: 'Attractions',
        coordinates: {lat: 34.102334, lng: -118.340939},
        price: 2
    },

    {
        name: 'Hollywood Bowl',
        location: 'Hollywood',
        type: 'Attractions',
        coordinates: {lat: 34.112260, lng: -118.338978},
        price: 3
    },

    {
        name: 'Rodeo Dr', 
        location: 'Beverly Hills',
        type: 'Attractions',
        coordinates: {lat: 34.067708, lng: -118.400994},
        price: 1
    },

    {
        name: 'Virginia Robinson Gardens',
        location: "Beverly Hills",
        type: 'Attractions',
        coordinates: {lat: 34.0868058, lng: -118.4173749},
        price: 2
    },

    {
        name: 'Saban Theatre',
        location: 'Beverly Hills',
        type: 'Attractions',
        coordinates: {lat: 34.064650, lng: -118.375092},
        price: 3
    },

    {
        name: 'Koreatown Plaza',
        location: 'Koreatown',
        type: 'Attractions',
        coordinates: {lat: 34.055263, lng: -118.308654},
        price: 1
    },
    
    {
        name: 'Korean American National Museum',
        location: 'Koreatown',
        type: 'Attractions',
        coordinates: {lat: 34.063992, lng: -118.303764},
        price: 1
    },

    {
        name: 'Chapman Plaza',
        location: 'Koreatown',
        type: 'Attractions',
        coordinates: {lat: 34.064134, lng: -118.303775},
        price: 2   
    },

    //hotels
    {
        name: 'Freehand',
        location: 'Downtown LA',
        type: 'Hotels',
        coordinates: {lat: 34.045315, lng: -118.256553},
        price: 1
    },

    {
        name: 'Omni',
        location: 'Downtown LA',
        type: 'Hotels',
        coordinates: {lat: 34.052898, lng: -118.250264},
        price: 2
    },

    {
        name: 'Ritz-Carlton',
        location: 'Downtown LA',
        type: 'Hotels',
        coordinates: {lat: 34.045530, lng: -118.266621},
        price: 3
    },

    {
        name: 'Courtyard by Marriott',
        location: 'Santa Monica',
        type: 'Hotels',
        coordinates: {lat: 34.014601, lng: -118.491430},
        price: 1
    },

    {
        name: 'Hotel Casa del Mar',
        location: 'Santa Monica',
        type: 'Hotels',
        coordinates: {lat: 34.006644, lng: -118.491089},
        price: 2
    },

    {
        name: 'Loews Santa Monica Beach Hotel',
        location: 'Santa Monica',
        type: 'Hotels',
        coordinates: {lat: 34.009293, lng: -118.493145},
        price: 3
    },

    {
        name: 'Kimpton La Peer Hotel',
        location: 'Hollywood',
        type: 'Hotels',
        coordinates: {lat: 34.081817, lng: -118.386937},
        price: 1
    },

    {
        name: 'Petit Ermitage',
        location: 'Hollywood',
        type: 'Hotels',
        coordinates: {lat: 34.087505, lng: -118.383937},
        price: 2
    },

    {
        name: 'The Jeremy West Hollywood',
        location: 'Hollywood',
        type: 'Hotels',
        coordinates: {lat: 34.094560, lng: -118.376201},
        price: 3
    },

    {
        name: 'Best Western Plus',
        location: 'Koreatown',
        type: 'Hotels',
        coordinates: {lat: 34.063642, lng: -118.293253},
        price: 1
    },

    {
        name: 'The LINE',
        location: 'Koreatown',
        type: 'Hotels',
        coordinates: {lat: 34.062391, lng: -118.300990},
        price: 3
    },

    {
        name: 'Sirtaj Hotel',
        location: 'Beverly Hills',
        type: 'Hotels',
        coordinates: {lat: 34.066624, lng: -118.397851},
        price: 2,
    },

    {
        name: 'SIXTY',
        location: 'Beverly Hills',
        type: 'Hotels',
        coordinates: {lat: 34.066906, lng: -118.396101},
        price: 2
    },

    {
        name: "Viceroy L'Ermitage",
        location: 'Beverly Hills',
        type: 'Hotels',
        coordinates: {lat: 34.077924, lng: -118.396095},
        price: 3
    }
]; 