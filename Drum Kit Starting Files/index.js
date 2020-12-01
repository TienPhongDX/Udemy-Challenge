var number_of_button = document.querySelectorAll(".drum").length;

for (var i = 0; i < number_of_button; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var ButtonInnerHTML = this.innerHTML;
    makeSound(ButtonInnerHTML);

    addAnimation(ButtonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);

    addAnimation(event.key);
});

function makeSound(key) {
  
  switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    
    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

    case "l":
        var kick_bass = new Audio("sounds/kick-bass.mp3");
        kick_bass.play();
        break;

    default: 
  }
}

function addAnimation(current_key){
    var key_selected = document.querySelector("."+current_key);
    key_selected.classList.add("pressed");
    setTimeout(
        function (){
        key_selected.classList.remove("pressed");
        }
        , 600);
  }
