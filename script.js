let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

var loggedInMobileNumber = null;

loggedInMobileNumber = sessionStorage.getItem('phoneNumber');
sessionStorage.setItem('loggedInMobileNumber', loggedInMobileNumber);
// console.log(loggedInMobileNumber);
// sessionStorage.getItem('loggedInMobileNumber');

menu.onclick = function() {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay : 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  grabCursor:true,
  spaceBetween:20,
  // autoplay: {
  //   delay : 3500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

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
    // sessionStorage.setItem("loggedInMobileNumber", null);
    window.location.href = "./index.html";
  }
} else {
  logo.innerHTML = "U";
  logo.setAttribute("class", "userlogo");
  loginBtn.setAttribute("class", "login");
  loginBtn.innerHTML = "LOGIN";
  a.appendChild(logo);
  a.appendChild(loginBtn);
  loginBtn.onclick = () =>{
    window.location.href = "./user/login.html";
    console.log("adsad");
  }
}