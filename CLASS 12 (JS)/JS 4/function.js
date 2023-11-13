// let num3 = 40;
// let num4 = 60;
// console.log(num3 + num4);

function addition(num1, num2) {
  //   let num1 = 10;
  //   let num2 = 20;
  console.log("sum:", num1 + num2);
  console.log("subtract:", num1 - num2);
  console.log("division:", num1 / num2);
  console.log("To the power value:", num1 ** num2);
}

addition(20, 30);
// addition(60, 99);
// addition(99, 156);
addition(2, 4);

function randomNumber(num) {
  let randomNumber = Math.floor(Math.random() * num); // 0 to 1 -> random value
  console.log(randomNumber);
}

randomNumber(100 + 10);

// Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)
// Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take single variable and check using if esle condition)
// Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)
