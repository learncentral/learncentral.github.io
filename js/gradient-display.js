document.addEventListener("DOMContentLoaded", function() {
  // Define an array to store content classes
  var contents = ['.content-1', '.content-2', '.content-3'];
  var currentContentIndex = 0; // Initialize current content index

  // Function to display next content
  function displayNextContent() {
    // Hide current content
    document.querySelector(contents[currentContentIndex]).style.display = 'none';

    // Increment current content index
    currentContentIndex++;

    // Reset current content index if it exceeds the number of contents
    if (currentContentIndex >= contents.length) {
      currentContentIndex = 0;
    }

    // Display next content/
    document.querySelector(contents[currentContentIndex]).style.display = 'block';
  }

  // Function to start the cycle
  function startCycle() {
    // Display next content after a delay
    setInterval(displayNextContent, 10000); // Change content every 5 seconds
  }

  // Start the cycle
  startCycle();
});
