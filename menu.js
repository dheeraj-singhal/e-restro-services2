import {getDatabase, ref, get, child, onValue} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js';


var firebaseConfig = {
    apiKey: "AIzaSyDg07lgLais4JKyBhfClzPpfYLOQEARV4k",
    authDomain: "e-restro-services.firebaseapp.com",
    databaseURL: "https://e-restro-services-default-rtdb.firebaseio.com",
    projectId: "e-restro-services",
    storageBucket: "e-restro-services.appspot.com",
    messagingSenderId: "1016030148695",
    appId: "1:1016030148695:web:00e29b0473e945124a8b12",
  };


function fetchDataWithValueA(a) {
  firebase.initializeApp(firebaseConfig);
  var reference = firebase.database().ref("menu-dishes/");
  reference.orderByChild("genre").equalTo(a).once('value', function(snap) {
    snap.forEach(function(childsnap){
      let name = childsnap.val().name;
      let description = childsnap.val().description;
      let price = childsnap.val().price;
      let imageurl = childsnap.val().imageurl;
     addItemsToLayoutA(name, price, description, imageurl);
    });
 });
}
function fetchData(){
  firebase.initializeApp(firebaseConfig);
  firebase.database().ref('menu-dishes').once('value',function(snap){
    snap.forEach(function(childsnap){
      let name = childsnap.val().name;
      let description = childsnap.val().description;
      let price = childsnap.val().price;
      let imageurl = childsnap.val().imageurl;
     addItemsToLayout(name, price, description, imageurl);
    });
  });
}

function addItemsToLayoutA(name, price, description, url){
  var a = document.getElementById('container-1');

  var aDiv = document.createElement('div');
  var aName = document.createElement('h3');
  var aDescription = document.createElement('h3');
  var aPrice = document.createElement('p');
  var aImage = document.createElement('img');
  var aButton = document.createElement('button');

  aName.innerHTML = name;
  aName.setAttribute('class', 'content-heading');
  aPrice.innerHTML = "Rs. " + price + "/-";
  aPrice.setAttribute('class', 'price');
  aDescription.innerHTML = description;
  aDescription.setAttribute('class', 'stars');
  aImage.setAttribute('class', 'image');
  aButton.setAttribute('class', 'cart-btn');
  aButton.innerHTML = "Add to cart";
  aImage.src = url;


  aDiv.appendChild(aImage);
  aDiv.appendChild(aName);
  aDiv.appendChild(aPrice);
  aDiv.appendChild(aDescription);
  aDiv.appendChild(aButton);
  aDiv.setAttribute('class', 'slide');
  a.appendChild(aDiv);
 }


 function fetchDataWithValueB(a) {
    var reference = firebase.database().ref("menu-dishes/");
    reference.orderByChild("genre").equalTo(a).once('value', function(snap) {
      snap.forEach(function(childsnap){
        let name = childsnap.val().name;
        let description = childsnap.val().description;
        let price = childsnap.val().price;
        let imageurl = childsnap.val().imageurl;
       addItemsToLayoutB(name, price, description, imageurl);
      });
   });
  }
  function addItemsToLayoutB(name, price, description, url){
    var a = document.getElementById('container-2');
  
    var aDiv = document.createElement('div');
    var aName = document.createElement('h3');
    var aDescription = document.createElement('h3');
    var aPrice = document.createElement('p');
    var aImage = document.createElement('img');
    var aButton = document.createElement('button');
  
    aName.innerHTML = name;
    aName.setAttribute('class', 'content-heading');
    aPrice.innerHTML = "Rs. " + price + "/-";
    aPrice.setAttribute('class', 'price');
    aDescription.innerHTML = description;
    aDescription.setAttribute('class', 'stars');
    aImage.setAttribute('class', 'image');
    aButton.setAttribute('class', 'cart-btn');
    aButton.innerHTML = "Add to cart";
    aImage.src = url;
  
  
    aDiv.appendChild(aImage);
    aDiv.appendChild(aName);
    aDiv.appendChild(aPrice);
    aDiv.appendChild(aDescription);
    aDiv.appendChild(aButton);
    aDiv.setAttribute('class', 'slide');
    a.appendChild(aDiv);
   }

   function fetchDataWithValueC(a) {
    var reference = firebase.database().ref("menu-dishes/");
    reference.orderByChild("genre").equalTo(a).once('value', function(snap) {
      snap.forEach(function(childsnap){
        let name = childsnap.val().name;
        let description = childsnap.val().description;
        let price = childsnap.val().price;
        let imageurl = childsnap.val().imageurl;
       addItemsToLayoutC(name, price, description, imageurl);
      });
   });
  }
  function addItemsToLayoutC(name, price, description, url){
    var a = document.getElementById('container-3');
  
    var aDiv = document.createElement('div');
    var aName = document.createElement('h3');
    var aDescription = document.createElement('h3');
    var aPrice = document.createElement('p');
    var aImage = document.createElement('img');
    var aButton = document.createElement('button');
  
    aName.innerHTML = name;
    aName.setAttribute('class', 'content-heading');
    aPrice.innerHTML = "Rs. " + price + "/-";
    aPrice.setAttribute('class', 'price');
    aDescription.innerHTML = description;
    aDescription.setAttribute('class', 'stars');
    aImage.setAttribute('class', 'image');
    aButton.setAttribute('class', 'cart-btn');
    aButton.innerHTML = "Add to cart";
    aImage.src = url;
  
  
    aDiv.appendChild(aImage);
    aDiv.appendChild(aName);
    aDiv.appendChild(aPrice);
    aDiv.appendChild(aDescription);
    aDiv.appendChild(aButton);
    aDiv.setAttribute('class', 'slide');
    a.appendChild(aDiv);
   }

fetchDataWithValueA("Starters");
fetchDataWithValueB("Main Course");
fetchDataWithValueC("Desert");