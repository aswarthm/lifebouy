import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'
import {get, ref, getDatabase, child} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js'

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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const dbRef = ref(db)

let map;
const ny = { lat: 40.76010, lng: -73.983002 };
const blr = {lat: 12.9716, lng: 77.5946}
const location = ny


function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
      mapTypeId: "roadmap",
      zoom: 15,
      center: location,
      mapId: "6d77c92efad4c954"
    });
    map.setTilt(45); 
  }
  
  window.initMap = initMap;

  document.getElementById("guigui").addEventListener("click", ()=>{
    addBuoy({ lat: 40.76020, lng: -73.985002 })
    addPhone(ny)
    
  })

function addBuoy(location){
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

function addPhone(location){
  let svg = '<svg width="30px" height="30px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M729.6 870.4c0 28.16-23.04 51.2-51.2 51.2H345.6c-28.16 0-51.2-23.04-51.2-51.2V179.2c0-28.16 23.04-51.2 51.2-51.2h332.8c28.16 0 51.2 23.04 51.2 51.2v691.2z" fill="#E1E0A6" /><path d="M678.4 934.4H345.6c-35.84 0-64-28.16-64-64V179.2c0-35.84 28.16-64 64-64h332.8c35.84 0 64 28.16 64 64v691.2c0 35.84-28.16 64-64 64zM345.6 140.8c-21.76 0-38.4 16.64-38.4 38.4v691.2c0 21.76 16.64 38.4 38.4 38.4h332.8c21.76 0 38.4-16.64 38.4-38.4V179.2c0-21.76-16.64-38.4-38.4-38.4H345.6z" fill="#231C1C" /><path d="M691.2 744.96c0 12.8-11.52 23.04-25.6 23.04H358.4c-14.08 0-25.6-10.24-25.6-23.04V253.44c0-12.8 11.52-23.04 25.6-23.04h307.2c14.08 0 25.6 10.24 25.6 23.04v491.52z" fill="#F2E5CA" /><path d="M665.6 780.8H358.4c-21.76 0-38.4-16.64-38.4-35.84V253.44c0-20.48 16.64-35.84 38.4-35.84h307.2c21.76 0 38.4 16.64 38.4 35.84v491.52c0 19.2-16.64 35.84-38.4 35.84zM358.4 243.2c-7.68 0-12.8 5.12-12.8 10.24v491.52c0 5.12 5.12 10.24 12.8 10.24h307.2c7.68 0 12.8-5.12 12.8-10.24V253.44c0-5.12-5.12-10.24-12.8-10.24H358.4z" fill="#231C1C" /><path d="M512 844.8m-38.4 0a38.4 38.4 0 1 0 76.8 0 38.4 38.4 0 1 0-76.8 0Z" fill="#D4594C" /><path d="M512 896c-28.16 0-51.2-23.04-51.2-51.2s23.04-51.2 51.2-51.2 51.2 23.04 51.2 51.2-23.04 51.2-51.2 51.2z m0-76.8c-14.08 0-25.6 11.52-25.6 25.6s11.52 25.6 25.6 25.6 25.6-11.52 25.6-25.6-11.52-25.6-25.6-25.6z" fill="#231C1C" /><path d="M460.8 166.4h102.4v25.6h-102.4z" fill="#231C1C" /></svg>'
  const svgMarker = {
    url: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg),
    fillColor: "#FC2947",
    fillOpacity: 1.0,
    strokeWeight: 1,
    rotation: 0,
    anchor: new google.maps.Point(0, 20),
  }

const marker = new google.maps.Marker({
  icon: svgMarker,
  position: location,
  map: map,
});

}