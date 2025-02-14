function openLetter() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("main-container").classList.remove("hidden");
}

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
    triggerChaoticEffects();
}

function valentineNo() {
    alert("😢 Oh no! But I still think you're amazing!");
}

function triggerChaoticEffects() {
    triggerConfetti();
    triggerScreenShake();
    triggerColorChange();
    triggerFloatingHearts();
}

function triggerConfetti() {
    const chaosContainer = document.getElementById("chaos-effects");
    chaosContainer.innerHTML = "";

    for (let i = 0; i < 120; i++) {
        let confetti = document.createElement("div");
        confetti.innerHTML = ["💖", "💝", "💘", "💗", "🎉", "🌟", "❤️", "🔥", "💜", "💙", "💚"][Math.floor(Math.random() * 11)];
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (Math.random() * 2 + 1) + "s";
        chaosContainer.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}

function triggerScreenShake() {
    let container = document.getElementById("main-container");
    container.style.animation = "shake 0.5s infinite";  // Continuous shake
}

function triggerColorChange() {
    let colors = ["#ffcccc", "#ff9999", "#ff6666", "#ff3333", "#ff0000", "#ffcc00", "#ff6600", "#ff1493", "#ff4500"];
    let i = 0;
    let interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i % colors.length];
        i++;
        if (i > 30) clearInterval(interval);
    }, 150);
}

function triggerFloatingHearts() {
    for (let i = 0; i < 50; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = ["💖", "💘", "💗", "💓", "💞", "💕"][Math.floor(Math.random() * 6)];
        heart.classList.add("floating-heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }
}
