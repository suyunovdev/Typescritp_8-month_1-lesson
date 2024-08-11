let currentInput: string = "";
let currentOperation: string = "";
let previousInput: string = "";

function appendNumber(number: string): void {
  currentInput += number;
  updateDisplay();
}

function setOperation(operation: string): void {
  if (currentInput === "") return;

  if (previousInput !== "") {
    calculate();
  }

  currentOperation = operation;
  previousInput = currentInput;
  currentInput = "";
}

function calculate(): void {
  let result: number;

  const prev: number = parseFloat(previousInput);
  const current: number = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperation = "";
  previousInput = "";
  updateDisplay();
}

function clearDisplay(): void {
  currentInput = "";
  currentOperation = "";
  previousInput = "";
  updateDisplay();
}

function updateDisplay(): void {
  const display = document.getElementById("display") as HTMLInputElement;
  display.value = currentInput;
}
