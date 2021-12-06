function fetchDataWithValue(a) {
  // console.log(a);
  var reference = firebase.database().ref("Order-history/" + a + "/");  
  reference.on("value", function (snap) {
    var a = document.getElementById("cart-container");
  while(a.firstChild){
    a.removeChild(a.lastChild);
  }
  var total_price = 0;
    snap.forEach(function (childsnap) {
      let name = childsnap.val().dish;
      let description = childsnap.val().description;
      let price = childsnap.val().price;
      total_price += price;
      let qty = childsnap.val().qty;
      let imageurl = childsnap.val().image;
      let dishId = childsnap.val().id;
      addItemsToLayout(name, price, description, imageurl, qty, dishId);
    });
    // console.log(total_price);
    document.getElementById("totalPrice").innerHTML = "₹ " + total_price + "/-";
    var discount = 10;
    document.getElementById("discountValue").innerHTML = discount + "%";
    document.getElementById("finalValue").innerHTML = "₹ " + (total_price - ((total_price * discount)/ 100)) + "/-";
  });
}

function addItemsToLayout(name, price, description, url, qty, id) {
  var a = document.getElementById("cart-container");

  var aDiv = document.createElement("div");
  var aName = document.createElement("h3");
  var aDescription = document.createElement("h3");
  var aPrice = document.createElement("p");
  var aImage = document.createElement("img");
  var aQty = document.createElement("h4");
  var aRemoveButton = document.createElement("button");

  aName.innerHTML = name;
  aName.setAttribute("class", "content-heading");
  aPrice.innerHTML = "₹ " + price + "/-";
  aPrice.setAttribute("class", "price");
  aDescription.innerHTML = description;
  aDescription.setAttribute("class", "stars");
  aImage.setAttribute("class", "image");
  aImage.src = url;
  aQty.innerHTML = "Qty : " + qty;
  aQty.setAttribute('class', 'quantity');
  aRemoveButton.innerHTML = "REMOVE";
  aRemoveButton.setAttribute('class', 'remove-btn');
  aRemoveButton.onclick = function () {
    firebase
      .database()
      .ref(
        "Order-history/" +
          sessionStorage.getItem("loggedInMobileNumber") +
          "/" +
          id
      )
      .remove();
  };

  aDiv.appendChild(aImage);
  aDiv.appendChild(aName);
  aDiv.appendChild(aPrice);
  aDiv.appendChild(aQty);
  aDiv.setAttribute("class", "slide");
  aDiv.appendChild(aRemoveButton);
  a.appendChild(aDiv);
}

fetchDataWithValue(sessionStorage.getItem("loggedInMobileNumber"));

function orderPlaced() {
  alert("Your Order has been placed Successfully!");
  window.location.href = "../index.html";
}

var a = document.getElementById("dropdown-content");
var logo = document.createElement("span");
var loginBtn = document.createElement("button");

while(a.firstChild){
  a.removeChild(a.lastChild);
}

if(sessionStorage.getItem("loggedInMobileNumber") != "null"){
  var username = document.createElement("p");
  username.setAttribute("class", "username");
  username.innerHTML = "Dheeraj Bhai"
  var mobileNumber = document.createElement("p");
  mobileNumber.setAttribute("class", "phone-number");
  mobileNumber.innerHTML = sessionStorage.getItem("loggedInMobileNumber");
  logo.innerHTML = "D";
  logo.setAttribute("class", "userlogo");
  loginBtn.setAttribute("class", "login");
  loginBtn.innerHTML = "LOG OUT";
  a.appendChild(logo);
  a.appendChild(username);
  a.appendChild(mobileNumber);
  a.appendChild(loginBtn);
  loginBtn.onclick = () =>{
    sessionStorage.setItem("phoneNumber" , null);
    window.location.href = "../index.html";
  }
} else {
  logo.innerHTML = "U";
  logo.setAttribute("class", "userlogo");
  loginBtn.setAttribute("class", "login");
  loginBtn.innerHTML = "LOGIN";
  a.appendChild(logo);
  a.appendChild(loginBtn);
  loginBtn.onclick = () =>{
    window.location.href = "../user/login.html";
    console.log("adsad");
  }
}
