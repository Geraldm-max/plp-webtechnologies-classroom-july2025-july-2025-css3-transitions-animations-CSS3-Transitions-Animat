// Global variable
let clickCount = 0;

// Function with parameters + return
function addNumbers(a, b) {
  return a + b;
}

// Function showing global vs local scope
function increaseCount() {
  let local = 1;         // local scope
  clickCount += local;   // uses global scope
  return clickCount;
}

// Function to update output text
function showMessage(msg) {
  document.getElementById("output").textContent = msg;
}

// Trigger box animation
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.querySelector(".box");
  box.classList.add("bounce");

  // Remove class after animation so it can be reused
  box.addEventListener("animationend", () => box.classList.remove("bounce"));

  let sum = addNumbers(5, 7);
  let count = increaseCount();
  showMessage(`5 + 7 = ${sum} | Clicks: ${count}`);
});
