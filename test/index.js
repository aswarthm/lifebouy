// Initialize and add the map

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUIb8JID6IVhI6H36bDkntXH8g2gHqfH8",
  authDomain: "lifebuoy-8161b.firebaseapp.com",
  databaseURL: "https://lifebuoy-8161b-default-rtdb.firebaseio.com",
  projectId: "lifebuoy-8161b",
  storageBucket: "lifebuoy-8161b.appspot.com",
  messagingSenderId: "562512068440",
  appId: "1:562512068440:web:87fd0e856a1084bdccaf2d",
  measurementId: "G-19HDQV34JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let map;
const ny = { lat: 40.76010, lng: -73.983002 };
const blr = {lat: 12.9716, lng: 77.5946}

function initMap() {
    const location = ny
    map = new google.maps.Map(document.getElementById("map"), {
      mapTypeId: "roadmap",
      zoom: 15,
      center: location,
      mapId: "6d77c92efad4c954"
    });
    map.setTilt(45);

    const svgMarker = {
        path: `M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M448,256
        c0,32.625-8.23,63.344-22.645,90.281l-67.123-44.75C364.461,287.602,368,272.219,368,256c0-16.211-3.539-31.594-9.768-45.523
        l67.123-44.75C439.77,192.656,448,223.383,448,256z M86.644,346.281C72.23,319.344,64,288.625,64,256
        c0-32.617,8.23-63.344,22.644-90.273l67.123,44.75C147.539,224.406,144,239.789,144,256c0,16.219,3.539,31.602,9.768,45.531
        L86.644,346.281z M208,256c0-26.469,21.531-48,48-48c26.469,0,48,21.531,48,48c0,26.469-21.531,48-48,48
        C229.531,304,208,282.469,208,256z M346.277,86.648l-44.75,67.125C287.6,147.547,272.219,144,256,144
        c-16.219,0-31.6,3.547-45.527,9.773l-44.75-67.125C192.656,72.234,223.375,64,256,64S319.344,72.234,346.277,86.648z
         M165.723,425.359l44.75-67.125C224.4,364.469,239.781,368,256,368c16.219,0,31.6-3.531,45.527-9.766l44.75,67.125
        C319.344,439.773,288.625,448,256,448S192.656,439.773,165.723,425.359z`,
        fillColor: "#FC2947",
        fillOpacity: 1.0,
        strokeWeight: 1,
        rotation: 0,
        scale: 0.05,
        anchor: new google.maps.Point(0, 20),
      }


    const marker = new google.maps.Marker({
      icon: svgMarker,
      position: location,
      map: map,
    });

  }
  
  window.initMap = initMap;

