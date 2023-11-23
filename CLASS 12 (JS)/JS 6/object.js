// console.log("object");

let car = {
  name: "BMW",
  model: 2018,
  price: "$60",
};

// console.log(car.name);
// console.log(car.price);
// console.log(car.model);

let student = {
  username: "Nahid Iqbal",
  age: 24,
  dob: "1995, 2nd Nov",
  isCollegeStudent: true,
  university: "none",
  isAdmitted: function () {
    console.log(`${this.username} is admitted to the college`);
  },
  highestMark: function () {
    console.log(`${this.username} highest Mark = 60`);
  },
};

let student2 = {
  username: "Tamim Iqbal",
  age: 25,
  dob: "1997, 2nd Dec",
  isCollegeStudent: true,
  university: "none",
};

console.log(student2.username, student2.age);
console.log(student["username"]);

student.isAdmitted();
student.highestMark();

let userName = "Abir";
let age = 34;

console.log(`Hello, ${userName} and he is ${age} years older`); // templaate literals

// let sentence = `

// hello,

// this is .....

// yours,
// Aiman
// `;

// console.log(sentence);

// function driveCar() {
//   console.log("test drive");
// }

// driveCar();

// let car = {
//   name: "audi",
//   model: 2012,
//   weight: "1200kg",
//   goodCondition: true,
//   start: function () {
//     console.log("car engine has started!");
//   },
// };

// console.log(car.name);
// console.log(car.model);
// car.start();
