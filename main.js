let latitude, longitude, destination;

var img1= document.getElementById("gateway_of_india");
var img2= document.getElementById("india_gate");
var img3= document.getElementById("taj_mahal");
var img4= document.getElementById("mehmaan_khana");
var img5= document.getElementById("sheesh_gumbad");
var img6= document.getElementById("agonda_beach");
var img7= document.getElementById("aguada_fort_lh");
var img8= document.getElementById("betul_lighthouse");
var img9= document.getElementById("nilgiris");
var img10= document.getElementById("udaipur_lake");

$(document).ready(function () {
    alert("Click allow to enable location services")
    initGeolocation();
})
$(function () {
    $("#navigate-button").click(function () {
        window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
    })
})
function initGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    }
    else {
        alert("Sorry, your browser does not support geolocation services.");
    }
}

function success(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude

    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 5
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
);

map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    }).on('result', function (e){
        destination = e.results.center
    })
    );

map.on('click', function (e) {
    destination = e.lngLat;
});

var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([72.83461360923279, 18.921988879674068])
	.addTo(map);

var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([77.2295096974392, 28.61291198242549])
	.addTo(map);

var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([78.04216276824896, 27.175198542972574])
	.addTo(map);

var marker4 = new mapboxgl.Marker({
	element: img4
})
	.setLngLat([78.04356526731736, 27.17505735769013])
	.addTo(map);

var marker5 = new mapboxgl.Marker({
	element: img5
})
	.setLngLat([77.22020513626569, 28.593825319771508])
	.addTo(map);

var marker6 = new mapboxgl.Marker({
    element: img6
})
    .setLngLat([73.98616002483779, 15.04297343994677])
    .addTo(map);

var marker7 = new mapboxgl.Marker({
    element: img7
})
    .setLngLat([73.77316176792633, 15.49256994658018])
    .addTo(map);

var marker8 = new mapboxgl.Marker({
    element: img8
})
    .setLngLat([73.9581677501706, 15.144949128200592])
    .addTo(map);
var marker9 = new mapboxgl.Marker({
    element: img9
})
    .setLngLat([76.85300568525545, 11.4166537805265])
    .addTo(map);
                            
    var marker10 = new mapboxgl.Marker({
        element: img10
    })
        .setLngLat([73.68121875814383, 24.581770139576847])
        .addTo(map);
    
}