// Get computer choice
// Pick random Number with math.random
// Assign each number to either rock paper or scissors
// Get the human choice - use prompt
// New funtion that takes the user choice and runs it through the r/p/s function
// Keep score of the wins by creating 2 new score variables
//write the logic to play a single round


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 );
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(str) {
    let humanChoice = prompt("Rock, paper or scissors?");
    return humanChoice.toLowerCase();
    }

const computerChoice = getComputerChoice
const humanChoice = getHumanChoice();
 
alert("You chose: " + humanChoice);
alert("Bill chose: " + getComputerChoice());


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock") && (computerChoice === "paper")) {
        computerScore++;
        alert("You lose! Womp womp :(");
    }
    else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        computerScore++;
        alert("You lose! Womp womp :(");
    }
    else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        computerScore++;
        alert("You lose! Womp womp :(");
    }
    else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        humanScore++;
        alert("You win! Yippie C:");
    }
    else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        humanScore++;
        alert("You win! Yippie C:");
    }
    else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        humanScore++;
        alert("You win! Yippie C:");
    }
    else {
        (humanChoice === computerChoice)
        alert("It's a tie :/");
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    function playGame() {

    }
}

