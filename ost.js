"use strict";

document.querySelector(".btn_long").style.cursor = "pointer";

document.querySelector(".btn_long").addEventListener("click", function () {
  location.replace("pricing.html");
  console.log("btn clicked");
});
