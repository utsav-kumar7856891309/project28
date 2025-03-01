// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check user's guess
function checkGuess() {
    const guess = (document.getElementById('guessInput').value);
    const message = document.getElementById('message');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
    } else if (guess === randomNumber) {
        message.textContent = "🎉 Congratulations! You guessed the correct number!";
    } else if (guess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } else {
        message.textContent = "Too high! Try again.";
    }
}
