"use strict";

const pass = document.getElementById("pass");
const before = document.getElementById("before");
const after = document.getElementById("after");

pass.addEventListener("change", function() {
  if (pass.value === "コメントアウト削除") {
    before.classList.toggle("slide");
    setTimeout(() => after.classList.toggle("fade-in"), 2000);
    setTimeout(() => after.classList.toggle("fade-in2"), 4000);
  }
});
