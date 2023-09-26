
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
setInterval(animateQuotes, 5000); 



// Get references to elements
/*const videoContainer = document.querySelector('.video-container');
const section2 = document.querySelector('.section2');

// Function to handle scroll event
function handleScroll() {
    const scrollY = window.scrollY;

    // Calculate the translation for section2 based on scroll position
    const section2Translation = -scrollY * 0.3; // Adjust the factor as needed

    // Apply the translation to section2
    section2.style.transform = `translateY(${section2Translation}px)`;
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);*/



