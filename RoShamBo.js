// getComputerChoice function
    // Generate varaible X = random string rock paper scissors
    // Output random string

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

getComputerChoice()

function getHumanChoice() {
    let HumanChoice = prompt();
    if (HumanChoice === "Rock" || HumanChoice === "Paper" || HumanChoice === "Scissors") {
        return HumanChoice;
    } else {
        return getHumanChoice();
    }
}
console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;
