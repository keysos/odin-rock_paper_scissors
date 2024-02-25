

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");


const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;



//Makes it so the data contained in th button clicked is used as the player choice for the rest of the code.

document.querySelectorAll(".choiceBtn button").forEach(button => {
    button.addEventListener("click", () => {
        let playerChoice = button.getAttribute("data-choice");
        playGame(playerChoice);
    });
});

function playGame(playerChoice) {
    //Generates a random choice for the computer
    const computerChoice = options[Math.floor(Math.random() * 3)];
    let result = "";

    //Compares the player and computer choices and returns it true or false.    
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
    
    //Changes the content of the div in the HTML for the respective result
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
        showModal(winner);
        // Reset scores
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }
}

function showModal(winner){
    document.getElementById("winnerText").textContent = `${winner} wins the game!`;
    const modal = document.getElementById("winnerModal");
    modal.style.display = "block";
    document.getElementById("playAgainBtn").addEventListener("click", function(){
        modal.style.display = "none";
    })
    document.getElementsByClassName("close")[0].addEventListener("click", function(){
        modal.style.display = "none";
    })
}

