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
    console.log(total_price);
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
  // aDiv.appendChild(aDescription);
  aDiv.appendChild(aQty);
  aDiv.setAttribute("class", "slide");
  aDiv.appendChild(aRemoveButton);
  a.appendChild(aDiv);
}

fetchDataWithValue(sessionStorage.getItem("loggedInMobileNumber"));


