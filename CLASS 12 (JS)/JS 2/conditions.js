// console.log("test...");

let isDarkMode = true;

if (isDarkMode == true) {
  console.log("Dark Mode is enabled");
} else {
  console.log("Dark Mode is disabled");
}

let password = "python";

if (password == "python") {
  console.log("Login Valid!");
} else {
  console.log("Password is incorrect");
}

// == & ===

let number = "10";

if (number === 10) {
  console.log("correct number!");
} else {
  console.log("incorrect number");
}

// age >= 40 => old
// age >= 26 => adult
// age >= 20 => semi adult
// age < 20 => child

let age = 12;

if (age >= 40) {
  console.log("he is an old guy");
} else if (age >= 26) {
  console.log("he is an adult guy");
} else if (age >= 20) {
  console.log("he is a semi adult guy");
} else {
  console.log("Child");
}

// temp -> 40 <= -> extreme hot
// temp -> 30 < hot
// temp -> 30 > normal
// temp -> 22 > cold

let temp = 28;

if (temp >= 40) {
  console.log("extreme hot temperature");
} else if (temp >= 30) {
  console.log("hot weather");
} else if (temp <= 22) {
  console.log("cold weather");
} else {
  console.log("normal weather");
}

// Write a program where there will be 3 Courses naming Math, English , Science.
// Find out the average marks of 3 courses
// Find the actual grade following the below conditions
// 90 -> A+
// 80 -> A
// 60 -> B+
// 50 -> C
// 40 -> D
// Below 40 IS FAIL!

let math = 70;
let english = 50;
let science = 60;

let averageMarks = (math + english + science) / 3;

console.log("averageMarks: ", averageMarks);
