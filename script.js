let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const resultDisplay = document.querySelector("#results")

    
    function getComputerChoice() {
        let results = Math.floor(Math.random() * 3) + 1;
        if (results === 1){
            return "rock";
        } else if (results === 2){
            return "paper";
        } else {
            return "scissors";
        }
    }

    function getHumanChoice() {
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                humanChoice = button.id;
                computerChoice = getComputerChoice();
                playRound(humanChoice, computerChoice);
            });
        });
    }

    function playRound(humanChoice, computerChoice) { // use two parameters (humchoice and comchoice) as arguments for conditionals 
        let message;
        if (humanChoice === computerChoice) {
            message = "You tie! Try Again!"
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            message = `You won! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
            humanScore += 1;
        } else {
            message = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
            computerScore += 1;
        }
        resultDisplay.textContent = message;
        updateScore();
    }

    function updateScore() {
        scoreDisplay.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;
    }

    getHumanChoice();