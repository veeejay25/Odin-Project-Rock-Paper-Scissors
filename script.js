let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'You lose!';
    }
}

function updateResults(message) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>${message}</p>
        <p>Human score: ${humanScore}</p>
        <p>Computer score: ${computerScore}</p>
    `;
    if (humanScore === 5) {
        resultsDiv.innerHTML += '<p>Congratulations! You won the game!</p>';
        resetGame();
    } else if (computerScore === 5) {
        resultsDiv.innerHTML += '<p>Sorry, the computer won the game.</p>';
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

document.getElementById('rock').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound('rock', computerChoice);
    updateResults(result);
});

document.getElementById('paper').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound('paper', computerChoice);
    updateResults(result);
});

document.getElementById('scissors').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound('scissors', computerChoice);
    updateResults(result);
});