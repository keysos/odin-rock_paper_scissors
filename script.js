

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll(".choiceBtn button").forEach(button => {
    button.addEventListener("click", () => {
        let playerChoice = button.getAttribute("data-choice");
        playGame(playerChoice);
    });
});

function playGame(playerChoice) {
    const computerChoice = options[Math.floor(Math.random() * 3)];
    let result = "";
        
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    
    switch(result) {
        //Adds green text for the player score and increases its count 
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
         //Adds red text for the computer score and increases its count 
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

    if (playerScore === 5 || computerScore === 5) {
        // Announce the winner
        const winner = playerScore === 5 ? "Player" : "Computer";
        alert(`${winner} wins the game!`);
        // Reset scores
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }
}