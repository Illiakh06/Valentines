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
    triggerScreenShake();
    triggerColorChange();
    triggerBouncingHearts();
    playSound();
}

function valentineNo() {
    alert("😢 Oh no! But I still think you're amazing!");
}

function triggerChaosEffects() {
    const chaosContainer = document.getElementById("chaos-effects");
    chaosContainer.innerHTML = ""; // Clear previous effects

    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.innerHTML = ["💖", "💝", "💘", "💗", "🎉", "🌟", "❤️", "🔥"][Math.floor(Math.random() * 8)];
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (Math.random() * 2 + 1) + "s";
        chaosContainer.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}

function triggerScreenShake() {
    let container = document.getElementById("main-container");
    container.style.animation = "shake 0.5s infinite";
    setTimeout(() => {
        container.style.animation = "";
    }, 3000);
}

function triggerColorChange() {
    let colors = ["#ffcccc", "#ffb6c1", "#ff69b4", "#ff1493", "#db7093", "#c71585"];
    let i = 0;
    let interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i % colors.length];
        i++;
        if (i > 20) clearInterval(interval);
    }, 200);
}

function triggerBouncingHearts() {
    const body = document.getElementById("body");
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("bouncing-heart");
        heart.style.left = Math.random() * 100 + "vw";
        body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
}

function playSound() {
    let audio = new Audio("https://www.myinstants.com/media/sounds/tada-fanfare-a.mp3");
    audio.play();
}
