
whatBeatsWhat = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
}

const rpsItens = ["rock", "paper", "scissors"];

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function getPlayerChoice(){
    let playerChoice = prompt("Choose between rock, paper or scissors!").toLowerCase();
    return playerChoice;
    }
function getComputerChoice(){
    randomizeChoice = Math.floor(Math.random() * rpsItens.length)
    return (rpsItens[randomizeChoice])
} 

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It is a tie!";
    } if (whatBeatsWhat[playerSelection] === computerSelection ) {
       return "You win, " + playerSelection + " beats " + computerSelection + "!";
    } else {
        return "You lose " + computerSelection + " beats " + playerSelection + "!";
    }
}

console.log(playRound(playerSelection, computerSelection))

function playGame(){
    
}

