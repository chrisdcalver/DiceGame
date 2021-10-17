// Initialise globals variables
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Grab elements from the DOM to be used later
const message = document.getElementById('message')
const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')

// DRY: hide the rollBtn and display the resetBtn. 
function resetBtnFunc() {
    rollBtn.style.display = 'none'
    resetBtn.style.display = 'block'
}

// Roll Btn function when clicked
rollBtn.addEventListener('click', function() {

    const randomNumber = Math.floor(Math.random() *6) + 1  // Generate random number to be used later
    
    // If P1 turn is true then run if code. If false the else code. 
    if (player1Turn) {
        player1Score += randomNumber
        player1Dice.textContent = randomNumber
        player1Scoreboard.textContent = player1Score
        message.textContent = "Player 2 Turn"
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
    } else {
        player2Score += randomNumber
        player2Dice.textContent = randomNumber
        player2Scoreboard.textContent = player2Score
        message.textContent = "Player 1 Turn"
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')
    }

    // Change player1Turn value from true to false every time function is run
    player1Turn = !player1Turn

    // Whoever gets to 20 first wins and game needs to stop
    if (player1Score >= 20) {
        message.textContent = "Woohoo, Player 1 won!"
        resetBtnFunc()
    } else if (player2Score >= 20) {
        message.textContent = "Woohoo, Player 2 won!"
        resetBtnFunc()
    }
})

// Reset all var and DOM elements back to original state
resetBtn.addEventListener('click', function() {
    message.textContent = "Player 1 Turn"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    player1Score = 0
    player2Score = 0
    player1Turn = true
    rollBtn.style.display = 'block'
    resetBtn.style.display = 'none'
})