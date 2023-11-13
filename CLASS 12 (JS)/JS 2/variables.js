// console.log("variables testing...");

//  RULES OF NAMING VARIABLES

// first we should define a variable with var
// first letter should be smaller not any number
// camelCase / snakecase - underscore
// name should be meaningful (avoid using , x, y, z, a, b etc)

// camelcase
var numberOne = 20;
var isRaining = "true";
var newSentenceIsBangladesh = "let's rock and roll!";
var PI = 3.14;
var API_KEY = "ASERE34545T4DFS345FGSDFG";

// snakecase
var number_one = 20;
var is_raning = "true";
var new_word = "html";

// javascritp type
// console.log(typeof number_one);
// console.log(typeof new_word);
// console.log(typeof API_KEY);

// ES6+ LATEST VERSION

// var

var price, carModel;
var carName;

// console.log(price);

price = "20 tk";

// console.log(price);

carName = "BMW";
price = "40 tk";
// console.log(carName, price);

// let or const

let userName = "Shakib";
// console.log(userName);

userName = "Tamim";
// console.log(userName);

// Difference between var and let

// personAge = 90;
// let personAge;
// console.log(personAge);

// personName = "Mushfiq";
// var personName;
// console.log(personName);

let personAge = 50; // global variable

{
  let personAge = 70; // local variable
  //   let personName = "Aiman";
  //   console.log("scope:", personAge); // scope
}

// console.log(personName);
// console.log("outside scope:", personAge);

// var fruit = "apple";

// {
//   var fruit = "orange";
// }

// console.log("outside scope:", fruit);

// const / constant -> cannot be reassgined

const name = "Tanvir";
const clockTime = "11:19PM";
// const name = "Sagor";

// console.log(name);
// console.log(clockTime);
