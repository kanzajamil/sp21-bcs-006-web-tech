
// JavaScript code for the text animation
const quotes = document.querySelectorAll('.quote-text');
let currentIndex = 0;

function animateQuotes() {
    // Hide the current quote if it exists
    if (quotes[currentIndex]) {
        quotes[currentIndex].style.opacity = 0;
    }

    // Increment the index
    currentIndex++;

    if (currentIndex < quotes.length) {
        // Show the next quote after a delay
        setTimeout(() => {
            quotes[currentIndex].style.opacity = 1;
        }, 250); // Adjust the delay as needed
    } else {
        // Reset to the first quote
        currentIndex = 0;
        quotes.forEach((quote) => {
            quote.style.opacity = 0;
        });
        if (quotes[currentIndex]) {
            quotes[currentIndex].style.opacity = 1;
        }
    }
}

// Start the animation immediately when the page loads
animateQuotes(); // Call the function to show the first quote

// Continue the animation with the specified interval
setInterval(animateQuotes, 5000); // Adjust the interval as needed

