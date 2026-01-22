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
            return "draw";
        
        case humanChoiceLC === "rock" && computerChoice === "paper":
            console.log("Paper beats Rock! The player Loses!");
            return "computer";

        case humanChoiceLC === "rock" && computerChoice === "scissors":
            console.log("Rock beats Scissors! The player Wins!");
            return "human"

        case humanChoiceLC === "paper" && computerChoice === "rock":
            console.log("Paper beats Rock! The Player Wins!");
            return "human";

        case humanChoiceLC === "paper" && computerChoice === "scissors":
            console.log("Scissors beats Paper! The Player Loses!");
            return "computer";

        case humanChoiceLC === "scissors" && computerChoice === "rock":
            console.log("Rock beats Scissors! The player Loses!");
            return "computer";

        case humanChoiceLC === "scissors" && computerChoice === "paper":
            console.log("Scissors beats paper! The player Wins!");
            return "human";
    }
}

// Resets the score of both human and computer
function scoreReset() {
    humanScore = 0;
    computerScore = 0;
    console.log("The score has been reset!");
}

// Adds the score according to the winner
function scoreAdd(winner) {
    console.log("scoreAdd entered" +winner);
    switch(winner) {
        case winner === "human" :
            console.log("Adding score to human");
            humanScore++;
            break;

        case winner === "draw":
            console.log("It's a draw, not adding any score");
            break;

        case winner === "computer":
            console.log("Adding score to computer");
            break;
    }
}

function playGame() {
    
    const rockBtn = document.getElementById("rockBtn");
    const paperBtn = document.getElementById("paperBtn");
    const scissorsBtn = document.getElementById("scissorsBtn");

    rockBtn.addEventListener("click", function (e) {
        scoreAdd(playRound("rock", getComputerChoice()));
    })
    paperBtn.addEventListener("click", function (e) {
        scoreAdd(playRound("paper", getComputerChoice()));
    })
    scissorsBtn.addEventListener("click", function (e) {
        scoreAdd(playRound("scissors", getComputerChoice()));
    })

    if(humanScore > computerScore) {
        console.log("HUMAN WINS!");
        scoreReset();
    }
    else if(humanScore < computerScore) {
        console.log("COMPUTER WINS!");
        scoreReset();
    }
    else {
        console.log("HUMAN VS COMPUTER DRAWS!");
        scoreReset();
    }
}

playGame();