const video = document.querySelector("#titleScreen");
const button = document.getElementById("startButton");

// This is the button's correct position on your screen.
const reference = {
    left: 1155.9,
    top: 212.8,
    width: 341,
    height: 100
};

// The browser size where the button was positioned correctly.
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

// Position it immediately.
positionStartButton();

// Reposition it whenever the browser changes size.
window.addEventListener("resize", positionStartButton);


// Keep the title video looping from 1 second to 10.5 seconds.
setInterval(() => {
    if (video.currentTime >= 10.5) {
        video.currentTime = 1;
        video.play();
    }
}, 100);
