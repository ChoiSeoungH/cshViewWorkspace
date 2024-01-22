//songs
function setHalfVolume() {
  var myAudio = document.getElementById("audio");
  myAudio.volume = 0.2;
}

let on_off = document.querySelector(".musicOn");

on_off.onclick = function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}