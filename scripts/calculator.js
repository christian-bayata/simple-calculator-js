const calcInputs = [];

document.querySelectorAll(".js-button-operator").forEach((button) => {
  button.addEventListener("click", () => {
    calcInputs.push(button.textContent);
    displayText(button.textContent);
  });
});

document.querySelectorAll(".js-button-number").forEach((button) => {
  button.addEventListener("click", () => {
    calcInputs.push(button.textContent);
    displayText(button.textContent);
  });
});

function displayText(value) {
  document.querySelector(".js-calc-input-text").value += value;
}

document.querySelectorAll(".js-calc-del-button").forEach((text) => {
  text.addEventListener("click", () => {
    clearText();
  });
});

document.querySelectorAll(".js-calc-equal-button").forEach((text) => {
  text.addEventListener("click", () => {
    finalCalculation();
  });
});

function clearText() {
  let inputDisplay = document.querySelector(".js-calc-input-text");
  const inputDisplayValue = inputDisplay.value;

  if (inputDisplayValue.length) {
    inputDisplay.value = inputDisplayValue.slice(0, -1);
  }
}

function finalCalculation() {
  try {
    const result = eval(document.querySelector(".js-calc-input-text").value);
    if (result) {
      document.querySelector(".js-output").innerHTML = result;
    }
  } catch (error) {
    document.querySelector(".js-output").innerHTML = "Error";
  }
}
