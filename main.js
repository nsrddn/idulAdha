const btnPlay = document.querySelector("main button");
const audio = document.querySelector("main .audio-card .audio audio");
let play = false;
btnPlay.addEventListener("click", function () {
  this.style.backgroundImage = play
    ? "url(img/play.png)"
    : "url(img/pause.png)";
  play ? audio.pause() : audio.play();
  play = !play;
});