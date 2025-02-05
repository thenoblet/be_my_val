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
        playButton.style.display = 'block'; // Show the play button if autoplay is blocked
    });

    playButton.addEventListener('click', () => {
        audio.play();
        playButton.style.display = 'none'; // Hide the button after playing
    });
};

const giftArrivalDate = new Date('2025-02-14T14:00:00Z').getTime();

function createFallingHeart() {
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.innerHTML = '❤️';
    heart.style.left = `${Math.random() * 100}vw`;
    const duration = 3 + Math.random() * 3;
    heart.style.animationDuration = `${duration}s`;
    const startRotation = Math.random() * 360;
    heart.style.transform = `rotate(${startRotation}deg)`;
    const size = 0.8 + Math.random() * 0.4;
    heart.style.transform = `scale(${size})`;
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

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

function startHeartAnimation() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createFallingHeart(), i * 300);
    }
    setInterval(() => {
        createFallingHeart();
    }, 300);
}

function createConfetti() {
    const colors = ['#ff6b6b', '#ff8585', '#ffd3d3', '#ffffff'];
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        const color = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = color;
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

function goToMainPage() {
    window.location.href = 'index.html';
}

createConfetti();
createHearts();
startHeartAnimation();
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();