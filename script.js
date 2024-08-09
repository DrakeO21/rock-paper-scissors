let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const resultDisplay = document.querySelector("#results");
const resetBtn = document.querySelector("#resetButton");

    
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

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                if(humanScore < 5 && computerScore < 5){
                    const choices = button.getAttribute("id");
                    playRound(choices);
                }
            });
        });

    function playRound(choices) {
        const humanChoice = choices;
        const computerChoice = getComputerChoice();
        if (humanScore < 5 && computerScore < 5){

        }
        let message;
        if (humanChoice === computerChoice) {
            message = "You tie! Try Again!"
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            message = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
            humanScore += 1;
        } else {
            message = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
            computerScore += 1;
        }
        resultDisplay.textContent = message;
        updateScore();

        if (humanScore === 5 || computerScore === 5){
            endGame();
        }
    }

    function updateScore() {
        scoreDisplay.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;
    }

    function endGame(){
        if (humanScore === 5){
            resultDisplay.textContent = "Congragulations! You won the game!"
        } else {
            resultDisplay.textContent = "Sorry! You lost!"
        }
        resetBtn.classList.remove('hide');
        buttons.forEach(button => button.disabled = false);
    }

    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        updateScore();
        resultDisplay.textContent = "Choose your fate";
        resetBtn.classList.add('hide');
        buttons.forEach(button => button.disabled = false);
    }

    resetBtn.addEventListener('click', resetGame);