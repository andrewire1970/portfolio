let heading = document.querySelector(".md-heading");
let sentence = "Font-End Web Developer";
let currentText = "";
let index = 0;
let toggle = document.querySelectorAll(".toggle");

(function type() {
  if (currentText !== sentence.length) {
    heading.textContent = sentence.slice(0, ++index);
  }

  setTimeout(type, 200);
})();

document.querySelectorAll(".toggle").addEventListener("click", toggleOff);

function toggleOff() {
  toggle.style.visibility = "none";
}
