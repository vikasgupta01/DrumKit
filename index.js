/*
// document.querySelectorAll("button")[0].addEventListener("click", handleClick);
// document.querySelectorAll("button")[1].addEventListener("click", handleClick);
// document.querySelectorAll("button")[2].addEventListener("click", handleClick);
// document.querySelectorAll("button")[3].addEventListener("click", handleClick);
// document.querySelectorAll("button")[4].addEventListener("click", handleClick);
// document.querySelectorAll("button")[5].addEventListener("click", handleClick);
// document.querySelectorAll("button")[6].addEventListener("click", handleClick);


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)
}

// document.querySelectorAll("button").forEach(item => {item.addEventListener("click", handleClick)});


function handleClick() {

  var buttonInnerHTML = this.innerHTML;

  switch (buttonInnerHTML) {

    case "a":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;

    case "s":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;

    case "d":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;

    case "f":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;


    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;

    case "k":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
    break;

    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;

    default:
      console.log(buttonInnerHTML);
  }
  // var audio = new Audio('sounds/tom-1.mp3');
  // audio.play();
}


document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "a":
      var tom11 = new Audio('sounds/tom-1.mp3');
      tom11.play();
    break;

    case "s":
      var tom22 = new Audio('sounds/tom-2.mp3');
      tom22.play();
    break;

    case "d":
      var tom33 = new Audio('sounds/tom-3.mp3');
      tom33.play();
    break;

    case "f":
      var tom44 = new Audio('sounds/tom-4.mp3');
      tom44.play();
    break;

    case "j":
      var snaree = new Audio('sounds/snare.mp3');
      snaree.play();
    break;

    case "k":
      var kickk = new Audio('sounds/kick-bass.mp3');
      kickk.play();
    break;

    case "l":
      var crashh = new Audio('sounds/crash.mp3');
      crashh.play();
    break;

    default:
      console.log(buttonInnerHTML);
  }
});
*/





for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }
)}


document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})



function makeSound(key) {

  switch (key) {

    case "a":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;

    case "s":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;

    case "d":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;

    case "f":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;


    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;

    case "k":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
    break;

    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
