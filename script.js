function toggleMusic() {
    var music = document.getElementById("bg-music");
    var button = document.getElementById("music-toggle");
    if (music.paused) {
        music.play();
        button.innerText = "🔇 Mute Music";
    } else {
        music.pause();
        button.innerText = "🎶 Play Music";
    }
}

function valentineYes() {
    document.getElementById("celebration").style.display = "block";
    triggerChaosEffects();
    triggerScreenShake();
    triggerColorChange();
}

function valentineNo() {
    alert("😢 Oh no! But I still think you're amazing!");
}

function triggerChaosEffects() {
    const chaosContainer = document.getElementById("chaos-effects");
    chaosContainer.innerHTML = "";
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

function revealSurprise() {
    let surpriseDiv = document.getElementById("surprise-content");
    surpriseDiv.innerHTML = '<img src="special-memory.jpg" alt="A special memory" style="width:100%; border-radius:15px;">';
    surpriseDiv.classList.remove("hidden");
}
