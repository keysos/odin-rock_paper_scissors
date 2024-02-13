
function playGame(){

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
const roundCounter = 5;

//Get the player choice and makes it lower case, while to verify if it's valid//

function getPlayerChoice(){
    let testInput = false;
    while( testInput == false){
        let playerChoice = prompt("Choose between rock, paper or scissors!").toLowerCase();
        if(playerChoice == "rock" || "paper" || "scissors"){
            testInput = true
            return playerChoice;
        } else {
            alert("That is not an option! try again");
            playerChoice = prompt("Choose between rock, paper or scissors!").toLowerCase();
            testInput = false
        }
    }
   
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

    for (i = 0; i < roundCounter; i++){
        console.log(playRound(playerSelection, computerSelection));
    }

}

playGame()





