///////////////////////////////////////////////////////////////
//modal

const overlay = document.getElementById("overlay")
const openModal = document.getElementById("open-modal")

openModal.addEventListener("click", function(){
    overlay.style.display = "block"
})

const closeModal = document.getElementById("close-modal")

closeModal.addEventListener("click", function(){
    overlay.style.display = "none"
})

///////////////////////////////////////////////////////////////

//logo
const logo= document.getElementById("logo")
const logoPlayer1=document.getElementById("logo-player1")
const logoPlayer2=document.getElementById("logo-player2")

//scoreboard
// const message = document.getElementById("message")
const player1Scoreboard=document.getElementById("player1Scoreboard")
const player2Scoreboard=document.getElementById("player2Scoreboard")

//dice
const player1Dice=document.getElementById("player1Dice")
const player2Dice=document.getElementById("player2Dice")

//playerup
const player1up=document.getElementById("player1up")
const player2up=document.getElementById("player2up")

//buttons
const rollButton = document.getElementById("rollBtn")
const resetButton = document.getElementById("resetBtn")

//bg
let player1bg = document.getElementsByClassName("container-1")
let player2bg = document.getElementsByClassName("container-2")

//dice
const dice = document.getElementsByClassName("dice-image")



//variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true


 rollButton.addEventListener("click", function() {

    const rollNum = Math.floor(Math.random() * 6) + 1
   
    

    if (rollNum === 1) {
        dice[0].classList.add('dice-image1')
        dice[0].classList.add('visible')
        rollButton.classList.add('pointer')
        dice[0].classList.remove('dice-image2')
        dice[0].classList.remove('dice-image3')
        dice[0].classList.remove('dice-image4')
        dice[0].classList.remove('dice-image5')
        dice[0].classList.remove('dice-image6')
    } else if(rollNum === 2) {
        dice[0].classList.add('dice-image2')
        dice[0].classList.add('visible')
        rollButton.classList.add('pointer')
        dice[0].classList.remove('dice-image1')
        dice[0].classList.remove('dice-image3')
        dice[0].classList.remove('dice-image4')
        dice[0].classList.remove('dice-image5')
        dice[0].classList.remove('dice-image6')
    } else if(rollNum === 3) {
        dice[0].classList.add('dice-image3')
        dice[0].classList.add('visible')
        rollButton.classList.add('pointer')
        dice[0].classList.remove('dice-image1')
        dice[0].classList.remove('dice-image2')
        dice[0].classList.remove('dice-image4')
        dice[0].classList.remove('dice-image5')
        dice[0].classList.remove('dice-image6')
    } else if(rollNum === 4) {
        dice[0].classList.add('dice-image4')
        dice[0].classList.add('visible')
        rollButton.classList.add('pointer')
        dice[0].classList.remove('dice-image1')
        dice[0].classList.remove('dice-image2')
        dice[0].classList.remove('dice-image3')
        dice[0].classList.remove('dice-image5')
        dice[0].classList.remove('dice-image6')
    } else if(rollNum === 5) {
        dice[0].classList.add('dice-image5')
        dice[0].classList.add('visible')
        rollButton.classList.add('pointer')
        dice[0].classList.remove('dice-image1')
        dice[0].classList.remove('dice-image2')
        dice[0].classList.remove('dice-image3')
        dice[0].classList.remove('dice-image4')
        dice[0].classList.remove('dice-image6')
    } else if(rollNum === 6) {
        dice[0].classList.add('dice-image6')
        dice[0].classList.add('visible')
        rollButton.classList.add('pointer')
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
        player2bg[0].classList.add('inactive')
        player1bg[0].classList.remove('inactive')
        player1up.classList.add('shadow')
        player2up.classList.remove('shadow')
        player1Dice.innerText = rollNum
        player2Dice.innerText = "-"
        console.log(`Player 1 rolled ${rollNum}`)
        // message.textContent = "Player 1 Turn"
        
    } else {
        player2Score += rollNum
        player2Scoreboard.innerText = player2Score
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        player1bg[0].classList.remove('active2')
        player2bg[0].classList.add('active2')
        player1bg[0].classList.add('inactive')
        player2bg[0].classList.remove('inactive')
        player1up.classList.remove('shadow')
        player2up.classList.add('shadow')
        player2Dice.innerText = rollNum   
        player1Dice.innerText = "-"     
        console.log(`Player 2 rolled ${rollNum}`)
        // message.textContent = "Player 2 Turn"
     
    }
    var win = new Audio("win.wav"); // buffers automatically when created
    

    if (player1Score >= 20) {
        // message.textContent = "PLAYER 1 WINS!"
        // message.classList.add('titlevisible')
        rollButton.style.display = "none"
        resetButton.style.display = "inline-block"
        logo.style.display = "none"
        logoPlayer1.style.display="inline-block"
        logoPlayer2.style.display = "none"
        win.play();
    }  
    else if (player2Score >= 20) {
        // message.textContent = "PLAYER 2 WINS!"
        // message.classList.add('titlevisible')
        rollButton.style.display = "none"
        resetButton.style.display = "inline-block"
        logo.style.display = "none"
        logoPlayer1.style.display="none"
        logoPlayer2.style.display = "inline-block"
        win.play();
    }   

    var roll = new Audio("roll.wav"); // buffers automatically when created
    roll.play();

    function invisible() {
        dice[0].classList.remove('visible')
        rollButton.classList.remove('pointer')
        console.log('invisible')
      }
      
      setTimeout(invisible, 1000);

    player1Turn = !player1Turn
})



resetBtn.addEventListener("click",function(){
    reset()
})

function reset() {
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
    player1bg[0].classList.remove('inactive')
    player2bg[0].classList.add('inactive')
    player2up.classList.remove('shadow')
    logo.style.display = "inline-block"
    logoPlayer1.style.display="none"
    logoPlayer2.style.display = "none"

}
