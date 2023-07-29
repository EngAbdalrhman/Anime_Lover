"use strict";

document.querySelector(".btn_long").style.cursor = "pointer";
document.querySelector(".send").style.cursor = "pointer";

document.querySelector(".btn_long").addEventListener("click", function () {
  location.replace("pricing.html");
  console.log("btn clicked");
});

document.querySelector(".kira").addEventListener("dblclick", function () {
  new Audio("media/kira-laugh.mp3").play();
  document.querySelector(".kira-vid").classList.remove("hiden");
  document.querySelector(".kira").classList.add("hiden");
});

document.querySelector(".send").addEventListener("click", function () {
  console.log("btn clicked");
});
