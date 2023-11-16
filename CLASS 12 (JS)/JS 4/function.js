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

