// console.log("test");

let stringValue = "";
// console.log(stringValue);
let sentence = "Bangladesh is highly populated country";
let newUser = "Jamal";
// console.log(sentence);

// console.log(newUser.length); // 6 with whitespace // length is used to determine size of a string

let greeting = "Good Night";
let user = " Rakib";

let newGreeting = greeting.concat(user);
newGreeting = greeting.concat(", Abdullah");

// //using contact method
// console.log(newGreeting);
// // using console
// console.log(greeting, user);
// // using operator
// console.log(greeting + user);

// subString - take a portion of a string

let newCountry = sentence.substring(10, 20);
// newCountry = newUser.substring(0, 4);
// console.log(newCountry);

// slice - take a portion of a string (it's takes negative index as well)

let slice = newUser.slice(-5);
slice = sentence.slice(-20, -5);
// console.log(slice);

let blogPost =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sequi culpa dolor, quisquam odio cumque sit quae quia! Quis reiciendis esse qui alias quas aut earum natus obcaecati, expedita repudiandae.";

// console.log(blogPost.slice(0, 50) + "....");

// Search Index
let newSentence = "I Love to Drink Coffee!";

// use to search a index using word / letter
let searchWord = newSentence.indexOf("coffee");
console.log("search:", searchWord); // return an index - 10, 20, 4, 6, r jodi na khuje pay - > -1

// use to find a specific letter using index
let searchLetter = newSentence.charAt(10);
console.log(searchLetter);

// to search specific word from a string
console.log(newSentence.includes("love")); // return true or false

// case changing

// to convert every letter in lowercase
let lowerCase = newSentence.toLowerCase();

// to convert every letter in uppercase
let upperCase = newSentence.toUpperCase();
console.log(upperCase);

// removes spaces from string
let cleanInput = "     Hello, my name is Azim...     ";
console.log(cleanInput.trim());

// find if the word "Enjoy" present in the new given sentence.

let natureWords = "Hello, i always love to enjoy the beauty of nature";
let natureWordsInLowerCase = natureWords.toLowerCase();
let searchFor = "Always";
let searchInLowerCase = searchFor.toLowerCase();

// if (natureWords.toLowerCase().includes(searchFor.toLowerCase())) {
//   console.log(searchFor, "word is present in the sentence");
// } else {
//   console.log(searchFor, "word is absent in the sentence");
// }

// if (natureWordsInLowerCase.includes(searchInLowerCase)) {
//   console.log(searchFor, "word is present in the sentence");
// } else {
//   console.log(searchFor, "word is absent in the sentence");
// }

if (natureWordsInLowerCase.indexOf(searchInLowerCase) === -1) {
  console.log(searchFor, "word is absent in the sentence");
} else {
  console.log(searchFor, "word is present in the sentence");
}

// console.log(natureWordsInLowerCase.indexOf(searchInLowerCase));

let text = "Mr. Blue has a blue house";
let position = text.search("Blue");

// The search() method matches a string against a regular expression **

// The search() method returns the index (position) of the first match.

// The search() method returns -1 if no match is found.

// The search() method is case sensitive.
