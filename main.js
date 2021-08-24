// Initialize and add the map
function initMap() {
    // The location of Uluru
    const place = { lat: 5.3451, lng: 115.7451 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: place,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: place,
      map: map,
    });
  }
