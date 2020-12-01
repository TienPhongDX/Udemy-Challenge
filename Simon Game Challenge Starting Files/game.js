var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(".btn").click(function (event) {      // Đưa giá trị user nhấn vào userClickedPattern
  var userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  play_sound(userChosenColour);
  animatePress(userChosenColour);
  check_answer(userClickedPattern.length-1);
});

$(document).keydown(function () {       // Dùng cho chức năng nhấn phím bất kì để bắt đầu
    if (!started) {
        
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function nextSequence() {               // Tăng level
    userClickedPattern=[];

    level++;
    $("#level-title").text("Level " + level);
  var random_Number = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[random_Number];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  play_sound(randomChosenColour);
  
}

function check_answer(currentLevel) {   // Kiểm tra kết quả và lên level tiếp theo
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("Wrong");
        play_sound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {                  // Reset
    level=0;
    gamePattern = [];
    started = false;
}

function play_sound(name) {             // Chức năng: phát âm thanh khi nhấn
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {  // Thêm hiệu ứng nháy cho nút
    $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 200);
}
