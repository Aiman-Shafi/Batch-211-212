// console.log("test");

let num1 = 24; // 1,4,5,6,7 -> round numbers / natural numbers / integer numbers
console.log(num1);

let num2 = 24.99675678899; // decimal / floating point number

let addition = num1 + num2;

// toFixed()
console.log(addition);
console.log("Addition:", addition.toFixed(2));

// round number - convert a number to a Round number (.5 er upore gele next value chole ashbe -> 13.5 -> 14)

let roundNumber = Math.round(addition);
console.log("Round Number", roundNumber);

//Math.ceil - whatever the decimal value is the result will always be on the upper level. 14.23 -> 15

let ceilNumber = Math.ceil(addition);
console.log("Ceil Number", ceilNumber);

// Math.floor - // doesn't take the upper value how higher the decimal value is!

let floorNumber = Math.floor(addition);
console.log("Floor Number", floorNumber);

// abs -> // turns negative number into positive value
let newValue = -56;
console.log("Absolute Value:", Math.abs(newValue));

let newNumber = "45.67";
console.log(typeof newNumber);

// convert a floating point number to a integer number
console.log("Parse Int:", parseInt(newNumber));

// convert to a decimal number
console.log("Parse Float:", parseFloat(newNumber));

// DICE ROLLING

let randomNumber = Math.floor(Math.random() * 7); // 0 to 1 -> random value
let generate4digitOTP = Math.floor(Math.random() * 9000 + 1000); // 0 to 1 -> random value
console.log("Random Dice Number:", randomNumber);
console.log("4 Digit OTP:", generate4digitOTP);
