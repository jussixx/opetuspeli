const words = [
    { name: "kissa", img: "kissa.png", sound: "kissa.mp3" },
    { name: "koira", img: "koira.png", sound: "koira.mp3" },
    { name: "aurinko", img: "aurinko.png", sound: "aurinko.mp3" },
    { name: "kukka", img: "kukka.png", sound: "kukka.mp3" },
    { name: "auto", img: "auto.png", sound: "auto.mp3" },
    { name: "puu", img: "puu.png", sound: "puu.mp3" },
    { name: "perhonen", img: "perhonen.png", sound: "perhonen.mp3" },
    { name: "hevonen", img: "hevonen.png", sound: "hevonen.mp3" },
    { name: "lehmä", img: "lehma.png", sound: "lehma.mp3" }
];

const gameBoard = document.getElementById("game-board");
let isFlipping = false;

function shuffleCards() {
    words.sort(() => Math.random() - 0.5);
}

function createBoard() {
    gameBoard.innerHTML = "";
    shuffleCards();
    words.forEach(word => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.name = word.name;

        const img = document.createElement("img");
        img.src = word.img;
        card.appendChild(img);

        card.addEventListener("click", () => flipCard(card, word.sound));
        gameBoard.appendChild(card);
    });
}

function flipCard(card, soundPath) {
    if (isFlipping || card.classList.contains("flipped")) return;
    
    isFlipping = true;
    card.classList.add("flipped");
    playSound(soundPath);

    setTimeout(() => {
        card.classList.remove("flipped");
        isFlipping = false;
        shuffleCards();
        createBoard();
    }, 4000);
}

function playSound(soundPath) {
    const audio = new Audio(soundPath);
    audio.play();
    setTimeout(() => {
        const repeatAudio = new Audio(soundPath);
        repeatAudio.play();
    }, 2500);
}

createBoard();
