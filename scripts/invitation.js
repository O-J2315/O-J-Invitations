const targetDate = new Date('2024-08-17T21:00:00Z').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        // If the target date has passed
        countdown.textContent = "Countdown expired";
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.textContent = `${days}D ${hours}H ${minutes}M ${seconds}S`;
    }
}

setInterval(updateCountdown, 1000);

updateCountdown();