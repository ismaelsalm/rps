class Option {
    static Rock = "Rock";
    static Paper = "Paper";
    static Scissors = "Scissors";
}

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomFactor = Math.random() * 100;
    return randomFactor > 66 ? Option.Rock : randomFactor > 33 ? Option.Paper : Option.Scissors;
}

function getHumanChoice(prefixText) {
    const option = prompt(prefixText + " Choose Rock, Paper or Scissors.", Option.Rock).toLowerCase()
    if(option == "r") return Option.Rock;
    if(option == "p") return Option.Paper;
    if(option == "s") return Option.Scissors;

    if(option == "rock") return Option.Rock;
    if(option == "paper") return Option.Paper;
    if(option == "scissors") return Option.Scissors;

    if(option == "1") return Option.Rock;
    if(option == "2") return Option.Paper;
    if(option == "3") return Option.Scissors;
}

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
    class winner {
        static Tie = 0;
        static Human = 1;
        static Computer = 2;
    }
    let result = winner.Tie;
    if ((humanChoice == Option.Rock && computerChoice == Option.Scissors)) result = winner.Human;
    else if ((humanChoice == Option.Paper && computerChoice == Option.Rock)) result = winner.Human;
    else if ((humanChoice == Option.Scissors && computerChoice == Option.Paper)) result = winner.Human;
    else if ((computerChoice == Option.Rock && humanChoice == Option.Scissors)) result = winner.Computer;
    else if ((computerChoice == Option.Paper && humanChoice == Option.Rock)) result = winner.Computer;
    else if ((computerChoice == Option.Scissors && humanChoice == Option.Paper)) result = winner.Computer;

    if(result == winner.Tie) return "It was a tie."
    if (result == winner.Human) {
        humanScore++;
        return `You won, ${humanChoice} beats ${computerChoice}.`
    }
    
    computerScore++;
    return `They won, ${computerChoice} beats ${humanChoice}.`
}

function playGame(){
    

    let prefixText = ''
    for (let index = 1; index <= 5; index++) {
        prefixText = playRound(getHumanChoice(`Round: ${index}. ` + prefixText))
    }
    console.log(`Humans: ${humanScore} Computers: ${computerScore}. The winner is: ${computerScore > humanScore ? "COMPUTERS!!!" : "humans."}`)
    alert(`Humans: ${humanScore} Computers: ${computerScore}. The winner is: ${computerScore > humanScore ? "COMPUTERS!!!" : "humans."}`)
}

playGame();