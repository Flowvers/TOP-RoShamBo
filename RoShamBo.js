function capitalize(string) {
    return String(string).charAt(0).toUpperCase() + String(string).slice(1).toLowerCase();
}

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    switch (randInt) {
        case 0:
            console.log("Rock")
            break;
        case 1:
            console.log("Paper")
            break;
        case 2:
            console.log("Scissors")
            break;
        default:
            console.log("Error")
            break;
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
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

}