const win = 0;
const lose = 0;
const draw = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("compScore");
const drawScore = document.getElementById("drawScore");

const play = () => {
    rock.addEventListener("click", () => {
        return "rock";
    });
    paper.addEventListener("click", () => {
        return "paper";
    });
    scissors.addEventListener("click", () => {
        return "scissors";
    });
}

const computerPlay = () => {
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

const game = () => {
    const playerChoice = play();
    const computerChoice = computerPlay();
    if (playerChoice === "rock" && computerChoice === "scissors") {
        win++;
        playerScore.innerHTML = win;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        lose++;
        computerScore.innerHTML = lose;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        win++;
        playerScore.innerHTML = win;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        lose++;
        computerScore.innerHTML = lose;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        win++;
        playerScore.innerHTML = win;
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        lose++;
        computerScore.innerHTML = lose;
    }
    else if (playerChoice === computerChoice) {
        draw++;
        drawScore.innerHTML = draw;
    }
}



play();
computerPlay();
game();
