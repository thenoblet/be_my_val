// Set target date to February 14, 2025 at 14:00 GMT
const giftArrivalDate = new Date('2025-02-14T14:00:00Z').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = giftArrivalDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the timer display with days included
    document.getElementById("timer").innerHTML = 
        `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerHTML = "Your gift has arrived! ❤️";
    }
}

function goToMainPage() {
    // Navigate back to the main page
    window.location.href = 'index.html';
}

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to avoid delay