const loveNotes = [
    "You are the sunshine that lights up my darkest days. ☀️",
    "Every moment with you feels like a dream. 💫",
    "Loving you is the easiest and most wonderful thing I've ever done. ❤️",
    "You are my heart’s favorite melody. 🎶",
    "With you, every day is Valentine's Day. 💕"
];

function generateLoveNote() {
    const note = loveNotes[Math.floor(Math.random() * loveNotes.length)];
    document.getElementById("love-note").innerText = note;
}

function valentineYes() {
    document.getElementById("celebration").style.display = "block";
    confettiEffect();
}

function valentineNo() {
    alert("😢 Oh no! But I still think you're amazing!");
}

function confettiEffect() {
    const confetti = document.createElement("div");
    confetti.innerHTML = "💖💝💗💓";
    confetti.style.position = "fixed";
    confetti.style.left = "50%";
    confetti.style.top = "0";
    confetti.style.fontSize = "50px";
    confetti.style.animation = "fall 2s linear infinite";
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 3000);
}

@keyframes fall {
    from { transform: translateY(0); }
    to { transform: translateY(100vh); }
}
