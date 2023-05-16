const swiper = new Swiper('.swiper', {
    loop: true,

     // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


})
var firebaseConfig = {
	apiKey: "AIzaSyCpmYG00SD6A-v3eSxvQ4RLSCYwkUNM2GA",
  authDomain: "webdev-46c60.firebaseapp.com",
  projectId: "webdev-46c60",
  storageBucket: "webdev-46c60.appspot.com",
  messagingSenderId: "414159662770",
  appId: "1:414159662770:web:4231ef9526df42a97ca3ab",
  measurementId: "G-GB8J08YNKT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);