function initMap() {
    // Create the map instance
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: { lat: 46.619261, lng: -33.134766 },
    });

    // Define marker labels
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Define marker locations
    const locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 },
    ];

    // Create markers
    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });

    // Add MarkerClusterer
    new markerClusterer.MarkerClusterer({
        map,
        markers,
        renderer: {
            imagePath:
                "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        },
    });
}
