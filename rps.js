console.log("Hello World");

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

    // Return the humanChoice as is
}

console.log("getComputerChoice() result: ");
console.log(getComputerChoice());