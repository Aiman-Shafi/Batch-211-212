// TODO 1: Generate Pin  - Done
// TODO 2: Make keypad functional - Done
// TODO 3: Make Notification work - Done
// TODO 4: Make try left work - Done
// TODO 5: Make C (clear) btn work to clear keypad input - Done
// TODO 6: Remove element ( < ) one after another - Done

// selectors
const generatePinBtn = document.querySelector(".generate-btn");
const generatedPinInput = document.querySelector(".generatedPin");
const showKeyPadValue = document.querySelector(".showValue");
const submitBtn = document.querySelector(".submit-btn");
const correctNotification = document.querySelector(".correct-pin");
const wrongNotification = document.querySelector(".wrong-pin");
let tryValue = document.getElementById("tryLeft");
const removeSingleItem = document.getElementById("removeBtn");

// setting try left as chance
let chance = parseInt(tryValue.innerText);

// Hide the notify section
const notifySection = document.querySelector(".notify-section");

function removeDefaultNotification() {
  notifySection.style.display = "none";
}

// Generating 4 digits Pin
function generatedPin() {
  let randomNumber = Math.floor(Math.random() * 9000 + 1000);
  // console.log(randomNumber);
  generatedPinInput.value = randomNumber;
}

// making keypad functional
function inputValue(number) {
  // showKeyPadValue.value = showKeyPadValue.value + number;
  if (generatedPinInput.value == "") {
    alert("Please generate a pin first");
  } else {
    showKeyPadValue.value += number;
  }

  // implementing clear function
  if (number == "C") {
    clearKeyPadInput();
  }
}

// Check Pin Match
function checkPin() {
  const newPin = generatedPinInput.value;
  console.log(newPin);

  if (newPin === showKeyPadValue.value) {
    showCorrectNotification();
  } else {
    showWrongNotification();
    tryLeft();
  }
}

// show correct notification & make button green and setting disabled = true
function showCorrectNotification() {
  notifySection.style.display = "block";
  correctNotification.style.display = "block";
  wrongNotification.style.display = "none";
  submitBtn.disabled = true;
  submitBtn.style.backgroundColor = "green";
  generatePinBtn.disabled = true;
  generatePinBtn.style.backgroundColor = "green";
}

// show wrong notification
function showWrongNotification() {
  notifySection.style.display = "block";
  correctNotification.style.display = "none";
  wrongNotification.style.display = "block";
}

// Clear all keypad input
function clearKeyPadInput() {
  showKeyPadValue.value = "";
}

// try left function
function tryLeft() {
  if (chance > 0) {
    chance = chance - 1;
  }
  // console.log(chance);
  tryValue.innerText = chance;

  // make button red and setting disabled = true
  if (chance == 0) {
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "red";
    generatePinBtn.disabled = true;
    generatePinBtn.style.backgroundColor = "red";
  }
}

// removing single item from keypad
function removeSingleElement() {
  if (showKeyPadValue !== "") {
    let currentValue = showKeyPadValue.value;
    // Remove the last character from the currentValue string
    showKeyPadValue.value = currentValue.slice(0, -1);
  }
}

// check pin on submit click
submitBtn.addEventListener("click", checkPin);

// fire the generate pin function
generatePinBtn.addEventListener("click", generatedPin);

// remove default notification
removeDefaultNotification();

removeSingleItem.addEventListener("click", removeSingleElement);
