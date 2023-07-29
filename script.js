"use strict";
// for all
document.querySelector(".btn_start").style.cursor = "pointer";
document.querySelector(".logo").style.cursor = "pointer";

document.querySelector(".btn_start").addEventListener("click", function () {
  console.log("btn clicked");
  window.open("pricing.html");
});

document.querySelector(".logo").addEventListener("click", function () {
  location.replace("index.html");
});

/* 
open url
Use this:

 <input type="button" value="button name" onclick="window.open('http://www.website.com/page')" />
 Worked for me and it will open an actual new 'popup' window rather than a new full browser or tab. You can also add variables to it to stop it from showing specific browser traits as follows:

 onclick="window.open(this.href,'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no'); return false;"
*/
