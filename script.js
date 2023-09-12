

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

    playerSelectionLower = playerSelection.slice(1).toLowerCase();
    playerSelectionLetterUpper = playerSelection.slice(0, 1).toUpperCase();
    playerSelection = playerSelectionLetterUpper + playerSelectionLower;

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
    return outcome;
}

function game() {
    let computerScore = 0;
    let userScore = 0;


    for (let i = 0; i < 5; ++i) {
        let userChoice = prompt("Your choice?");
        let outcomeString = playRound(userChoice, getComputerChoice());

        if (outcomeString.slice(0, 9) === "You Lose!") {
            ++computerScore;
            console.log(`Computer won that round! Your score: ${userScore} Computer score: ${computerScore}`);
        }
        else if (outcomeString.slice(0, 8) === "You Win!") {
            ++userScore;
            console.log(`You won that round! Your score: ${userScore} Computer score: ${computerScore}`);
        }
        else {
            console.log(`Nobody won that round! Your score: ${userScore} Computer score: ${computerScore}`);
        }
    }

    if (computerScore > userScore) {
        console.log("Computer Wins!");
    }
    else if (userScore > computerScore) {
        console.log("You Win!");
    }
    else {
        console.log("Nobody Wins!");
    }
}

game();