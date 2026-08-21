const video = document.querySelector("video");

setInterval(() => {
    if (video.currentTime >= 10.5) {
        video.currentTime = 1;
        video.play();
    }
}, 100);
