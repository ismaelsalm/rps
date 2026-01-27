class Option {
    static Rock = "Rock";
    static Paper = "Paper";
    static Scissors = "Scissors";
}

function getComputerChoice() {
    const randomFactor = Math.random() * 100;
    return randomFactor > 66 ? Option.Rock : randomFactor > 33 ? Option.Paper : Option.Scissors;
}

function getHumanChoice() {
    const option = prompt("Choose Rock, Paper or Scissors.", Option.Rock).toLowerCase()
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

console.log(getHumanChoice())