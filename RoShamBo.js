function capitalize(string) {
    return String(string).charAt(0).toUpperCase() + String(string).slice(1).toLowerCase();
}

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    switch (randInt) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Error";
    }
}   

function getHumanChoice() {
    let HumanChoice = capitalize(prompt());
    if (HumanChoice === "Rock" || HumanChoice === "Paper" || HumanChoice === "Scissors") {
        return HumanChoice;
    } else {
        return getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundNumber = 0;


    function playRound() {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        roundNumber += 1;
        if (humanChoice === computerChoice) {
            console.log("Tie, you both chose " + humanChoice);
        } else if (humanChoice==="Rock" && computerChoice==="Paper" || humanChoice==="Paper" && computerChoice==="Scissors" || humanChoice==="Scissors" && computerChoice==="Rock") {
            computerScore += 1;
            console.log("You lose, " + computerChoice + " beats " + humanChoice + "!");
        } else if (humanChoice==="Paper" && computerChoice==="Rock" || humanChoice==="Rock" && computerChoice==="Scissors" || humanChoice==="Scissors" && computerChoice==="Paper") {
            humanScore += 1;
            console.log("You win, " + humanChoice + " beats " + computerChoice + "!");
        }
    }
    
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    if(computerScore > humanScore) {
        return("You lost by " + (computerScore - humanScore) + " points");
    } else if(humanScore > computerScore) {
        return("You won by " + (humanScore - computerScore) + " points");
    } else {
        return("You tied");
    }
}