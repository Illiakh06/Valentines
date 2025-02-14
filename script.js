const loveNotes = [
    "You are the sunshine that lights up my darkest days. ☀️",
    "Every moment with you feels like a dream. 💫",
    "Loving you is the easiest and most wonderful thing I've ever done. ❤️",
    "You are my heart’s favorite melody. 🎶",
    "With you, every day is Valentine's Day. 💕",
    "You make even the smallest moments feel magical. ✨",
    "Every heartbeat of mine whispers your name. 💓",
    "Life with you is a love story I never want to end. 📖❤️",
    "You bring joy into my life in the most unexpected ways. 😊💖",
    "There’s no place I’d rather be than by your side. 💑"
];

function generateLoveNote() {
    const note = loveNotes[Math.floor(Math.random() * loveNotes.length)];
    document.getElementById("love-note").innerText = note;
}

function valentineYes() {
    document.getElementById("celebration").style.display = "block";
    triggerChaosEffects();
    shakeScreen();
    changeBackground();
}

function valentineNo() {
    alert("😢 Oh no! But I still think you're amazing!");
}

function triggerChaosEffects() {
    const chaosContainer = document.getElementById("chaos-effects");
    chaosContainer.innerHTML = ""; // Clear previous confetti

    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.innerHTML = ["💖", "💝", "💘", "💗", "🎉", "🌟"][Math.floor(Math.random() * 6)];
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (Math.random() * 2 + 1) + "s";
        chaosContainer.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}

function shakeScreen() {
    document.getElementById("main-container").classList.add("shake");
    setTimeout(() => {
        document.getElementById("main-container").classList.remove("shake");
    }, 5000);
}

function changeBackground() {
    let colors = ["#ffcccc", "#ff99cc", "#ff66b2", "#ff3399", "#ff0066"];
    let index = 0;
    let interval = setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 500);

    setTimeout(() => clearInterval(interval), 5000);
}
