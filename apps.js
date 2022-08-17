"use strict";

const display = document.querySelector(".display");
const zeroBtn = document.querySelector(".zeroBtn");
const oneBtn = document.querySelector(".oneBtn");
const twoBtn = document.querySelector(".twoBtn");
const threeBtn = document.querySelector(".threeBtn");
const fourBtn = document.querySelector(".fourBtn");
const fiveBtn = document.querySelector(".fiveBtn");
const sixBtn = document.querySelector(".sixBtn");
const sevenBtn = document.querySelector(".sevenBtn");
const eightBtn = document.querySelector(".eightBtn");
const nineBtn = document.querySelector(".nineBtn");
const pointBtn = document.querySelector(".pointBtn");
const addBtn = document.querySelector(".addBtn");
const minusBtn = document.querySelector(".minusBtn");
const timesBtn = document.querySelector(".timesBtn");
const divideBtn = document.querySelector(".divideBtn");
const equalsBtn = document.querySelector(".equalsBtn");
const clearBtn = document.querySelector(".clearBtn");
const deleteBtn = document.querySelector(".deleteBtn");

let previousOperand, currentOperand, previousOperator, currentOperator;

const maths = {
  "+": function (previousOperand, currentOperand) {
    return previousOperand + currentOperand;
  },
  "-": function (previousOperand, currentOperand) {
    return previousOperand - currentOperand;
  },
  // prettier-ignore
  "x": function (previousOperand, currentOperand) {
        return previousOperand * currentOperand;

      },
  "/": function (previousOperand, currentOperand) {
    return previousOperand / currentOperand;
  },
};
currentOperand = "";
// Number input
function inputNum() {
  currentOperand += this.textContent;
  display.textContent = currentOperand;
  tooBig();
  console.log(`current operand = ${typeof currentOperand} ${currentOperand}`);
}
zeroBtn.addEventListener("click", inputNum);
oneBtn.addEventListener("click", inputNum);
twoBtn.addEventListener("click", inputNum);
threeBtn.addEventListener("click", inputNum);
fourBtn.addEventListener("click", inputNum);
fiveBtn.addEventListener("click", inputNum);
sixBtn.addEventListener("click", inputNum);
sevenBtn.addEventListener("click", inputNum);
eightBtn.addEventListener("click", inputNum);
nineBtn.addEventListener("click", inputNum);
pointBtn.addEventListener("click", inputNum);
//Operator input
function inputOperator() {
  if (!currentOperand && !previousOperand) {
    previousOperand = Number(display.textContent);
    display.textContent = "";
    currentOperator = this.textContent;
    currentOperand = "";
    console.log(
      `previous operand = ${typeof previousOperand} ${previousOperand}`
    );
  } else if (!currentOperator) {
    display.textContent = "";
    currentOperator = this.textContent;
    previousOperand = Number(currentOperand);
    currentOperand = "";
    console.log(`previous operand = ${typeof previousOperand} ${previousOperand} 
    current operator = ${currentOperator}`);
    tooBig();
  } else {
    previousOperand = maths[currentOperator](
      Number(previousOperand),
      Number(currentOperand)
    );
    display.textContent = previousOperand;
    previousOperator = currentOperator;
    currentOperator = this.textContent;
    currentOperand = "";
    console.log(`
    previous operand = ${typeof previousOperand} ${previousOperand}
    previous operator =  ${previousOperator}
    current operator = ${currentOperator}`);
    tooBig();
  }
}

addBtn.addEventListener("click", inputOperator);
minusBtn.addEventListener("click", inputOperator);
timesBtn.addEventListener("click", inputOperator);
divideBtn.addEventListener("click", inputOperator);

clearBtn.addEventListener("click", function () {
  previousOperand = "";
  currentOperand = "";
  previousOperator = "";
  currentOperator = "";
  display.textContent = currentOperand;
});

deleteBtn.addEventListener("click", function () {
  let arr = display.textContent.split("");
  arr.pop();
  currentOperand = arr.join("");
  display.textContent = currentOperand;
});

equalsBtn.addEventListener("click", function () {
  display.textContent = maths[currentOperator](
    Number(previousOperand),
    Number(currentOperand)
  );
  previousOperator = "=";
  previousOperand = "";
  currentOperand = "";
  currentOperator = "";
  console.log(`
    previous operand = ${typeof previousOperand} ${previousOperand}
    current operand = ${typeof currentOperand} ${currentOperand}
    previous operator =  ${previousOperator}
    current operator = ${currentOperator}`);
});

function tooBig() {
  if (display.textContent.length > 10) {
    Math.trunc(Number(display.textContent) * 100000000);
  }
}
