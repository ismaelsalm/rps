let roundNumber = 0;
let humanScore = 0;
let computerScore = 0;
let matchText = ''

class Option {
    static Rock = "rock";
    static Paper = "paper";
    static Scissors = "scissors";

    static fromString(option) {
        switch (option) {
            case 'rock':
                return Option.Rock;
            case 'paper':
                return Option.Paper;
            case 'scissors': 
                return Option.Scissors;
            default:
                return undefined;
        }
    }
}

function getComputerChoice() {
    const randomFactor = Math.random() * 100;
    return randomFactor > 66 ? Option.Rock : randomFactor > 33 ? Option.Paper : Option.Scissors;
}

function accessResult(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) return 0;
    if ((player1Choice == Option.Rock && player2Choice == Option.Scissors) 
        || (player1Choice == Option.Paper && player2Choice == Option.Rock) 
        || (player1Choice == Option.Scissors && player2Choice == Option.Paper)) return 1;
    return 2;
}

function playRound(humanChoice, computerChoice = getComputerChoice()) {
    
    roundNumber++;
    const result = accessResult(humanChoice, computerChoice)

    if(!result) matchText = `It was a tie. (${humanChoice})`
    else if (result === 1) {
        humanScore++;
        matchText = `You won, ${humanChoice} beats ${computerChoice}.`
    }
    else {
        computerScore++;
        matchText =  `They won, ${computerChoice} beats ${humanChoice}.`
    }
}

function clearMatch() {
    humanScore = 0;
    computerScore = 0;
    roundNumber = 0;
    matchText = '';
    updateUI();
    updateHistory()
}

function completeGame() {
    if(!(humanScore >= 5 || computerScore >= 5)) return;
    if (confirm(`The winner is: ${humanScore > computerScore ? "humans..." : "COMPUTERS!!!"}. \n do you wan't to play again?`)) {
        clearMatch()
    }
}

const matchNumberDisplay = document.getElementById('match-number')
const humanScoreDisplay = document.getElementById('score-human')
const computerScoreDisplay = document.getElementById('score-computer')
const matchResultTextDisplay = document.getElementById('match-result')
const historyListContainer = document.getElementById('history-list')

function updateUI() {
    matchNumberDisplay.innerText = roundNumber;
    matchResultTextDisplay.innerText = matchText;
    computerScoreDisplay.innerText = computerScore;
    humanScoreDisplay.innerText = humanScore;
}

function updateHistory() {
    if(!roundNumber) {historyListContainer.replaceChildren([]); return;}
    const listItem = document.createElement('li')
    listItem.innerText = matchText
    historyListContainer.appendChild(listItem)
}

const btnContainer = document.getElementById('play')
btnContainer.addEventListener('click', (ev) => {
    const option = Option.fromString(ev.target.id)
    if (!option) return;
    updateHistory()
    playRound()
    updateUI();
    completeGame()
})

updateUI()