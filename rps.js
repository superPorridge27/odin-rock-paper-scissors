console.log("Hello World");

// INIT humanScore = 0 to keep track of human player's score
let humanScore = 0;

// INIT computerScore = 0 to keep track of computer player's score
let computerScore = 0;

function getComputerChoice() {
    // INIT randomVariable with a CALL to getRandomInt(3) to get either 0, 1, 2 randomly
    const randomVariable = getRandomInt(3);
    // IF randomVariable == 0
    // THEN return "rock"
    // ELSE IF randomVariable == 1
    // THEN return "paper"
    // ELSE
    // THEN return "scissors"
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
    // INIT humanChoice variable with a CALL to prompt() with 
    // a message asking the user what hand they would play
    let humanChoice = prompt("What hand would u play?");

    // Return the humanChoice as is
    return humanChoice;
}

// Takes human choice and computer choice, case insensitive
function playRound(humanChoice, computerChoice) {
    // INIT variable humanChoiceLC to store human choice with CALL to 
    // toLowerCase() to sanitize the input
    let humanChoiceLC = humanChoice.toLowerCase();

    console.log("Human Choice LC: " + humanChoiceLC);
    console.log("computer Choice: " + computerChoice);

    // CASE true OF
    switch(true) {
        // humanChoiceLC == computerChoice: 
        //  DISPLAY in console that humanChoiceLC vs computerChoice Ties!
        //  the player Draws!    
        case humanChoiceLC === computerChoice:
            console.log(humanChoiceLC + " vs " + computerChoice + " Ties! the player Draws!")
            break;
        
        // humanChoiceLC == rock && computerChoice == paper: 
        //  DISPLAY in console that Paper beats Rock! The player Loses!
        //  ADD computerScore by 1 number
        case humanChoiceLC === "rock" && computerChoice === "paper":
            console.log("Paper beats Rock! The player Loses!");
            computerScore++;
            break;

        // humanChoiceLC == rock && computerChoice == scissors:
        //  DISPLAY in console that Rock beats Scissors! The player Wins!
        //  ADD humanScore by 1 number
        case humanChoiceLC === "rock" && computerChoice === "scissors":
            console.log("Rock beats Scissors! The player Wins!");
            humanScore++;
            break;

        //  humanChoiceLC == paper && computerChoice == rock:
        //  DISPLAY in console that Paper beats Rock! The player Wins!
        //  ADD humanScore by 1 number
        case humanChoiceLC === "paper" && computerChoice === "rock":
            console.log("Paper beats Rock! The Player Wins!");
            humanScore++;
            break;

        //  humanChoiceLC == paper && computerChoice == scissors:
        //  DISPLAY in console that Scissors beats Paper! The player Loses!
        //  ADD computerScore by 1 number
        case humanChoiceLC === "paper" && computerChoice === "scissors":
            console.log("Scissors beats Paper! The Player Loses!");
            computerScore++;
            break;

        //  humanChoiceLC == scissors && computerChoice == rock:
        //  DISPLAY in console that Rock beats scissors! The player Loses!
        //  ADD computerScore by 1 number
        case humanChoiceLC === "scissors" && computerChoice === "rock":
            console.log("Rock beats Scissors! The player Loses!");
            computerScore++;
            break;

        //  humanChoiceLC == scissors && computerChoice == paper:
        //  DISPLAY in console that Scissors beats Paper! The player Wins!
        //  ADD humanScore by 1 number
        case humanChoiceLC === "scissors" && computerChoice === "paper":
            console.log("Scissors beats paper! The player Wins!");
            humanScore++
            break;
        //  ENDCASE
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
    // FOR 5 times
    // INIT humanSelection variable to store getHumanChoice()
    // INIT computerSelection variable to store getComputerChoice()
    // CALL playRound(humanSelection, computerSelection) to start the game
    // ENDFOR
    for(let i=0; i<5 ; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    
    // IF humanScore > computerScore
    // THEN DISPLAY HUMAN WINS! & CALL scoreReset
    // ELSE IF humanScore < computerScore
    // THEN DISPLAY COMPUTER WINS! & CALL scoreReset
    // ELSE
    // THEN DISPLAY HUMAN VS COMPUTER DRAWS! & CALL scoreReset
    // ENDIF
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

// console.log("getComputerChoice() result: ");
// console.log(getComputerChoice());

// console.log("getHumanChoice() result: ");
// console.log(getHumanChoice());

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

playGame();