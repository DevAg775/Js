let randomno = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector(`#subt`);
const userInput = document.querySelector(`#guessField`);
const guessSlot = document.querySelector(`.guesses`);
const remaining = document.querySelector(`.lastResult`);
const lowOrhigh = document.querySelector(`.lowOrHi`);
const startOver = document.querySelector(`.resultParas`);

const p = document.createElement(`p`);

let prevGuess = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = userInput.value;
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //here we will validate guess like no. is int or not etc
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    alert(`Please enter a number greater than 1`);
  } else if (guess > 100) {
    alert(`Please enter a number less than 100`);
  } else {
    prevGuess.push(guess) //put the entered last element into the array
    if(numGuess === 11){
      cleanupGuess(guess)
      displayMessage(`Game Over, Randome number was ${randomno}`)
      endGame()
    } else {
      cleanupGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  //print message it's high or low
  if(guess == randomno){
    displayMessage(`You Guessed it right`)
  }
  else if(guess < randomno){
    displayMessage(`You Guess is too low`)
  }
  else if(guess > randomno){
    displayMessage(`You Guess is too high`)
  }
}

function cleanupGuess(guess) {
  // clean the value
  userInput.value = '' // cleanup method it will clean the input no.
  guessSlot.innerHTML += `${guess} `
  numGuess++ ;
  remaining.innerHTML = `${11- numGuess}`
}

function displayMessage(message) {
  //empty the user input value and add the no  innerhtml into the array and reduce the no of guesses.
  lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add("button")
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
const newGameButton  = document.querySelector('#newGame')
newGameButton.addEventListener('click', function(e){
  randomno = parseInt(Math.random() * 100 + 1);
  // now reset all variables
  prevGuess = []
  numGuess = 1
  guessSlot.innerHTML = ''
  remaining.innerHTML = `${11- numGuess}`;
userInput.removeAttribute('disabled')
startOver.removeChild(p)

playGame=true
})
}
