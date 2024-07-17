function getComputerChoice() {

    var choice = Math.random();

    if (choice <= 1/3) {
        return "rock";
    }
    else if (choice <= 2/3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {

    var choice  = prompt("Type rock, paper or scissors:");

    choice = choice.toLowerCase();

    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    }

    return null;

}

function playRound(playerChoice, compChoice) {
    
    if (playerChoice == compChoice) {
        console.log("Draw!")
        return "draw";
    }

    if ((playerChoice == "rock" && compChoice == "scissors") ||
        (playerChoice == "paper" && compChoice == "rock") || 
        (playerChoice == "scissors" && compChoice == "paper")) {

        console.log(`You win, ${playerChoice} beats ${compChoice}`);
        return "human";
    }

    else {
        console.log(`You lose, ${compChoice} beats ${playerChoice}`);
        return "comp";
    }

}

function playGame() {
    
    var numRounds = 5;
    var playerScore = 0;
    var compScore = 0;

    for (var i = 0; i < numRounds; i++) {

        var compChoice = getComputerChoice();
        var playerChoice = getHumanChoice();

        var result = playRound(playerChoice, compChoice);
        if (result == "human") {
            playerScore += 1;
        }
        else if (result == "comp") {
            compScore += 1
        }
    }

    return [playerScore, compScore]
}

var finalScore = playGame()

console.log(`Final Score: player: ${finalScore[0]}, computer: ${finalScore[1]}`)
