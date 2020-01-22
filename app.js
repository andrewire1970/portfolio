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

let nav = document.getElementById('nav');

document.getElementById('ham').addEventListener("click", () => {

  nav.style.visibility = 'visible';

});





for (tog of toggle) {

  console.log(tog)

  tog.addEventListener("click", () => {

    nav.style.visibility = "hidden";

  });

}