const video = document.querySelector("video");

setInterval(() => {
    if (video.currentTime >= 10.5) {
        video.currentTime = 1;
        video.play();
    }
}, 100);

const button = document.getElementById("startButton");

let dragging = false;
let offsetX = 0;
let offsetY = 0;

button.addEventListener("mousedown", (event) => {
    dragging = true;
    offsetX = event.clientX - button.offsetLeft;
    offsetY = event.clientY - button.offsetTop;
});

document.addEventListener("mousemove", (event) => {
    if (!dragging) return;

    button.style.left = `${event.clientX - offsetX}px`;
    button.style.top = `${event.clientY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
    dragging = false;
});
