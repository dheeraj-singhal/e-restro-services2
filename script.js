let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

var loggedInMobileNumber = '';

loggedInMobileNumber = sessionStorage.getItem('phoneNumber');
// console.log(loggedInMobileNumber);

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