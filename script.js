let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function getHumanChoice() {
    const humanChoice = prompt('Enter your choice: rock, paper, or scissors');
    return humanChoice;
    
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return 'You win!';
    }
    else {
        computerScore++;
        return 'You lose!';
    }
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        
        console.log("Computer choice: " + computerChoice);
        console.log("Human choice: " + humanChoice);
        
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }

    if (humanScore === 5) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("Sorry, the computer won the game.");
    }
}

playGame();