let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    console.log(guessedNumber);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c"
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "#1e217c"
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congralutation! You Got It Right!.";
        gameResult.style.backgroundColor = "green"
    } else {
        gameResult.textContent = "Please provide a valid input.";
        gameResult.style.backgroundColor = "red";
    }
}