import {getDatabase, ref, get, child, onValue} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";

// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js';
var firebaseConfig = {
  apiKey: "AIzaSyDg07lgLais4JKyBhfClzPpfYLOQEARV4k",
  authDomain: "e-restro-services.firebaseapp.com",
  databaseURL: "https://e-restro-services-default-rtdb.firebaseio.com",
  projectId: "e-restro-services",
  storageBucket: "e-restro-services.appspot.com",
  messagingSenderId: "1016030148695",
  appId: "1:1016030148695:web:00e29b0473e945124a8b12",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);