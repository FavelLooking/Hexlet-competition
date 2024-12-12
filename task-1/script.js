const startButton = document.getElementById("add-timer");
const timeInput = document.getElementById("time-input");

const createTimerElement = (time) => {
  const timer = document.createElement("div");
  timer.classList.add("timer-container");
  const timerList = document.getElementById("timers");
  timerList.appendChild(timer);
  timer.textContent = time;
  createDeleteButton(timer);
  return timer;
};
const createDeleteButton = (timerContainer) => {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete current timer";
  deleteButton.classList.add("delete-button");
  timerContainer.appendChild(deleteButton);
  deleteButton.addEventListener("click", (e) => {
    e.currentTarget.parentNode.remove();
  });
  return deleteButton;
};

const addTimer = (time) => {
  let remainingTime = time;
  const timerElement = createTimerElement(remainingTime);
  const currentTimer = setInterval(() => {
    let updatedTime = parseInt(timerElement.textContent) - 1;
    timerElement.firstChild.textContent = updatedTime;
    if (timerElement.firstChild.textContent === "0") {
      clearInterval(currentTimer);
      timerElement.remove();
    }
  }, 1000);
};

startButton.addEventListener("click", () => {
  const time = parseInt(timeInput.value);
  if (!isNaN(time) && time > 0) {
    addTimer(time);
  } else {
    alert("Please enter correct value");
  }
});

timeInput.addEventListener("change", (e) => {
  time = timeInput.value;
});
