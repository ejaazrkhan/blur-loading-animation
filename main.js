// Get the loading text and background elements
const loadingText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

// Set the initial progress value
let progress = 0;

// Set an interval to update the progress bar
const blurInterval = setInterval(updateProgress, 30);

// Function to update the progress bar
function updateProgress() {
    // Update the progress value
    progress++;

    // Check if the progress is complete
    // If so, clear the interval and remove the loading text and background
    if (progress > 99) {
        clearInterval(blurInterval);
    }
    // Update the loading text and background
    loadingText.textContent = `${progress}%`;
    loadingText.style.opacity = normalize(progress, 0, 100, 1, 0);
    background.style.filter = `blur(${normalize(progress, 0, 100, 30, 0)}px)`;
}

// Function to normalize a value between two ranges
function normalize(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}