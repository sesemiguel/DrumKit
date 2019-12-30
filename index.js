main();

function main() {
  handleSoundOnClick();
  handleSoundOnKeyPress();
}

function handleSoundOnClick() {

  // Initialize iterator
  var i;

  // For each drum
  for (i = 0; i < document.querySelectorAll(".drum").length; i++) {

    // Initialize work variables
    var drum;
    var drumText;

    // Get the current drum
    drum = document.querySelectorAll(".drum")[i];

    // Add the click event listener
    drum.addEventListener("click", function handleClick() {

      // Get the text content of the current drum event listener
      drumText = this.textContent;

      // Get the sound of the drum
      getSound(drumText);

      // Add button animation
      buttonAnimation(drumText);
    });
  }
}

function handleSoundOnKeyPress() {

  // Add an event listener when a key is pressed
  document.addEventListener("keydown", function(event){

    // Get the sound of the drum
    getSound(event.key);

    // Add button animation
    buttonAnimation(event.key);
  });
}

function getSound(eventListener){

  // // Initialize audio variables
  var audioTom1;
  var audioTom2;
  var audioTom3;
  var audioTom4;
  var audioSnare;
  var audioCrash;
  var audioKickBass;

  switch (eventListener) {
    case "w":
      audioTom1 = new Audio("sounds/tom-1.mp3");
      audioTom1.play();
      break;
    case "a":
      audioTom2 = new Audio("sounds/tom-2.mp3");
      audioTom2.play();
      break;
    case "s":
      audioTom3 = new Audio("sounds/tom-3.mp3");
      audioTom3.play();
      break;
    case "d":
      audioTom4 = new Audio("sounds/tom-4.mp3");
      audioTom4.play();
      break;
    case "j":
      audioSnare = new Audio("sounds/snare.mp3");
      audioSnare.play();
      break;
    case "k":
      audioCrash = new Audio("sounds/crash.mp3");
      audioCrash.play();
      break;
    case "l":
      audioKickBass = new Audio("sounds/kick-bass.mp3")
      audioKickBass.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey){

  // Initialize work variables
  var activeButton;

  // Get the current key press
  activeButton = document.querySelector("." + currentKey);

  // Add pressed animation
  activeButton.classList.add("pressed");

  // After 100 ms, remove pressed animation
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
