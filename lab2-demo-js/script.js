function showMessage() {
  alert("Hello, world!");
}

function multiplyNumbers() {
  var num1 = Number(prompt("Enter the first number:"));
  var num2 = Number(prompt("Enter the second number:"));
  alert("The result of multiplication is: " + (num1 * num2));
}

function divideNumbers() {
  var num1 = Number(prompt("Enter the first number:"));
  var num2 = Number(prompt("Enter the second number:"));
  if (num2 === 0) {
    alert("Division by zero is not allowed.");
  } else {
    alert("The result of division is: " + (num1 / num2));
  }
}

function addNumbers() {
  var num1 = Number(prompt("Enter the first number:"));
  var num2 = Number(prompt("Enter the second number:"));
  alert("The sum is: " + (num1 + num2));
}

function showFullName() {
  var firstName = prompt("Enter your first name:");
  var lastName = prompt("Enter your last name:");
  alert("Your name is " + firstName + " " + lastName);
}

