"use strict";

// inputs container
const inputNumber = document.querySelector("#number"),
  inputPercentage = document.querySelector("#num-percentage"),
  outputPercentage = document.querySelector("#new-percentage");

// elements
const btnReset = document.querySelector(".btn-reset"),
  warningMessageInput = document.querySelector("#warning-percentage"),
  warningMessageOutput = document.querySelector("#warning-new-percentage"),
  percentage = document.querySelector("#percentage");

// inputs
const number = document.querySelector("#number-input"),
  percentageInput = document.querySelector("#percentage-input"),
  percentageOutput = document.querySelector("#percentage-output"),
  percentageNumber = document.querySelector("#total-percentage"),
  totalNumber = document.querySelector("#total");

// INPUTS EVENTS
inputNumber.addEventListener("input", calculate);
inputPercentage.addEventListener("input", calculate);
outputPercentage.addEventListener("input", calculate);

// RESET BUTTONS
btnReset.addEventListener("click", function () {
  percentageNumber.textContent = "0.00";
  totalNumber.textContent = "0.00";
  percentage.textContent = "0.00%";

  number.value = "";
  percentageInput.value = "";
  percentageOutput.value = "";

  resetInput();
  resetOutput();
});

// CALCULATOR LOGIC
function calculate() {
  const num = number.value;
  const input = percentageInput.value;
  const output = percentageOutput.value;

  if (validateInputs(input, output)) {
    resetInput();
    resetOutput();

    const totalNum = (num * 100) / input;
    const totalPercentage = (totalNum * output) / 100;

    percentageNumber.textContent = `${totalPercentage.toFixed(2)}`;
    totalNumber.textContent = `${totalNum.toFixed(2)}`;
    percentage.textContent = `${output}%`;
    btnReset.classList.add("btn-reset-active");
  } else {
    percentageNumber.textContent = `0.00`;
    totalNumber.textContent = `0.00`;
    percentage.textContent = `0.00%`;
  }
}

// INPUTS VALIDATION
function validateInputs(input, output) {
  if (input) {
    warningMessageInput.classList.remove("hidden");
    inputPercentage.classList.add("warning-input");
    console.log(input);
  } else if (!input) {
    resetInput();
  }

  if (output) {
    warningMessageOutput.classList.remove("hidden");
    outputPercentage.classList.add("warning-input");
    console.log(output);
  } else {
    resetOutput();
  }

  return output > 0 && input > 0;
}

// DEFAULT STYLE FOR INPUTS&BUTTONS
function resetInput() {
  warningMessageInput.classList.add("hidden");
  inputPercentage.classList.remove("warning-input");
}

function resetOutput() {
  warningMessageOutput.classList.add("hidden");
  outputPercentage.classList.remove("warning-input");
}
