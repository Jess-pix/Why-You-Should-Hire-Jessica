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

button.addEventListener("pointerdown", (event) => {
    dragging = true;

    const rect = button.getBoundingClientRect();

    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;

    button.setPointerCapture(event.pointerId);
});

button.addEventListener("pointermove", (event) => {
    if (!dragging) return;

    button.style.left = `${event.clientX - offsetX}px`;
    button.style.top = `${event.clientY - offsetY}px`;
});

button.addEventListener("pointerup", () => {
    dragging = false;
});
