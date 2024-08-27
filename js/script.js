var imgState = 0;
var images = ["assets/avatar.png", "assets/avatar2.png"];
var imgTag = document.getElementById("imgClickAndChange");
var audio = new Audio("assets/music/msc.mp3");
audio.volume = 0.2;
audio.loop = true;

var audioPlayed = false;

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % images.length);
  event.target.src = images[imgState];
});

document.addEventListener("DOMContentLoaded", function() {
  if (!audioPlayed) {
    audio.play();
    audioPlayed = true;
  }
});

document.onclick = function() {
  if (!audioPlayed) {
    audio.play();
    audioPlayed = true;
  }
};

