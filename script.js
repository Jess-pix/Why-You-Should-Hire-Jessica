const video = document.querySelector("#titleScreen");
const button = document.getElementById("startButton");

// Your button's position when it looks correct.
const reference = {
    left: 1155.9,
    top: 212.8,
    width: 341,
    height: 100
};

// Your browser size when that position was correct.
const referenceScreen = {
    width: 1536,
    height: 864
};

function positionStartButton() {
    const scaleX = window.innerWidth / referenceScreen.width;
    const scaleY = window.innerHeight / referenceScreen.height;

    button.style.left = `${reference.left * scaleX}px`;
    button.style.top = `${reference.top * scaleY}px`;
    button.style.width = `${reference.width * scaleX}px`;
    button.style.height = `${reference.height * scaleY}px`;
}

positionStartButton();

window.addEventListener("resize", positionStartButton);

setInterval(() => {
    if (video.currentTime >= 10.5) {
        video.currentTime = 1;
        video.play();
    }
}, 100);
