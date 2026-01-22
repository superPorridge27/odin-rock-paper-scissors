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

// Takes human choice and computer choice, case insensitive
function playRound(humanChoice, computerChoice) {
    let humanChoiceLC = humanChoice.toLowerCase();

    console.log("Human Choice LC: " + humanChoiceLC);
    console.log("computer Choice: " + computerChoice);

    // CASE true OF
    switch(true) {
        case humanChoiceLC === computerChoice:
            console.log(humanChoiceLC + " vs " + computerChoice + " Ties! the player Draws!")
            break;
                case humanChoiceLC === "rock" && computerChoice === "paper":
            console.log("Paper beats Rock! The player Loses!");
            computerScore++;
            break;

        case humanChoiceLC === "rock" && computerChoice === "scissors":
            console.log("Rock beats Scissors! The player Wins!");
            humanScore++;
            break;

        case humanChoiceLC === "paper" && computerChoice === "rock":
            console.log("Paper beats Rock! The Player Wins!");
            humanScore++;
            break;

        case humanChoiceLC === "paper" && computerChoice === "scissors":
            console.log("Scissors beats Paper! The Player Loses!");
            computerScore++;
            break;

        case humanChoiceLC === "scissors" && computerChoice === "rock":
            console.log("Rock beats Scissors! The player Loses!");
            computerScore++;
            break;

        case humanChoiceLC === "scissors" && computerChoice === "paper":
            console.log("Scissors beats paper! The player Wins!");
            humanScore++
            break;
    }
}

// Resets the score of both human and computer
function scoreReset() {
    humanScore = 0;
    computerScore = 0;
    console.log("The score has been reset!");
}

// Play game for 5 rounds and declares the winner
function playGame() {
    
    const rockBtn = document.getElementById("rockBtn");
    const paperBtn = document.getElementById("paperBtn");
    const scissorsBtn = document.getElementById("scissorsBtn");

    rockBtn.addEventListener("click", function (e) {
        console.log("Rock is clicked!");
    })
    paperBtn.addEventListener("click", function (e) {
        console.log("Paper is clicked!");
    })
    scissorsBtn.addEventListener("click", function (e) {
        console.log("Scissors is clicked!");
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