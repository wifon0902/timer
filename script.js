const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");

const appendSeconds = document.querySelector(".seconds");
const appendTens = document.querySelector(".tens");

let interval;

let seconds = 0;
let tens = 0;

startButton.addEventListener("click", () => {
  interval = setInterval(startTimer, 10);
});

function startTimer() {
  tens++;
  appendTens.innerHTML = tens;

  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = seconds;

    tens = 0;
    appendTens.innerHTML = tens;
  }
}
