const video = document.querySelector("video");

video.addEventListener("ended", () => {
    video.currentTime = 1;
    video.play();
});
