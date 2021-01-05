//counting total number of buttons
var number_of_buttons = document.querySelectorAll(".drum").length;

//Looping through the number_of_buttons
for(var i = 0; i<number_of_buttons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
  });
}


//Function for playing sound
function playSound(key){
  switch(key){
    case 'w':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case 'a':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case 's':
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
