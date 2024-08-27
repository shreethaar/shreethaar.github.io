var imgState = 0;
var images = ["assets/avatar.png", "assets/avatar2.png"];
var imgTag = document.getElementById("imgClickAndChange");
var audio = new Audio("assets/music/resonance.mp3");
audio.volume = 0.2;
audio.loop = false;

var audioPlayed = false;

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % images.length);
  event.target.src = images[imgState];

  if (!audioPlayed) {
    audio.play();
    audioPlayed = true;
  }
});
