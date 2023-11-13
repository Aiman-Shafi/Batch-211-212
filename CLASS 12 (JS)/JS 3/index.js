let num1 = 40;
let num2 = 2;

console.log(40 % 10); // modulus

num1 = 50;
num1++; // 51
console.log(num1);

num1++; // 52
num1++; // 53

num1 = 150;
num1--;

console.log(num1);

console.log("Exponentiation:", 20 ** 2);
// console.log(num1++);

// Write a program where there will be 3 Courses naming Math, English , Science.
// Find out the average marks of 3 courses
// Find the actual grade following the below conditions
// 90 -> A+
// 80 -> A
// 60 -> B+
// 50 -> C
// 40 -> D
// Below 40 IS FAIL!

let math = 45;
let english = 41;
let science = 39;

let averageMarks = (math + english + science) / 3;

console.log("averageMarks:", averageMarks);

if (math >= 40 && english >= 40 && science >= 40) {
  if (averageMarks >= 90) {
    console.log("Result is A+", averageMarks);
  } else if (averageMarks >= 80) {
    console.log("Result is A", averageMarks);
  } else if (averageMarks >= 60) {
    console.log("Result is B+", averageMarks);
  } else if (averageMarks >= 50) {
    console.log("Result is C", averageMarks);
  } else if (averageMarks >= 40) {
    console.log("Result is D", averageMarks);
  } else {
    console.log("Failed", averageMarks);
  }
} else {
  console.log("failed");
}
