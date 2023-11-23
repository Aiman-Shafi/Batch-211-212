let arr = ["orange", "apple", "kiwi", "banana", 10, true];

// console.log(arr);
// console.log(arr[0]); // find index
// console.log(arr[2]);

// console.log(arr.length); // length of array
// console.log(arr.indexOf("kiwi")); // search index

// array methods

arr.pop(); // remove an item from the last
arr.push("straberry"); // add item to the array of a array
arr.shift(); // remove an item from the first
arr.unshift("guava"); // add an item from the first
// console.log(arr);

// joining an array

let fruits = ["lichi", "orange"];
let moreFruits = ["apple", "banana"];

let allFruits = fruits.concat(moreFruits); // adding two arrays

// console.log(allFruits);

// slicing an array

let animals = ["tiger", "snake", "cat", "dog", "fly", "buffalo"];

// console.log(animals);

let slice = animals.slice(0, 3);

// console.log(slice);

// splice (startIndex, delete Count, new item...)

// let splice = animals.splice(1, 2, "wolf", "frog", "bird");

let splice = animals.splice(2, 0, "wolf", "frog");
console.log("main array:", animals);
// console.log("splice;", splice);

// a-z (alphabetically sorting)
console.log(animals.sort());

// reverse
console.log(animals.reverse());

let numbers = [1, 4, 6, 3, 2, 8, 22, 33, 45, -1];

console.log(numbers.sort((a, b) => a - b));

// function name() {
//   console.log("username...");
// }

// const userName = () => console.log("test");

// userName();
