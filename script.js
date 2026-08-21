const video = document.querySelector("#titleScreen");
const button = document.getElementById("startButton");

const buttonReference = {
    left: 75.2539,
    top: 19.1327,
    width: 22.2005,
    height: 14.0818
};

function positionStartButton() {
    const videoRect = video.getBoundingClientRect();

    button.style.left =
        `${videoRect.left + videoRect.width * buttonReference.left / 100}px`;

    button.style.top =
        `${videoRect.top + videoRect.height * buttonReference.top / 100}px`;

    button.style.width =
        `${videoRect.width * buttonReference.width / 100}px`;

    button.style.height =
        `${videoRect.height * buttonReference.height / 100}px`;
}

positionStartButton();
window.addEventListener("resize", positionStartButton);

setInterval(() => {
    if (video.currentTime >= 10.5) {
        video.currentTime = 1;
        video.play();
    }
}, 100);
