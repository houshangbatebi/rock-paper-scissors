document.addEventListener('DOMContentLoaded', () => {

    // Initialization
    let computerSelection
    let playerSelection
    let computerScore = 0
    let playerScore = 0
    let gameOver = false;
    let  roundCount = 0
    const roundResult = document.querySelector('#round-result')
    let roundAnnouncement

    // Listen to button click event and play a round. If the game is over, no new round of the game will be played.
    const buttons = document.querySelectorAll('#buttons > button')
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            if (!gameOver) {
                computerSelection = getComputerChoice()
                playerSelection = event.target.textContent.toLowerCase()
                console.log(`Round ${++roundCount}:`)
                console.log(`Computer choice is ${computerSelection}`)
                console.log(`User choice is ${playerSelection}`)
                // Play a round
                roundAnnouncement = playRound(computerSelection, playerSelection)
                console.log(roundAnnouncement)
                roundResult.textContent = `Round ${roundCount}: Computer choice is ${computerSelection} and your choice is ${playerSelection}. ${roundAnnouncement}`
                // Update the result on webpage
                updateResultShow(roundAnnouncement)
            } 
        })
    })
    

    function getComputerChoice() {
        // This function will return computer choice
        let randomNumber = Math.floor(Math.random() * 3)
        if (randomNumber == 0) return 'rock'
        else if (randomNumber == 1) return 'paper'
        else return 'scissors'
    }

    function playRound(computerSelection, playerSelection) {
        // This function plays a single round of Rock Paper Scissors game and updates score variables
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


    function updateResultShow(){
        // This function updates the Result section on webpage
        document.querySelector('#user-score').textContent = playerScore
        document.querySelector('#computer-score').textContent = computerScore
        if (playerScore === 5) {
            gameOver = true;
            endGame('Win!')
        }
        else if (computerScore === 5) {
            gameOver = true;
            endGame('Lose!')
        }
    }

    function endGame(finalResult) {
        // Announce the winner and show the reset button!
        const resultContainer = document.querySelector('#result')
        const announcement = document.createElement('h3')
        announcement.textContent =  `You ${finalResult}`
        resultContainer.appendChild(announcement)

        // Show 'Play Again' button
        const resetButton = document.createElement('button')
        resetButton.textContent = 'Play Again!'
        resultContainer.appendChild(resetButton)
        // When the button is clicked, reset the game.
        resetButton.addEventListener('click', () => {
            // Initialization
            playerScore = 0
            computerScore = 0
            gameOver = false
            roundCount = 0
            roundResult.textContent = ''
            console.warn('Resetting the game...')
            // Remove the last announcement and reset button
            resultContainer.removeChild(announcement)
            resultContainer.removeChild(resetButton)
            // Update the scores on webpage
            updateResultShow()
        })
    }
})

