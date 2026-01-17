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
    // INIT humanChoice variable with a CALL to prompt() with a message asking the user what hand they would play
    let humanChoice = prompt("What hand would u play?");

    // Return the humanChoice as is
    return humanChoice;
}

console.log("getComputerChoice() result: ");
console.log(getComputerChoice());

console.log("getHumanChoice() result: ");
console.log(getHumanChoice());