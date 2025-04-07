const words = ["banana", "javascript", "laptop", "elephant", "guitar", "typing", "challenge", "school"];
const wordDisplay = document.getElementById("word");
const input = document.getElementById("input");
const result = document.getElementById("result");
const startBtn = document.getElementById("start");

let currentWord = "";
let startTime;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function startGame() {
  currentWord = getRandomWord();
  wordDisplay.textContent = currentWord;
  input.value = "";
  input.disabled = false;
  input.focus();
  result.textContent = "";
  startTime = null;
}

input.addEventListener("input", () => {
  if (!startTime) {
    startTime = new Date();
  }

  if (input.value === currentWord) {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;
    const wpm = (60 / timeTaken).toFixed(2);
    result.textContent = `You did it in ${timeTaken.toFixed(2)} seconds (${wpm} WPM)`;
    input.disabled = true;
  }
});

startBtn.addEventListener("click", startGame);
