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

const resizeHandle = document.createElement("div");
resizeHandle.id = "resizeHandle";
button.appendChild(resizeHandle);

let resizing = false;

resizeHandle.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
    resizing = true;
    resizeHandle.setPointerCapture(event.pointerId);
});

resizeHandle.addEventListener("pointermove", (event) => {
    if (!resizing) return;

    const rect = button.getBoundingClientRect();

    const newWidth = event.clientX - rect.left;
    const newHeight = event.clientY - rect.top;

    if (newWidth > 30) {
        button.style.width = `${newWidth}px`;
    }

    if (newHeight > 20) {
        button.style.height = `${newHeight}px`;
    }
});

resizeHandle.addEventListener("pointerup", () => {
    resizing = false;
});
