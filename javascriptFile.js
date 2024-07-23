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

function playRound(playerChoice, compChoice, messageBoard) {
    
    if (playerChoice == compChoice) {
        messageBoard.textContent = 'Draw!'
        return "draw";
    }

    if ((playerChoice == "rock" && compChoice == "scissors") ||
        (playerChoice == "paper" && compChoice == "rock") || 
        (playerChoice == "scissors" && compChoice == "paper")) {

        messageBoard.textContent = `You win, ${playerChoice} beats ${compChoice}!`;
        return "Human";
    }

    else {
        messageBoard.textContent = `You lose, ${compChoice} beats ${playerChoice}!`;
        return "Comp";
    }

}

//return of 1 means game continues, return of 0 means game ends
function updateScores(winner, playerScore, compScore, messageBoard) {
    
    if (winner == 'Human') {
        playerScore++;
    }
    else if (winner == 'Comp') {
        compScore++;
    }
    if (playerScore == 5 || compScore == 5) {

        var newMessage = messageBoard.textContent + '\n' 
                            + `${winner} has won!`;

        messageBoard.textContent = newMessage;
        return [playerScore, compScore, 0];
    }
    return [playerScore, compScore, 1];
}

function endGame(buttonList) {
    
    var i = 0;
    while (i < buttonList.length) {
        buttonList[i].disabled = true;
        i++;
    }
}

//initialise scores
var playerScore = 0;
var compScore = 0;
var toContinue = 1;

var messageBoard = document.querySelector('div.messageBoard');

//add the eventListeners to the buttons
var buttonList = document.querySelectorAll("button");
var i = 0;

while (i < buttonList.length) {
    buttonList[i].addEventListener("click", function() {
        playerChoice = this.textContent;
        playerChoice = playerChoice.toLowerCase();

        var computerChoice = getComputerChoice();

        winner = playRound(playerChoice, computerChoice, window.messageBoard);

        var values = updateScores(winner, window.playerScore, window.compScore,
                                    window.messageBoard);
        window.playerScore = values[0];
        window.compScore = values[1];
        window.toContinue = values[2];
        
        //end the game once someone reaches 5 points
        if (window.toContinue == 0) {
            endGame(window.buttonList);
        }
    });

    i++;
}

