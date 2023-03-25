// Initialize and add the map
let map;
const ny = { lat: 40.76010, lng: -73.983002 };
const blr = {lat: 12.9716, lng: 77.5946}

function initMap() {
    const location = blr
    map = new google.maps.Map(document.getElementById("map"), {
      mapTypeId: "roadmap",
      zoom: 15,
      center: location,
      mapId: "6d77c92efad4c954"
    });
    map.setTilt(45);
    // The marker, positioned at location
    const svgMarker = {
        path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "red",
        fillOpacity: 0.9,
        strokeWeight: 0,
        rotation: 0,
        scale: 1.5,
        anchor: new google.maps.Point(0, 20),
      }

    const marker = new google.maps.Marker({
      icon:svgMarker,
    
      position: location,
      map: map,
    });
    // document.getElementById("rotate").addEventListener("click", autoRotate);
    // document.getElementById("rotate").addEventListener("click", autoRotate);

  }

  function rotate90() {
    const heading = map.getHeading() || 0;
    console.log(heading)
    map.setHeading(heading + 90);
  }
  
  function autoRotate() {
    // Determine if we're showing aerial imagery.
    if (map.getTilt() !== 1) {
      window.setInterval(rotate90, 2000);
    }
  }
  
  window.initMap = initMap;