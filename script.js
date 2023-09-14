
let results = document.querySelector("#results");
let buttons = document.querySelectorAll("button");
let displayOutcome = document.createElement("div");
let scoreCount = document.createElement("div");
let computerScore = 0;
let userScore = 0;


buttons.forEach(button => {
    button.addEventListener("click", function(){playRound(button.id, getComputerChoice())});
});




function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let strChoice = "";

    switch (choice) {
        case 0:
            strChoice = "Rock";
            break;
        case 1:
            strChoice = "Paper";
            break;
        case 2:
            strChoice = "Scissors";
            break;
        default:
            break;
    }

    return strChoice;
}


function playRound(playerSelection, computerSelection) {
    const paperVRock = "Paper beats Rock";
    const rockVScissors = "Rock beats Scissors";
    const scissorsVPaper = "Scissors beats Paper";
    const paperVPaper = "Paper ties Paper";
    const rockVRock = "Rock ties Rock";
    const scissorsVScissors = "Scissors ties Scissors";
    const lose = "You Lose! ";
    const tie = "You Tie! ";
    const win = "You Win! ";

    let outcome = "";

    switch (playerSelection) {
        case "Rock":
            switch (computerSelection) {
                case "Rock":
                    outcome = tie + rockVRock;
                    break;
                case "Paper":
                    outcome = lose + paperVRock;
                    break;
                case "Scissors":
                    outcome = win + rockVScissors;
                    break;
            }
            break;
            
        case "Paper":
            switch (computerSelection) {
                case "Rock":
                    outcome = win + paperVRock;
                    break;
                case "Paper":
                    outcome = tie + paperVPaper;
                    break;
                case "Scissors":
                    outcome = lose + scissorsVPaper;
                    break;
            }
            break;

        case "Scissors":
            switch (computerSelection) {
                case "Rock":
                    outcome = lose + rockVScissors;
                    break;
                case "Paper":
                    outcome = win + scissorsVPaper;
                    break;
                case "Scissors":
                    outcome = tie + scissorsVScissors;
                    break;
            }
            break;
        
        

    }

    displayOutcome.textContent = outcome;
    results.appendChild(displayOutcome);

    if (outcome.slice(0, 9) === "You Lose!") {
        ++computerScore;
        scoreCount.textContent = `Computer won that round! Your score: ${userScore} Computer score: ${computerScore}`;
    }
    else if (outcome.slice(0, 8) === "You Win!") {            ++userScore;
        scoreCount.textContent = `You won that round! Your score: ${userScore} Computer score: ${computerScore}`;
    }
    else {
        scoreCount.textContent = `Nobody won that round! Your score: ${userScore} Computer score: ${computerScore}`;
    }
    results.appendChild(scoreCount);

    if(computerScore >= 5 || userScore >= 5) {
        results.removeChild(scoreCount);
        displayOutcome.textContent = `Game over! PC:${computerScore} to YOU:${userScore}`;
        computerScore = 0;
        userScore = 0;
    }



}




