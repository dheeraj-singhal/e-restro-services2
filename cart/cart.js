// const { spawn } = require("child_process")
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

function addToCart(dishId) {
  if (sessionStorage.getItem("loggedInMobileNumber") != "null") {
    firebase
      .database()
      .ref("menu-dishes/")
      .orderByChild("dishID")
      .equalTo(dishId)
      .once("value", function (snap) {
        snap.forEach(function (childsnap) {
          // console.log(childsnap.val().price);
          const dishName = childsnap.val().name;
          const dishPrice = childsnap.val().price;
          const dishDescription = childsnap.val().description;
          const dishImage = childsnap.val().imageurl;
          firebase
            .database()
            .ref(
              "Order-history/" +
                sessionStorage.getItem("loggedInMobileNumber") +
                "/" +
                dishId
            )
            .set({
              id: dishId,
              dish: dishName,
              description: dishDescription,
              image: dishImage,
              price: dishPrice,
              qty: 1,
            });
        });
      });
  } else {
    window.location.href = "../user/login.html";
  }
}
