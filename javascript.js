//---------------- CHOICES ---------------------
const choices = ["rock", "paper", "scissors"];
const showPlayerChoice = document.querySelector(".playerChoiceImage");
const showCompChoice = document.querySelector(".computerChoiceImage");

// Choice Buttons

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

// Get Player Choice

const playerImage = document.createElement("img");
    showPlayerChoice.appendChild(playerImage);

const computerImage = document.createElement("img");
    showCompChoice.appendChild(computerImage);

function showSelection(playerChoice, computerChoice) {
    playerImage.src = `assets/${playerChoice}.png`;
    playerImage.alt = playerChoice;    

    computerImage.src = `assets/${computerChoice}.png`;
    computerImage.alt = computerChoice; 
};

//------------------- SCORE START ---------------------------------

let humanScore = 0;
let computerScore = 0;

//------------------- COMPUTER CHOICE ------------------------------

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 );
    return choices[randomNumber];
}

//--------------------- UPDATE SCORES -------------------------------

function updateScore() {
    document.querySelector(".playerScore")
        .textContent = humanScore;
    document.querySelector(".computerScore")
        .textContent = computerScore;
};

//----------------- PLAY ROUND -----------------------------

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    let resultText = "";

    showSelection(playerChoice, computerChoice);
    if (playerChoice === computerChoice) {
        humanScore++;
        computerScore++;
        resultText = "It's a tie :/";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") || 
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
         resultText = "You win! Yippie C:";
    } else {
        computerScore++;
        resultText = "You lose! Womp womp :("
    }
    
    updateScore();

    document.querySelector(".outcome").textContent = resultText;
}

//--------------------EVENT LISTENERS-----------------------

document.querySelector(".rockBtn")
    .addEventListener ("click", () => playRound("rock"));
document.querySelector(".paperBtn")
    .addEventListener ("click", () => playRound("paper"));
document.querySelector(".scissorsBtn")
    .addEventListener ("click", () => playRound("scissors"));


// function playGame() {

//     for(i = 1; i < 5; i++){

//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice(); 
           
//         playRound(humanSelection, computerSelection);
//     }

//     alert("Your score is: " + humanScore + ". Bill's score is: " + computerScore);

//     if (humanScore > computerScore) {
//         alert("You win! Get fucked Bill >:)");
//     } else if (humanScore == computerScore) {
//         alert("It's a tie :/");
//     } 
//     else {
//         alert("You lose! Loser nerd xd");
//     } 
    
//      }

//     playGame();

