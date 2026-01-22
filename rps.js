let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomVariable = getRandomInt(3);
    if(randomVariable == 0) {
        return "rock";
    } else if (randomVariable == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Return random number from 0 to max number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice() {
    let humanChoice = prompt("What hand would u play?");

    return humanChoice;
}

// Takes human choice and computer choice, case insensitive.
// Returns winner of the game
function playRound(humanChoice, computerChoice) {
    let humanChoiceLC = humanChoice.toLowerCase();

    console.log("Human Choice LC: " + humanChoiceLC);
    console.log("computer Choice: " + computerChoice);

    switch(true) {
        case humanChoiceLC === computerChoice:
            console.log(humanChoiceLC + " vs " + computerChoice + " Ties! the player Draws!")
            scoring("draw");
            break;
        
        case humanChoiceLC === "rock" && computerChoice === "paper":
            console.log("Paper beats Rock! The player Loses!");
            scoring("computer");
            break;

        case humanChoiceLC === "rock" && computerChoice === "scissors":
            console.log("Rock beats Scissors! The player Wins!");
            scoring("human");
            break;

        case humanChoiceLC === "paper" && computerChoice === "rock":
            console.log("Paper beats Rock! The Player Wins!");
            scoring("human");
            break;

        case humanChoiceLC === "paper" && computerChoice === "scissors":
            console.log("Scissors beats Paper! The Player Loses!");
            scoring("computer");
            break;

        case humanChoiceLC === "scissors" && computerChoice === "rock":
            console.log("Rock beats Scissors! The player Loses!");
            scoring("computer");
            break;

        case humanChoiceLC === "scissors" && computerChoice === "paper":
            console.log("Scissors beats paper! The player Wins!");
            scoring("human");
            break;
    }
}

// Resets the score of both human and computer
function scoreReset() {
    humanScore = 0;
    computerScore = 0;
    console.log("The score has been reset!");
}

// Adds the score according to the winner
function scoring(winner) {
    switch(winner) {
        case "human" :
            console.log("Adding score to human");
            humanScore++;
            console.log("Player Score: " + humanScore + " Computer Score: " + computerScore);
            break;

        case "draw":
            console.log("It's a draw, not adding any score");
            console.log("Player Score: " + humanScore + " Computer Score: " + computerScore);
            break;

        case "computer":
            console.log("Adding score to computer");
            computerScore++;
            console.log("Player Score: " + humanScore + " Computer Score: " + computerScore);
            break;
    }
}

function playGame() {
    
    const rockBtn = document.getElementById("rockBtn");
    const paperBtn = document.getElementById("paperBtn");
    const scissorsBtn = document.getElementById("scissorsBtn");

    rockBtn.addEventListener("click", function (e) {
        playRound("rock", getComputerChoice());
    })
    paperBtn.addEventListener("click", function (e) {
        playRound("paper", getComputerChoice());
    })
    scissorsBtn.addEventListener("click", function (e) {
        playRound("scissors", getComputerChoice());
    })

}

playGame();