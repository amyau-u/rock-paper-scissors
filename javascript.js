// Get computer choice
// Pick random Number with math.random
// Assign each number to either rock paper or scissors
// Get the human choice - use prompt
// New funtion that takes the user choice and runs it through the r/p/s function
// Keep score of the wins by creating 2 new score variables
//write the logic to play a single round


const rock = 0;
const paper = 1;
const scissors = 2;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 );
        if (randomNumber === 0) {
            return "rock";
        } else if (randomNumber === 1) {
            return "paper";
        } else {
            return "scissors";
        }
}

console.log("Bill chose: ", getComputerChoice())

function getHumanChoice() {
    const humanChoice = prompt("Rock, paper or scissors?");
    return humanChoice.ignoreCase();
    }
const humanChoice = getHumanChoice();
    
console.log("You chose: ", humanChoice);

const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const computerChoice = getComputerChoice()
    if ()
}
