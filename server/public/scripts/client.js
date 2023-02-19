console.log('hello world');
//Linked Dom elements
let currentIndex = 1;
let randomNumber = Math.floor(Math.random() *25) +1 //Generates random number
// const guessInputs = document.querySelector('guess-input')
// const totalGuesses = document.querySelector('total-guesses')
// const winnerPrompt = document.querySelector('winner-prompt')
// const restartButton = document.querySelector('restart-button')
console.log(randomNumber)

  // Update the total guesses made

// // Guess history
// const guessHistory = {}
// for (let i = 0 < guessInputs.clientHeight; i++){
//     guessHistory('players{i+1}') = []
// }

function submitGuess(event) {
    console.log('submitGuess');
    // Stop the page from refreshing
    event.preventDefault();

    // Find the input field and assign the value to our variable
    let P1Guess = document.querySelector('#guess-number1').value;
    let P2Guess = document.querySelector('#guess-number2').value;
    //! .value always returns a string, for a number use Number(string)
    let P3Guess = document.querySelector('#guess-number3').value;
    let P4Guess = document.querySelector('#guess-number4').value;

    // Find the tbody on the page so that we can append to it
    let playerGuesses = document.querySelector('#player-guesses');
    let totalGuesses = document.querySelector('#total-guesses');

    let player1Result = '';
    let player2Result = '';
    let player3Result = '';
    let player4Result = '';
    if (P1Guess == randomNumber) {
  player1Result = 'correct';
    } else if (P1Guess < randomNumber) {
  player1Result = 'too low';
    } else {
  player1Result = 'too high';
    }
    if (P2Guess == randomNumber) {
  player2Result = 'correct';
    } else if (P2Guess < randomNumber) {
  player2Result = 'too low';
    } else {
  player2Result = 'too high';
    }
    if (P3Guess == randomNumber) {
  player3Result = 'correct';
    } else if (P3Guess < randomNumber) {
  player3Result = 'too low';
    } else {
  player3Result = 'too high';
    }
    if (P4Guess == randomNumber) {
  player4Result = 'correct';
    } else if (P4Guess < randomNumber) {
  player4Result = 'too low';
    } else {
  player4Result = 'too high';
    }
    playerGuesses.innerHTML += `
        <tr>
            <td>${P1Guess} ${player1Result}</td>
            <td>${P2Guess} ${player2Result}</td>
            <td>${P3Guess} ${player3Result}</td>
            <td>${P4Guess} ${player4Result}</td>
        </tr>
    `;
    totalGuesses.innerHTML = `<p>Total Guesses Made ${currentIndex}</p>` ;
    currentIndex += 1;
    // Check the number against the random number
    if (Number(P1Guess) === randomNumber) {
        // Number(playerGuesses) turns a string into a number
        document.querySelector('#guess-winner').innerHTML = `<p>And the winner is... Player one!</p>`
    }
    if (Number(P1Guess) > randomNumber) {
        // Number(playerGuesses) turns a string into a number
       
    }
    if (Number(P2Guess) === randomNumber) {
        // Number(playerGuesses) turns a string into a number
        document.querySelector('#guess-winner').innerHTML = `<p>And the winner is... Player two!</p>`
    }
    if (Number(P3Guess) === randomNumber) {
        // Number(playerGuesses) turns a string into a number
        document.querySelector('#guess-winner').innerHTML = `<p>And the winner is... Player three!</p>`
    }
    if (Number(P4Guess) === randomNumber) {
        // Number(playerGuesses) turns a string into a number
        document.querySelector('#guess-winner').innerHTML = `<p>And the winner is... Player four!</p>`
    }

// Checking guess and updating history
   
}

// Function to restart the game
function restartGame() {
    currentIndex = 1;
    history.player1 = [];
    history.player2 = [];
    history.player3 = [];
    history.player4 = [];
    document.querySelector('#total-guesses').innerHTML = `<p>Total Guesses Made</p>`
    document.querySelector('#player-guesses').innerHTML = '';
    document.querySelector('#guess-winner').innerHTML = '';
    document.querySelector('#guess-number1').value = ''
    document.querySelector('#guess-number2').value = ''
    document.querySelector('#guess-number3').value = ''
    document.querySelector('#guess-number4').value = ''
    randomNumber = Math.floor(Math.random() *25) +1
    console.log(randomNumber)
  }

  