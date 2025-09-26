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

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?");
        return humanChoice.toLowerCase();
    }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    alert("You chose: " + humanChoice);
    alert("Bill chose: " + computerChoice);

    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        alert("You lose! Womp womp :(");
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        alert("You lose! Womp womp :(");
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        alert("You lose! Womp womp :(");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        alert("You win! Yippie C:");
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        alert("You win! Yippie C:");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        alert("You win! Yippie C:");
    }
    else if (humanChoice === computerChoice) {
        humanScore++; 
        computerScore++;
        alert("It's a tie :/");
    }
}


function playGame() {

    for(i = 1; i < 5; i++){

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(); 
           
        playRound(humanSelection, computerSelection);
    }

    alert("Your score is: " + humanScore + ". Bill's score is: " + computerScore);

    if (humanScore > computerScore) {
        alert("You win! Get fucked Bill >:)");
    } else if (humanScore == computerScore) {
        alert("It's a tie :/");
    } 
    else {
        alert("You lose! Loser bozo xd");
    } 
    
     }

    playGame();

