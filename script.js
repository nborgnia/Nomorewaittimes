// Dummy functions for now
function saveTrip() {
    alert('Trip Saved!');
}

function addTrip() {
    alert('Trip Added!');
}

function refreshMap() {
    alert('Map Refreshed!');
}

function updateTrip() {
    alert('Trip Updated!');
}

// Google Maps Initialization
function initMap() {
    const mapOptions = {
        zoom: 12,
        center: { lat: 28.416, lng: -81.581 },
    };

    const map = new google.maps.Map(document.getElementById("google-map"), mapOptions);
    const marker = new google.maps.Marker({
        position: { lat: 28.416, lng: -81.581 },
        map: map,
        title: "Theme Park Ride",
    });
}
