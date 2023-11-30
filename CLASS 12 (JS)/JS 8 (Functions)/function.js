// sum of 2 numbers

function sum() {
  console.log(1 + 1);
  console.log("testing....");
}

// sum(); // invoke or call to view the result or outcome
// sum();
// sum();

// function add() {
//   let num1 = 10;
//   let num2 = 20;
//   let add = num1 + num2;
//   console.log("result:", add);
// }

// add();
// add();
// add();
// add();

function add(num1 = 0, num2 = 0) {
  //   let num1 = 10;
  //   //   let num2 = 20;
  //   let add = num1 + num2;
  //   console.log("result:", add);
  return num1 + num2;
}

add(10, 30);
add(50, 30);
console.log(add(590, 130));
add();

// greet user!

function greetUser(name = "User") {
  console.log(`Good Morning, ${name}`);
}

greetUser("Riyad");
greetUser("Ruhul");
greetUser("Anika");

function multiply(num1, num2) {
  return num1 * num2;
}

// console.log("Multiplication:", multiply(10, 2));
let multiplication = multiply(10, 2);
console.log(multiplication);

function fullName(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}`;
  //   console.log(firstName, lastName);
}

let userName = fullName("Rasel", "Ahmed");
console.log(userName);

// Function Expression

const subtract = function () {
  console.log("test");
};

// Arrow Function

const division = (num1, num2) => num2 / num1;
const addition = (a, b) => {
  return a + b;
};

const generateName = (firstName, lastName) => {
  return firstName + " " + lastName;
};
console.log(generateName("Aiman", "JS"));

let divide = addition(10, 2);
console.log(divide);

// immediate invoke function

(function () {
  console.log("immediate function...");
})();

const newSum = (function (a, b) {
  return a / b;
})(50, 10);

console.log(newSum);
