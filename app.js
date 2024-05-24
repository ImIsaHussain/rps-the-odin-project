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

function getHumanChoice() {
    return prompt('Enter your choice: rock, paper, or scissors').toLowerCase();
}

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

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        console.log(result);

        if (result === 'Human wins!') {
            humanScore++;
            console.log(`Human score: ${humanScore}`);
            console.log(`Computer score: ${computerScore}`);
        } else if (result === 'Computer wins!') {
            computerScore++;
            console.log(`Human score: ${humanScore}`);
            console.log(`Computer score: ${computerScore}`);
        } else {
            console.log(`Human score: ${humanScore}`);
            console.log(`Computer score: ${computerScore}`);
        }
    }

    if (humanScore > computerScore) {
        alert('Human wins the game!');
    } else if (humanScore < computerScore) {
        alert('Computer wins the game!');
    } else {
        alert('It\'s a tie!');
    }
}

console.log(playGame());