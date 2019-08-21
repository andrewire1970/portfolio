let heading = document.querySelector(".md-heading");
let sentence = "Font-End Web Developer";
let currentText = "";
let index = 0;

(function type() {
  if (currentText !== sentence.length) {
    heading.textContent = sentence.slice(0, ++index);
  }

  setTimeout(type, 90);
})();
