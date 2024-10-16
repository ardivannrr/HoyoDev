// Navbar
const navbar = document.querySelector(".navbar");
const menu = document.querySelector("#menu");

menu.onclick = () => {
  navbar.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

// Swiper JS
new Swiper(".card-wrapper", {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    }, 1024: {
      slidesPerView: 3
    },
  }
});

// Navbar Scroll Bergulir
// window.onscroll = function () {
//   scrollFunction();
// };
// function scrollFunction() {
//   var header = document.getElementById("header");
//   var navLinks = document.querySelectorAll(".navbar a");
//   if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
//     header.style.backgroundColor = "rgba(254, 254, 254,1)";
//     header.style.backdropFilter = "blur(10px)";
//     navLinks.forEach(function (link) {
//       link.style.color = "black";
//       link.addEventListener("mouseover", function () {
//         link.style.color = "#37b837";
//       });
//       link.addEventListener("mouseout", function () {
//         link.style.color = "black";
//       });
//     });

//     var navLogoLinks = document.querySelectorAll(".nav-logo a");
//     for (var i = 0; i < navLogoLinks.length; i++) {
//       navLogoLinks[i].style.color = "black";
//     }
//   } else {
//     header.style.backgroundColor = "transparent";
//     header.style.backdropFilter = "none";
//     navLinks.forEach(function (link) {
//       link.style.color = "white";
//       link.addEventListener("mouseover", function () {
//         link.style.color = "#37b837";
//       });
//       link.addEventListener("mouseout", function () {
//         link.style.color = "white";
//       });
//     });

//     var navLogoLinks = document.querySelectorAll(".nav-logo a");
//     for (var i = 0; i < navLogoLinks.length; i++) {
//       navLogoLinks[i].style.color = "white";
//     }
//   }
// }

// Slider
// let counter = 1;
// setInterval(function () {
//   document.getElementById("radio" + counter).checked = true;
//   counter++;
//   if (counter > 3) {
//     counter = 1;
//   }
// }, 5000);

/*=============== SWIPER JS ===============*/
// let swiperCards = new Swiper(".card__content", {
//   loop: true,
//   spaceBetween: 32,
//   grabCursor: true,

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints: {
//     600: {
//       slidesPerView: 2,
//     },
//     968: {
//       slidesPerView: 3,
//     },
//   },
// });
