//Play sound using keyboard keys in Javascript
document.addEventListener("keydown", function(event){
  //make sound
  playSound(event.key);
});


//Function for playing sound
function playSound(key){
  switch(key){
    case 'a':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case 'b':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case 'c':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case 'd':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    default:
      console.log(key);
      break;
  }
}
