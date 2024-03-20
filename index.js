// Prompt are not defined in node environment but can be defined from the clients side
// we have to install "prompt-sync" 
// Write the below code in terminal: (Run in VsCode Terminal)
// npm install prompt-sync
// We then define prompt as written below and is used to
// demonstrate prompt on server side by using the "prompt-sync" package we installed before

const prompt = require("prompt-sync")({ sigint: true });

// let x and let y are variables declared by the user, but as strings
let x = prompt("Enter First Number: ", "0");
let operator = prompt("Enter Operator: ");
let y = prompt("Enter Second Number: ", "0");

// We then change them to Integers by using the parseInt() to enable us to carry out arithmetic operations
let num1 = parseInt(x);
let num2 = parseInt(y);

// Functions to perform different Arithmetic Operations:
//1. Function to perform Addition
function add(num1, num2) {
  return num1 + num2;
}

//2. Function to perform Subtraction
function subtract(num1, num2) {
  return num1 - num2;
}

//3. Function to perform Multiply
function multiply(num1, num2) {
  return num1 * num2;
}

//4. Function to perform divide
function divide(num1, num2) {
    // We cannot divide a number by zero, therefore we check
    // if either one number provided is zero, it returns an error message
  if (num2 === 0 || num1 === 0) {
    throw "Weka Number";
  } else {
    return num1 / num2;
  }
}

//5. Function to perform Modulus
function modulus(num1, num2) {
  return num1 % num2;
}

// Function to calculate
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
    // If the case above is entered by the user,
    // we call The Operator Function
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    case "%":
      return modulus(num1, num2);
    //   if user gives an operator not provided obove he receives an 
    // error message as shown.
    default: 
        throw "Weka Operator"
  }
}

// Function responsible for calculating and displaying Result and Error Messages.
function main() {
  console.log("Calculating");

  try {
    result = calculate(num1, operator, num2);
    console.log("Ans:", result);
  } catch (err) {
    console.log("Wacha Jaba msee " + err);
  }
}

// We finally have to call the function
main();
