function generateLoveNote() {
    const loveNotes = [
        "You are the sunshine that lights up my darkest days. ☀️",
        "Every moment with you feels like a dream. 💫",
        "Loving you is the easiest and most wonderful thing I've ever done. ❤️",
        "You are my heart’s favorite melody. 🎶",
        "With you, every day is Valentine's Day. 💕"
    ];
    document.getElementById("love-note").innerText = loveNotes[Math.floor(Math.random() * loveNotes.length)];
}

function valentineYes() {
    document.getElementById("celebration").style.display = "block";
    triggerEffects();
    playFireworks();
}

function valentineNo() {
    alert("😢 Oh no! But I still think you're amazing!");
}

function triggerEffects() {
    document.body.style.backgroundColor = "#ff0000";
    setTimeout(() => {
        document.body.style.backgroundColor = "#ffebee";
    }, 3000);
}

function playFireworks() {
    for (let i = 0; i < 100; i++) {
        let firework = document.createElement("div");
        firework.innerHTML = "🎆";
        firework.classList.add("confetti");
        firework.style.left = Math.random() * 100 + "vw";
        firework.style.animationDuration = (Math.random() * 2 + 1) + "s";
        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 5000);
    }
}

function revealSurprise() {
    document.getElementById("hidden-message").classList.remove("hidden");
}
