const btnHamburguer = document.querySelector("#btnHamburguer");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const heroimage = document.querySelector(".hero__image");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburguer.addEventListener("click", function () {
  console.log("click hamburguer");

  if (header.classList.contains("open")) {
    //Close Hamburguer Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    heroimage.classList.remove("toggle-open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    //Open Hamburguer Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    heroimage.classList.add("toggle-open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
