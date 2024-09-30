// Throttle function implementation
function throttle(func, limit) {
  let inThrottle; // Flag to keep track if we are in the throttle period
  return function (...args) {
    const context = this; // Save context (in case 'this' changes)
    if (!inThrottle) {
      func.apply(context, args); // Execute the function
      inThrottle = true; // Set throttle flag to true
      setTimeout(() => (inThrottle = false), limit); // After the limit, reset throttle
    }
  };
}

// Button click handler
let clickCount = 0;

function handleClick() {
  clickCount++;
  document.getElementById(
    "output"
  ).innerText = `Button clicked: ${clickCount} times`;
}

// Get the button and attach throttled handler
const button = document.getElementById("throttleButton");
const throttledHandleClick = throttle(handleClick, 2000); // Throttle function to limit clicks to once every 2 seconds

button.addEventListener("click", throttledHandleClick);
