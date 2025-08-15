let stopwatchDisplay = document.getElementById("stopwatch");
let stopwatchInterval;
let stopwatchTime = 0; // in milliseconds
let isRunning = false;

function updateStopwatchDisplay() {
    let hours = Math.floor(stopwatchTime / 3600000);
    let minutes = Math.floor((stopwatchTime % 3600000) / 60000);
    let seconds = Math.floor((stopwatchTime % 60000) / 1000);

    stopwatchDisplay.textContent =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        let startTime = Date.now() - stopwatchTime;
        stopwatchInterval = setInterval(() => {
            stopwatchTime = Date.now() - startTime;
            updateStopwatchDisplay();
        }, 1000);
    }
}

function stopStopwatch() {
    isRunning = false;
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    updateStopwatchDisplay();
}
