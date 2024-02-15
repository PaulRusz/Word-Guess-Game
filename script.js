var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// Array of words the user will guess
var words = [
  "variable",
  "array",
  "modulus",
  "object",
  "function",
  "string",
  "boolean",
];

// The init function is called when the page loads
function init() {
  // call getWins
  // call getLosses
}

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  // If stored value doesn't exist, set winCounter to 0
  // else If a value is retrieved from client storage set the winCounter to that value
  // Render win count to page

  
}

function getLosses() {
  // Get stored value from client storage, if it exists
  // If stored value doesn't exist, set loseCounter to 0
  // else If a value is retrieved from client storage set the loseCounter to that value
  // Render loss count to page


}

// The startGame function is called when the start button is clicked
function startGame() {
  // set isWin flag
  // set timerCount
  // Prevents start button from being clicked when round is in progress
  // call renderblanks
  // call startTimer
}

// The winGame function is called when the win condition is met
function winGame() {
  // tell the user they won
  // increase winCounter
  // re-enable the startButton
  // Updates win count on screen and sets win count to client storage
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  // tell the user they lost
  // increase loseCounter
  // re-enable the startButton
  // Updates lose count on screen and sets win count to client storage
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Start interval timer that runs every second
  // in the function
  // -- decrease timerCount and update on the page
  // if timerCount >0, if the user won, clearInterval and call winGame
  // if the timercount=0 clearInterval and call loseGame
}

// Creates blanks on screen
function renderBlanks() {
  // Randomly picks word from words array
  // Update numBlanks with number of letters in word
  // Use loop to push blanks to blankLetters array
  // Converts blankLetters array into a string and renders it on the screen
}

function setWins() {
  // Updates win count on screen and sets win count to client storage
}

function setLosses() {
  // Updates lose count on screen and sets lose count to client storage
}

function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
}

// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
  // loop through all letters in the chosen word and see if any match the prssed letter
  // if a match is found, change blank letter to chosen letter.
  // update wordblank on page to display correct representation of blanks and chosen letters.
}

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function (event) {
  // If the timercount is zero, exit function
  // Convert all keys to lower case
  // Test if key pushed is letter
  // if it was a letter, call checkLetters and then call checkWin
});

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  // Renders win and loss counts and sets them into client storage (hint: there are functions for this)
}

// Attaches event listener to button
resetButton.addEventListener("click", resetGame);

// Calls init() so that it fires when page opened
init();