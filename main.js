//change mode
document.querySelector(".mode-btn").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("dark-theme");
});

//add event listener for each button and take the value from it
document.querySelectorAll(".btn").forEach((ele) => {
  ele.addEventListener("click", () => {
    const screen = document.querySelector(".screen");
    if (screen.textContent == "0") {
      screen.textContent = ele.textContent;
    } else {
      screen.textContent = `${screen.textContent}${ele.textContent}`;
    }
  });
});

//ANS button function to get answer
document.querySelector(".ans-btn").addEventListener("click", () => {
  const screen = document.querySelector(".screen");
  try {
    const result = eval(screen.textContent.trim());
    screen.textContent = result;
  } catch (error) {
    console.error("Error evaluating expression:", error);
    screen.textContent = "Error";
  }
  //   screen.textContent = eval(screen.textContent);
});

//AC button to clear the screen
document.querySelector(".clear-btn").addEventListener("click", () => {
  document.querySelector(".screen").textContent = 0;
});

//show info page
document.querySelector(".info").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("info-window-active");
});
