"use strict";
// pricing

//p1e = document.querySelector(".plan-1");
//p2e = document.querySelector(".plan-2");
//p3e = document.querySelector(".plan-3");

document.querySelector(".plan-1").style.cursor = "pointer";
document.querySelector(".plan-2").style.cursor = "pointer";
document.querySelector(".plan-3").style.cursor = "pointer";
let p = 0;

document.querySelector(".plan-1").addEventListener("click", function () {
  switch (p) {
    case 2:
      document.querySelector(".plan-2").classList.remove("is-selected");
      break;
    case 3:
      document.querySelector(".plan-3").classList.remove("is-selected");
    default:
      break;
  }
  p = 1;
  document.querySelector(".plan-1").classList.add("is-selected");
  document.querySelector(".select-btn").classList.remove("hiden");
});
document.querySelector(".plan-2").addEventListener("click", function () {
  //document.querySelector(".plan-2").style.border_color = "#00f";
  switch (p) {
    case 1:
      document.querySelector(".plan-1").classList.remove("is-selected");
      break;
    case 3:
      document.querySelector(".plan-3").classList.remove("is-selected");
    default:
      break;
  }
  p = 2;
  document.querySelector(".plan-2").classList.add("is-selected");
  document.querySelector(".select-btn").classList.remove("hiden");
  //console.log(document.querySelector(".plan-2").style.border_color);
});
document.querySelector(".plan-3").addEventListener("click", function () {
  switch (p) {
    case 1:
      document.querySelector(".plan-1").classList.remove("is-selected");
      break;
    case 2:
      document.querySelector(".plan-2").classList.remove("is-selected");
    default:
      break;
  }
  p = 3;
  document.querySelector(".plan-3").classList.add("is-selected");
  document.querySelector(".select-btn").classList.remove("hiden");
});

document
  .querySelector(".select-btn")
  .addEventListener("click", function (params) {
    console.log("btn clicke" + p);
  });

document.querySelector(".btn-select").style.cursor = "pointer";

/*
document
  .querySelector(".select-btn")
  .addEventListener("mouseover", function () {
    document.querySelector(".select-btn").style.cursor = "pointer";
  });
*/

//p2e = "#00f";
//p2e.class;
//.style.border - color
