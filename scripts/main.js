/**
 * Creates confetti animation by generating multiple confetti elements
 * with random colors, positions, and animations.
 */
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

/**
 * Handles the event when the "Ask Valentine" button is clicked.
 * - Disables the button and applies animation.
 * - Creates confetti effect.
 * - Displays a message after a delay.
 * - Redirects to the countdown page.
 */
function askValentine() {
    const button = document.querySelector('.cta-button');
    button.disabled = true;
    button.classList.add('animate__animated', 'animate__bounceOut');

    createConfetti();

    setTimeout(() => {
        const message = document.createElement('div');
        message.classList.add('animate__animated', 'animate__fadeInUp');
        message.style.color = '#ff6b6b';
        message.style.fontSize = '1.5em';
        message.style.marginTop = '20px';
        message.style.textAlign = 'center';
        message.textContent = "You've made my day! 💖";

        const cardContent = document.querySelector('.card-content');
        cardContent.appendChild(message);

        setTimeout(() => {
            button.classList.remove('animate__bounceOut');
            button.classList.add('animate__bounceIn');
        }, 1000);
    }, 1000);

    setTimeout(() => {
        console.log('Attempting to redirect...');
        try {
            window.location.href = './countdown.html';
        } catch (error) {
            console.error('Redirect failed:', error);
            window.location.replace('./countdown.html');
        }
    }, 1500);
}
