// variables
let video = document.querySelector("#player1")
let videoVolume = document.querySelector("#volume")
let slider = document.querySelector("#slider")
let mute = document.querySelector("#mute")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false; // default to not auto play
	video.loop = false; // do not loop video
	videoVolume.innerHTML = `${video.volume * 100}%`;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play(); // play the video when button is clicked
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause(); // pause the video when button is clicked
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1; // decrease by 10%
	if (video.playbackRate < 0.1){
		video.playbackRate = 0.1;
	}
	console.log("Playback speed:", video.playbackRate.toFixed(2));
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1; // increase by 10%
	console.log("Playback speed:", video.playbackRate.toFixed(2));
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10; // set the new time
	if (video.currentTime > video.duration){
		video.currentTime = 0; // reset the video to the beginning
	}
	console.log("Current time:", video.currentTime.toFixed(2)), "seconds";
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){ // if video is not muted, mute the video
		video.muted = true;
		mute.innerHTML = "Unmute";
		console.log("video is muted");
	}
	else if (video.muted == true){
		video.muted = false; // if video is muted, unmute the video
		mute.innerHTML = "Mute";
		console.log("video is unmuted");
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = slider.value/100; // set volume to the slider value (0-1 value)
	videoVolume.innerHTML = `${video.volume * 100}%`; // display in percentage
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool"); // add old school filter
	console.log("vintage style applied")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool"); // remove old school filter (original)
	console.log("original style applied")
});


