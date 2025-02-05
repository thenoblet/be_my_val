/**
 * Toggles the theme between 'theme1' and 'theme2'.
 */
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('theme1')) {
        body.classList.remove('theme1');
        body.classList.add('theme2');
    } else {
        body.classList.remove('theme2');
        body.classList.add('theme1');
    }
}

/**
 * Sets a random initial theme on page load.
 */
function setRandomInitialTheme() {
    const themes = ['theme1', 'theme2'];
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    document.body.classList.add(randomTheme);
}

setRandomInitialTheme();
setInterval(toggleTheme, 2 * 60 * 1000);

window.onload = function() {
    const audio = document.getElementById('valentineSong');
    const playButton = document.getElementById('playButton');

    audio.play().catch(error => {
        console.log("Click on Play Sugar Plum");
        playButton.style.display = 'block';
    });

    playButton.addEventListener('click', () => {
        audio.play();
        playButton.style.display = 'none';
    });
};

/**
 * The date and time when the gift is expected to arrive.
 * @constant {number}
 */
const giftArrivalDate = new Date('2025-02-14T14:00:00Z').getTime();

/**
 * Creates a falling heart animation on the screen.
 */
function createFallingHeart() {
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.innerHTML = '❤️';
    heart.style.left = `${Math.random() * 100}vw`;
    const duration = 3 + Math.random() * 3;
    heart.style.animationDuration = `${duration}s`;
    heart.style.transform = `scale(${0.8 + Math.random() * 0.4})`;
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

/**
 * Creates and animates falling hearts at random positions.
 */
function createHearts() {
    const heartContainer = document.createElement('div');
    heartContainer.classList.add('falling-heart');
    heartContainer.innerHTML = '❤️';
    heartContainer.style.left = Math.random() * 100 + 'vw';
    heartContainer.style.animationDuration = Math.random() * 5 + 5 + 's';
    document.body.appendChild(heartContainer);
    setTimeout(() => {
        heartContainer.remove();
    }, 15000);
}

setInterval(createHearts, 500);

/**
 * Starts the heart animation by generating multiple falling hearts.
 */
function startHeartAnimation() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createFallingHeart(), i * 300);
    }
    setInterval(() => {
        createFallingHeart();
    }, 300);
}

/**
 * Creates a confetti effect with animated falling pieces.
 */
function createConfetti() {
    const colors = ['#ff6b6b', '#ff8585', '#ffd3d3', '#ffffff'];
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(confetti);
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

/**
 * Updates the countdown timer until the gift arrival date.
 */
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = giftArrivalDate - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = 
        `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`;
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerHTML = "Your gift has arrived! ❤️";
    }
}

function fadeOutAudio(audioElement, duration) {
    const fadeOutInterval = 50;
    const steps = duration / fadeOutInterval;
    const stepSize = audioElement.volume / steps;

    const fadeOut = setInterval(() => {
        if (audioElement.volume > 0) {
            audioElement.volume -= stepSize;
        } else {
            clearInterval(fadeOut);
            audioElement.pause();
            audioElement.volume = 1;
        }
    }, fadeOutInterval);
}

function goToMainPage() {
    const audio = document.getElementById('valentineSong');
    fadeOutAudio(audio, 500);
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 900);
}

createConfetti();
createHearts();
startHeartAnimation();
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
