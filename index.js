//scoreboard
const message = document.getElementById("message")
const player1Scoreboard=document.getElementById("player1Scoreboard")
const player2Scoreboard=document.getElementById("player2Scoreboard")

//dice
const player1Dice=document.getElementById("player1Dice")
const player2Dice=document.getElementById("player2Dice")

//buttons
const rollButton = document.getElementById("rollBtn")
const resetButton = document.getElementById("resetBtn")

//bg
let player1bg = document.getElementsByClassName("container-1")
let player2bg = document.getElementsByClassName("container-2")

//dice
const dice = document.getElementsByClassName("dice-image")

function changeColor(){
  dice[0].classList.add("dice-image1")
  
    
}


//variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true


 rollButton.addEventListener("click", function() {
    const rollNum = Math.floor(Math.random() * 6) + 1
    console.log(rollNum)
    

    if (rollNum === 1) {
        dice[0].classList.add('dice-image1')
        dice[0].classList.remove('dice-image2')
        dice[0].classList.remove('dice-image3')
        dice[0].classList.remove('dice-image4')
        dice[0].classList.remove('dice-image5')
        dice[0].classList.remove('dice-image6')
    } else if(rollNum === 2) {
        dice[0].classList.add('dice-image2')
        dice[0].classList.remove('dice-image1')
        dice[0].classList.remove('dice-image3')
        dice[0].classList.remove('dice-image4')
        dice[0].classList.remove('dice-image5')
        dice[0].classList.remove('dice-image6')
    } else if(rollNum === 3) {
        dice[0].classList.add('dice-image3')
        dice[0].classList.remove('dice-image1')
        dice[0].classList.remove('dice-image2')
        dice[0].classList.remove('dice-image4')
        dice[0].classList.remove('dice-image5')
        dice[0].classList.remove('dice-image6')
    } else if(rollNum === 4) {
        dice[0].classList.add('dice-image4')
        dice[0].classList.remove('dice-image1')
        dice[0].classList.remove('dice-image2')
        dice[0].classList.remove('dice-image3')
        dice[0].classList.remove('dice-image5')
        dice[0].classList.remove('dice-image6')
    } else if(rollNum === 5) {
        dice[0].classList.add('dice-image5')
        dice[0].classList.remove('dice-image1')
        dice[0].classList.remove('dice-image2')
        dice[0].classList.remove('dice-image3')
        dice[0].classList.remove('dice-image4')
        dice[0].classList.remove('dice-image6')
    } else if(rollNum === 6) {
        dice[0].classList.add('dice-image6')
        dice[0].classList.remove('dice-image1')
        dice[0].classList.remove('dice-image2')
        dice[0].classList.remove('dice-image3')
        dice[0].classList.remove('dice-image4')
        dice[0].classList.remove('dice-image5')
    }

    if (player1Turn) {
        player1Score += rollNum
        player1Scoreboard.innerText = player1Score
        player1Dice.classList.add("active")
        player2Dice.classList.remove("active")
        player1bg[0].classList.add('active2')
        player2bg[0].classList.remove('active2')
        player1Dice.innerText = rollNum
        console.log(`Player 1 rolled ${rollNum}`)
        // message.textContent = "Player 1 Turn"
        
    } else {
        player2Score += rollNum
        player2Scoreboard.innerText = player2Score
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        player1bg[0].classList.remove('active2')
        player2bg[0].classList.add('active2')
        player2Dice.innerText = rollNum        
        console.log(`Player 2 rolled ${rollNum}`)
        // message.textContent = "Player 2 Turn"
     
    }
   
    if (player1Score >= 20) {
        message.textContent = "PLAYER 1 WINS!"
        rollButton.style.display = "none"
        resetButton.style.display = "inline-block"

    } else if (player2Score >= 20) {
        message.textContent = "PLAYER 2 WINS!"
        rollButton.style.display = "none"
        resetButton.style.display = "inline-block"

    }


    player1Turn = !player1Turn

  

})



resetBtn.addEventListener("click",function(){
    reset()
})

function reset() {
    message.textContent = "DICE GAME"
    player1Score = 0
    player1Scoreboard.innerText = 0
    player1Dice.innerText = "-"
    player2Score = 0
    player2Scoreboard.innerText = 0
    player2Dice.innerText = "-"
    player1Turn = true
    rollButton.style.display = "inline-block"
    resetButton.style.display = "none"
    player1Dice.classList.add("active")
    player2Dice.classList.remove("active")
    player1bg[0].classList.add('active2')
    player2bg[0].classList.remove('active2')

}

// 1. Hook a click event listener up with the Reset Button
// 2. Create a reset() function that resets the game
// 3. Invoke the reset() function when the Reset Button is clicked