"use strict";

const parent = document.querySelector(".parent");
const refactoring = document.querySelector(".refactoring");

parent.addEventListener("click", function() {
  parent.style.visibility = "hidden";
  refactoring.style.visibility = "visible";
});
