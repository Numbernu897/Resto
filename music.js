let mysong = document.getElementById("bgm");
let icon = document.getElementById("icon");

icon.onclick = function () {
  if (mysong.paused) {
    mysong.play();
    mysong.volume = 0.1;
    mysong.loop = true;
    icon.src = "Musc/pause.png";
  } else {
    mysong.pause();
    icon.src = "Musc/play.png";
  }
};