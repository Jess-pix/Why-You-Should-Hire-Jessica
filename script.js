const video = document.querySelector("video");

setInterval(() => {
    if (video.currentTime >= 10.5) {
        video.currentTime = 1;
        video.play();
    }
}, 100);

const button = document.getElementById("startButton");

const titleScreen = document.getElementById("titleScreen");

const videoReference = {
    left: 84.73,
    top: 24.63,
    width: 30.53,
    height: 11.57
};

function positionStartButton() {
    const videoRect = titleScreen.getBoundingClientRect();

    button.style.left =
        `${videoRect.left + (videoRect.width * videoReference.left / 100)}px`;

    button.style.top =
        `${videoRect.top + (videoRect.height * videoReference.top / 100)}px`;

    button.style.width =
        `${videoRect.width * videoReference.width / 100}px`;

    button.style.height =
        `${videoRect.height * videoReference.height / 100}px`;
}

positionStartButton();
window.addEventListener("resize", positionStartButton);
