var rating = document.querySelectorAll(".rates");
var card = document.querySelector(".card");
var overlay = document.querySelector(".success");
var selectionOutput = document.querySelector("#rate-output");
var submitButton = document.querySelector("#submit");
var globalTarget;

var errorMsg = "Please select a value.";
var errorField = document.querySelector(".errorField");

var closeButton = document.querySelector(".close");
var dialog = document.querySelector("#dialog");

addEventListener("click", (e) => {
  var target = e.target;
  rating.forEach((rating) => {
    rating.classList.remove("rates-active");
  });

  if (Object.values(rating).includes(target)) {
    target.classList.add("rates-active");
    globalTarget = target;
  }
});

function submitFunction() {
  if (globalTarget != undefined) {
    overlay.style.visibility = "visible";
    card.style.visibility = "hidden";
    selectionOutput.innerHTML = globalTarget.innerHTML;
  } else {
    errorField.innerHTML = errorMsg;
  }
}
function closeWindow() {
  card.style.visibility = "hidden";
  overlay.style.visibility = "hidden";
  dialog.style.visibility = "visible";
}

function reOpen() {
  card.style.visibility = "visible";
  dialog.style.visibility = "hidden";
}

// Extra code (Not part of project)
console.log(
  "%cThank you for checking out my code <3",
  "color: purple;background: lightblue; font-family: Optima"
);
console.groupCollapsed("My links <3");
console.info("%cGithub: https://github.com/ShalomiAhavah", "color: pink");
console.info(
  "%cFrontEndMentor: https://www.frontendmentor.io/profile/ShalomiAhavah",
  "color: pink"
);
console.info(
  "%cDiscord: https://discordapp.com/users/800363625524363284",
  "color: pink"
);
console.groupEnd("My links <3");
