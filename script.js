//Mapping of what beats what//
whatBeatsWhat = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
}


//Variables//
const rpsItens = ["rock", "paper", "scissors"];
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

//Get the player choice and makes it lower case, need to add while to compare it//

function getPlayerChoice(){
    let playerChoice = prompt("Choose between rock, paper or scissors!").toLowerCase();
    return playerChoice;
    }

//Get the computer random choice by using the rpsItens array's length//

function getComputerChoice(){
    randomizeChoice = Math.floor(Math.random() * rpsItens.length)
    return (rpsItens[randomizeChoice])
} 

//Play a round, compare the variables to determine the result//

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It is a tie!";
    } if (whatBeatsWhat[playerSelection] === computerSelection ) {
       return "You win, " + playerSelection + " beats " + computerSelection + "!";
    } else {
        return "You lose " + computerSelection + " beats " + playerSelection + "!";
    }
}

//Brings up the function//

console.log(playRound(playerSelection, computerSelection))

function playGame(){

}

