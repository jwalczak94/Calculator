"use strict";

// inputs container
const inputNumber = document.querySelector("#number"),
  inputPercentage = document.querySelector("#num-percentage"),
  inputNewPercentage = document.querySelector("#new-percentage");

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

let percentageValue = 100;

// INPUTS EVENTS
inputNumber.addEventListener("input", calculate);
inputPercentage.addEventListener("input", calculate);
inputNewPercentage.addEventListener("input", calculate);

// RESET BUTTONS
btnReset.addEventListener("click", function () {
  percentageNumber.textContent = "0.00";
  totalNumber.textContent = "0.00";
  percentage.textContent = "0.00%";

  inputNumber.value = "";
  inputPercentage.value = "";
  inputNewPercentage.value = "";

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
  if (input && input <= 0) {
    warningMessageInput.classList.remove("hidden");
    inputPercentage.classList.add("warning-input");
  } else {
    resetInput();
  }

  if (output && output <= 0) {
    warningMessageOutput.classList.remove("hidden");
    inputNewPercentage.classList.add("warning-input");
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
  inputNewPercentage.classList.remove("warning-input");
}

// // elements
// const warningMessageBill = document.querySelector("#warning-bill");
// const warningMessagePeople = document.querySelector("#warning-people");

// // inputs containers
// const peopleInput = document.querySelector("#num-people");
// const billInput = document.querySelector("#bill-number");

// const defaultTip = document.querySelector("#default-tip");

// // inputs
// const bill = document.querySelector("#bill");
// const people = document.querySelector("#people");
// const tip = document.querySelector(".btn-custom");

// const tipAmonut = document.querySelector("#tip-total");
// const totalBillPerPerson = document.querySelector("#total");

// let tipValue = 0;

// // INPUTS EVENTS
// bill.addEventListener("input", calculate);
// people.addEventListener("input", calculate);

// // RESET BUTTONS
// btnReset.addEventListener("click", function () {
//   tipAmonut.textContent = "$0.00";
//   totalBillPerPerson.textContent = "$0.00";

//   bill.value = "";
//   people.value = "";
//   tip.value = "";

//   btnTips.forEach((btn) => {
//     btn.classList.remove("btn-active");
//   });

//   defaultTip.classList.add("btn-active");
//   resetStylesBill();
//   resetStylesPeople();
// });

// // CALCULATOR LOGIC
// function calculate() {
//   const billValue = bill.value;
//   const numPeople = people.value;

//   if (validateInputs(billValue, numPeople)) {
//     resetStylesBill();
//     resetStylesPeople();

//     const totalTip = (billValue * tipValue) / numPeople;
//     const totalBill = billValue / numPeople + totalTip;

//     tipAmonut.textContent = `$${totalTip.toFixed(2)}`;
//     totalBillPerPerson.textContent = `$${totalBill.toFixed(2)}`;

//     btnReset.classList.add("btn-reset-active");
//   } else {
//     tipAmonut.textContent = `$0`;
//     totalBillPerPerson.textContent = `$0`;
//   }
// }

// // INPUTS VALIDATION
// function validateInputs(billValue, numPeople) {
//   if (billValue && billValue <= 0) {
//     warningMessageBill.classList.remove("hidden");
//     billInput.classList.add("warning-input");
//   } else {
//     resetStylesBill();
//   }

//   if (numPeople && numPeople <= 0) {
//     warningMessagePeople.classList.remove("hidden");
//     peopleInput.classList.add("warning-input");
//   } else {
//     resetStylesPeople();
//   }

//   console.log(numPeople > 0 && billValue > 0);
//   return numPeople > 0 && billValue > 0;
// }

// // DEFAULT STYLE FOR INPUTS&BUTTONS
// function resetStylesPeople() {
//   warningMessagePeople.classList.add("hidden");
//   peopleInput.classList.remove("warning-input");
// }

// function resetStylesBill() {
//   warningMessageBill.classList.add("hidden");
//   billInput.classList.remove("warning-input");
// }
