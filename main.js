function game() {
    let computerSelection
    let playerSelection
    let computerScore = 0
    let playerScore = 0

    for (let i = 0; i < 5; i++) {
        // Play a 5 round game
        console.log(`Round ${i+1}: `)

        playerSelection = getUserChoice()
        console.log(`Player choice: ${playerSelection}`)
        
        computerSelection = getComputerChoice()
        console.log(`Computer chice: ${computerSelection}`)
        
        console.log(playRound(computerSelection, playerSelection))
        console.log(`Current Scores: Computer is ${computerScore} and Player is ${playerScore}`) 
    }

    // Winner announcement
    if (playerScore > computerScore) return `You Win!`
    else if (computerScore > playerScore) return `You Lose!`
    else return `Tie!`

    function playRound(computerSelection, playerSelection) {
        // This function plays a single round of Rock Paper Scissors game
        if (computerSelection === 'rock') {
            if (playerSelection === 'paper') {
                playerScore++
                return `You Win! Paper beats Rock!`
            }
            else if (playerSelection === 'scissors') {
                computerScore++
                return `You Lose! Rock beat Scissors!`
            }
            // If it's tie, there is no need to change the scores!
            else return 'Tie!'
        }
    
        else if (computerSelection === 'paper') {
            if (playerSelection === 'scissors') {
                playerScore++
                return `You Win! Scissors beats Paper!`
            }
            else if (playerSelection === 'rock') {
                computerScore++
                return 'You Lose! Paper beats Rock!'
            }
            else return 'Tie'
        }
    
        else {
            if (playerSelection === 'rock') {
                playerScore++
                return 'You Win! Rock beats Scissors!'
            }
            else if (playerSelection === 'paper') {
                computerScore++
                return 'You Lose! Scissors beats Paper!'
            }
            else return 'Tie'
        }
    }
}

function getComputerChoice() {
    // This function will return computer choice
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0) return 'rock'
    else if (randomNumber == 1) return 'paper'
    else return 'scissors'
}


function getUserChoice() {
    // This function will get user choice. if the input is not valid, it will repeat
    let playerSelection
    do {
        playerSelection = prompt('What is your choice? (please only choose between rock, paper and scissors)').toLowerCase()
    } while (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'))
    return playerSelection
}

