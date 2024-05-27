let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3 + 1)) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const humanChoice = document.querySelectorAll("button");

    humanChoice.forEach((button) => {
        button.addEventListener("click", () => {
            playGame(button.id);
        });
    });
});

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins!';
        } else {
            return 'Human wins!';
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer wins!';
        } else {
            return 'Human wins!';
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins!';
        } else {
            return 'Human wins!';
        }
    }
}

function roundResults(winner, playerScore, computerScore) {
    const winnerText = document.getElementById("roundResults");
    const gameScore = document.getElementById("score");
    winnerText.textContent = `${winner}`;
    gameScore.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
}

function playGame(choice) {
    let humanChoice = choice;
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);

    if (result === 'Human wins!') {
        humanScore++;
        roundResults("You are the round winner!", humanScore, computerScore);
    } else if (result === 'Computer wins!') {
        computerScore++;
        roundResults("Computer is the round winner!", humanScore, computerScore);
    } else {
        roundResults("It's a tie!", humanScore, computerScore);
    }

    if (humanScore == 5) {
        humanScore = 0;
        computerScore = 0;
        showModal("YOU WON!")
        roundResults("YOU WON!", humanScore, computerScore);
    }
    if (computerScore == 5) {
        humanScore = 0;
        computerScore = 0;
        showModal("COMPUTER WON!")
        roundResults("COMPUTER WON!", humanScore, computerScore);
    }
}

function showModal(message) {
    var modal = document.querySelector('#myModal');
    var span = document.querySelector('.close');
    var modalText = document.querySelector('#modalText');

    modalText.textContent = message;
    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    }
}
