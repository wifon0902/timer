const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");

const appendMinutes = document.querySelector(".minutes");
const appendSeconds = document.querySelector(".seconds");
const appendTens = document.querySelector(".tens");

let interval;
let minutes = 0;
let seconds = 0;
let tens = 0;

startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
});

resetButton.addEventListener("click", () => {
  resetTimer();
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

  if (seconds >= 60) {
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;

    seconds = 0;
    appendSeconds.innerHTML = seconds;
  }

  if (minutes > 9) {
    appendMinutes.innerHTML = minutes;
  }
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  stopTimer();
  minutes = 0;
  seconds = 0;
  tens = 0;
  appendMinutes.innerHTML = "00";
  appendSeconds.innerHTML = "00";
  appendTens.innerHTML = "00";
}
