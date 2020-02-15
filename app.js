let heading = document.querySelector(".md-heading");
let sentence = "Front-End Web Developer";
let currentText = "";
let index = 0;
let toggle = document.querySelectorAll(".toggle");

(function type() {
  if (currentText !== sentence.length) {
    heading.textContent = sentence.slice(0, ++index);
  }

  setTimeout(type, 100);
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
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch

// Image List
images[0] = "/images/projects/fidma-2.jpg";
images[1] = "/images/projects/figma-3.jpg";



// Change Image
function changeImg() {
  document.slide.src = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;


