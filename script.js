let computer;
let roundCounter;

function playGame(){
    while (true){
        roundCounter = parseInt(prompt("How many rounds do you wanna play?"));
        if (isValidRoundCounter(roundCounter)){
            break;
        }
    }

    for ( let i = 0; i < roundCounter; i++){
        const player = playerSelection();
        computerSelection();
        const result = checkWinner();
        alert(result);
    }
}
    function isValidRoundCounter(rounds) {
    return !isNaN(rounds) && rounds > 0;
    }


    function playerSelection(){
    let player = "";
    while(true){
        player = prompt("Choose between rock, paper or scissors").toLowerCase();
        if(player === "rock" || player === "paper" || player === "scissors"){
            return player;
        } else {
            alert("This option is invalid, try again!");
        }
        }  
    }

    function computerSelection(){
     
        const randNum = Math.floor(Math.random()*3) + 1;

        switch(randNum){
            case 1:
                computer = "rock";
                break;
            case 2:
                computer = "paper";
                break;
            case 3:
                computer = "scissors";
                break;    
        }
    }

    function checkWinner(player, computer){
        if (player == computer){
            return "It's a tie!";
        } else if (computer == "rock") {
            return (player == "paper") ? "You Win!" : "You Lose!"
        } else if (computer == "paper") {
            return (player == "scissors") ? "You Win!" : "You Lose!"
        } else if (computer == "scissors") {
            return (player == "rock") ? "You Win!" : "You Lose!"
    }

}



playGame();



