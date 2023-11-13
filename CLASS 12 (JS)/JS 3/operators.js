let username = "javascript";
let password = "operators";
let age = 45;

// if (username === "javascript") {
//   console.log("user can enter the dashboard");
// }

// Logical Operators

// OR -> ||
// AND -> &&

// console.log(true || true);
// console.log(true || false || false || false);
// console.log(false || true);
// console.log(false || false || true);

// if (username == "javascripts" || password == "opeartors" || age == 45) {
//   console.log("User can enter the dashboard");
// } else {
//   console.log("incorrect details");
// }

console.log(true && true);
console.log(true && false && true && true);
console.log(false && true);
console.log(false && false);

if (username == "javascript" && password == "operators" && age == 5) {
  console.log("User can enter the dashboard");
} else {
  console.log("incorrect details");
}

// one line statement
if (age == 45) console.log("User is an adult");

// Ternary operator
let isDarkMode = "";

if (isDarkMode) {
  console.log("Dark Mode is enabled");
} else {
  console.log("Dark Mode is disabled");
}

// Falsey Values in Javascript

// (condition) ? __true__ : __false__
// Undefined
// null
// 0
// ""
// NaN
// false

// isDarkMode == false
//   ? console.log("Dark Mode is On")
//   : console.log("Dark mode is off!");
