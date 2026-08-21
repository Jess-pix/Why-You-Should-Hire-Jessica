const video = document.querySelector("video");

video.addEventListener("timeupdate", () => {
    if (video.currentTime >= 10.9) {
        video.currentTime = 1;
        video.play();
    }
});
