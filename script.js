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

stopButton.addEventListener("click", () => {
  stopTimer();
});

function startTimer() {
  tens++;
  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;

    tens = 0;
    appendTens.innerHTML = tens;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

function stopTimer() {
  clearInterval(interval);
}
