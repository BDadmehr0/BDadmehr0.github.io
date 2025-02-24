document.addEventListener("DOMContentLoaded", () => {
    const windows = document.querySelectorAll(".window");

    windows.forEach((win) => {
        makeDraggable(win);
        randomizePosition(win);
        animateWindow(win);
    });
});

function makeDraggable(win) {
    let isDragging = false, x = 0, y = 0, offsetX = 0, offsetY = 0;
    const titleBar = win.querySelector(".title-bar");

    titleBar.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
        win.style.zIndex = "1000";
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            x = e.clientX - offsetX;
            y = e.clientY - offsetY;
            win.style.left = x + "px";
            win.style.top = y + "px";
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
}

function randomizePosition(win) {
    const maxX = window.innerWidth - win.clientWidth - 20;
    const maxY = window.innerHeight - win.clientHeight - 20;

    win.style.left = Math.floor(Math.random() * maxX) + "px";
    win.style.top = Math.floor(Math.random() * maxY) + "px";
}

function closeWindow(id) {
    document.getElementById(id).style.display = "none";
}

function animateWindow(win) {
    win.style.opacity = "0";
    win.style.transform = "scale(0.9)";
    setTimeout(() => {
        win.style.opacity = "1";
        win.style.transform = "scale(1)";
        win.style.transition = "all 0.3s ease-in-out";
    }, 100);
}
