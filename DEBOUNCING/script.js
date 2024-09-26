// Example usage: logging input value after 500ms of user typing
const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

// Debouncing function
function debounce(func, delay) {
  let timeoutId;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

searchInput.addEventListener(
  "input",
  debounce(function () {
    resultsDiv.textContent = `You typed: ${searchInput.value}`;
  }, 500)
);
