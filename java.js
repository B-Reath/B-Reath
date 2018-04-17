var video = document.getElementById("video-bg-elem");
var btn = document.getElementById("button");
function vPause() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } 
	
	else {
        video.pause();
        btn.innerHTML = "Play";
    }
}