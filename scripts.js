
// Pause and play the video, and change the icons
function video_pause_start() {

  // Get the video
  var video = document.getElementById("myVideo");

  // Get the button
  var btn = document.getElementById("Btn_Video");

  //get the icons
  var i_play = document.getElementById("i_play");
  var i_pause = document.getElementById("i_pause");


  if (video.paused) {
    video.play();
    i_pause.style.display = "block";
    i_play.style.display = "none";

  } else {
    video.pause();
    i_pause.style.display = "none";
    i_play.style.display = "block";

  }
}

//---------------------------------------------------------------

function cv_show_hide() {

  var cv = document.getElementById("CVContainer");
  var button = document.getElementById("CVButton-close");


  if (cv.style.display === "none") {
    cv.style.display = "flex";
    button.style.display = "block";

  } else {
    cv.style.display = "none";
    button.style.display = "none";
  }
  
}