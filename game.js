let playerScore = 0;
let computerScore = 0;
let gameCount = 0;

function playGame(playerChoice) {
    const choices = ["kámen", "nůžky", "papír"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("computerChoice").textContent = computerChoice;

    if (
        (playerChoice === "kámen" && computerChoice === "nůžky") ||
        (playerChoice === "nůžky" && computerChoice === "papír") ||
        (playerChoice === "papír" && computerChoice === "kámen")
    ) {
        playerScore++;
    } else if (playerChoice === computerChoice) {
        // Remíza - žádné body
    } else {
        computerScore++;
    }

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;

    gameCount++;

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    if (playerScore === 5) {
        alert("Vyhrál jsi hru!");
    } else if (computerScore === 5) {
        alert("Počítač vyhrál hru!");
    } else {
        alert("Hra skončila remízou!");
    }

    resetGame();
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameCount = 0;
    document.getElementById("computerChoice").textContent = "";
    document.getElementById("playerScore").textContent = "0";
    document.getElementById("computerScore").textContent = "0";
}
