const guess = document.getElementById("guess");
const hint = document.getElementById("hint");
const attemptDisplay = document.getElementById("attempt");
const randomVal = Math.floor(Math.random() * 100 + 1);
const numValue = document.getElementById("numValue");
const warningIcon = document.getElementById("warning");

let attempts = 0;
attemptDisplay.textContent = "Attempts: " + attempts;

function checkNumber() {
  const userValue = Number(numValue.value);
  attempts++;

  if (userValue > 100 || userValue < 1) {
    hint.textContent = "Number is between 1-100";
    warningIcon.style.display = "inline";
    hint.classList.add("high-num");
    createTryAgainTbn();
    return;
  } else {
    hint.classList.remove("high-num");
  }
  warningIcon.style.display = "none";

  if (userValue === randomVal) {
    hint.textContent = "Congratulations!";
    hint.classList.add("congrat-text");
    const spanEl = document.getElementById("span");

    spanEl.textContent = "You guessed the number " + randomVal;
    guess.classList.add("disabled-btn");
    guess.disabled = true;
    createTryAgainTbn();
    createConfetti();
  } else if (userValue > randomVal) {
    hint.textContent = "Number is too high!";
    warningIcon.style.display = "inline";
  } else {
    hint.textContent = "Number is too low!";
    warningIcon.style.display = "inline";
  }
  attemptDisplay.textContent = "Attempts: " + attempts;
}

function createTryAgainTbn() {
  const tryAgainBtn = document.createElement("button");
  tryAgainBtn.textContent = "Try Again";
  tryAgainBtn.id = "tryAgain";
  tryAgainBtn.classList.add("try-again-btn");
  const container = document.querySelector("div");
  container.appendChild(tryAgainBtn);

  tryAgainBtn.addEventListener("click", function () {
    window.location.reload();
  });
}

guess.addEventListener("click", checkNumber);
