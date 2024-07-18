// Script for To Top button
let toTopBtn = document.getElementById("to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome
}

function darkMode() {
  var x = document.getElementById("normal-body");
  if (x.className === "normal") {
    x.className += " dark";
  } else {
    x.className = "normal";
  }
}

function mobileNav() {
  var y = document.getElementById("myTopnav");
  if (y.className === "topnav") {
    y.className += " responsive";
  } else {
    y.className = "topnav";
  }
}