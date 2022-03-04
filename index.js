function buttonclick() {
  var innerText = this.innerHTML;
  switch (innerText) {
    case "w":
      var audio1 = new Audio("sounds/crash.mp3");
      audio1.play();
      break;
    case "a":
      var audio2 = new Audio("sounds/kick-bass.mp3");
      audio2.play();
      break;
    case "s":
      var audio3 = new Audio("sounds/snare.mp3");
      audio3.play();
      break;
    case "d":
      var audio4 = new Audio("sounds/tom-1.mp3");
      audio4.play();
      break;
    case "j":
      var audio5 = new Audio("sounds/tom-2.mp3");
      audio5.play();
      break;
    case "k":
      var audio6 = new Audio("sounds/tom-3.mp3");
      audio6.play();
      break;
      case "l":
      var audio7 = new Audio("sounds/tom-4.mp3");
      audio7.play();
        break;

    default:
    console.log(innerText)

  }


}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", buttonclick);

}

function keyclick1() {


}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.addEventListener('keydown', (event) => {      // "function (){ "ss can be written as this
  var keyName = event.key;

  // As the user releases the Ctrl key, the key is no longer active,
  // so event.ctrlKey is false.
switch (keyName) {
  case "w":
    var audio1 = new Audio("sounds/crash.mp3");
    audio1.play();
    break;
  case "a":
    var audio2 = new Audio("sounds/kick-bass.mp3");
    audio2.play();
    break;
  case "s":
    var audio3 = new Audio("sounds/snare.mp3");
    audio3.play();
    break;
  case "d":
    var audio4 = new Audio("sounds/tom-1.mp3");
    audio4.play();
    break;
  case "j":
    var audio5 = new Audio("sounds/tom-2.mp3");
    audio5.play();
    break;
  case "k":
    var audio6 = new Audio("sounds/tom-3.mp3");
    audio6.play();
    break;
    case "l":
    var audio7 = new Audio("sounds/tom-4.mp3");
    audio7.play();
      break;

  default:
  console.log(keyName)

}

});
}
