function game() {
    let computerSelection
    let playerSelection
    let computerScore = 0
    let playerScore = 0

    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice()
        console.log(computerSelection)
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0) return 'rock'
    else if (randomNumber == 1) return 'paper'
    else return 'scissors'
}