const targetDate = new Date('2024-12-13T19:00:00Z').getTime();

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

function sendToWhatsapp() {
    let number = "+19157770127";
    let mensaje = document.getElementById("mensaje").value;

    let url = `https://wa.me/${number}?text=${mensaje}`;

    console.log(mensaje);

    if (mensaje) {
        window.open(url, '_blank').focus();
    } else {
        alert("Llena el mensaje");
    }
}

// Array to store audio elements
const audios = [
    document.getElementById('audio1'),
    document.getElementById('audio2'),
    document.getElementById('audio3')
];

let currentAudio = 0; // Keeps track of the current audio being played

// Function to play the next audio in the sequence
function playNextAudio() {
    // Play the current audio
    audios[currentAudio].play();

    // When the current audio ends, move to the next
    audios[currentAudio].onended = function() {
        currentAudio = (currentAudio + 1) % audios.length; // Loop back to the first audio after the last
        playNextAudio(); // Play the next audio in the sequence
    };
}

// Start the sequence when the page loads
document.getElementById('start-button').addEventListener('click', function() {
    playNextAudio(); // Start playing the first audio when the button is clicked
});