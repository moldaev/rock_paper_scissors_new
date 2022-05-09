let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

/* const user_label = document.querySelector(".badge");
const computer_label = document.getElementById("computer-label"); */

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)} <span "user-label-span" class="badge-winner">user</span> beats ${convertToWord(computerChoice)} <span "computer-label-span" class="badge-loser">computer</span> <br> You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500)
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)}<span "computer-label-span" class="badge-winner">computer</span> beats ${convertToWord(userChoice)}<span "user-label-span" class="badge-loser">user</span> <br> Computer wins!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500)
}

function draw(userChoice) {
    result_div.innerHTML = "It's a draw!"
    document.getElementById(userChoice).classList.add('white-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('white-glow') }, 500)
}

function game(userChoice) {
    const computerChoice = getComputerChoice(); 
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice);
            break;

    }
}


function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();
