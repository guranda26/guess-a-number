function createConfetti() {
  const container = document.getElementById("confettiContainer");
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(confetti);

    confetti.addEventListener("animationend", () => {
      confetti.remove();
    });
  }
}

function getRandomColor() {
  const colors = [
    "#ff0a54",
    "#ff477e",
    "#ff7096",
    "#ff85a1",
    "#fbb1bd",
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#3f51b5",
    "#03a9f4",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
