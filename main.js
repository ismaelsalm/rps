class Option {
    static Rock = "Rock";
    static Paper = "Paper";
    static Scissors = "Scissors";
}

function getComputerChoice() {
    const randomFactor = Math.random() * 100;
    return randomFactor > 66 ? Option.Rock : randomFactor > 33 ? Option.Paper : Option.Scissors;
}

console.log(getComputerChoice())