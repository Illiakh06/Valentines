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

function sendMessage() {
    const message = document.getElementById("response").value;
    if (message.trim() !== "") {
        alert("Your message has been sent to your Valentine! 💖");
        document.getElementById("response").value = "";
    } else {
        alert("Please write something before sending! 😊");
    }
}
