// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Create object to store user input
var userInput = {
  passLength: 0,
  charTypes: 0,

  charChoices:
    [
      { name: "lowerCase", chosen: false, prompt: "Include lowercase characters?", arrayName: lowerCasedCharacters },
      { name: "upperCase", chosen: false, prompt: "Include uppercase characters?", arrayName: upperCasedCharacters },
      { name: "numeric", chosen: false, prompt: "Include numeric characters?", arrayName: numericCharacters },
      { name: "specialChars", chosen: false, prompt: "Include special characters?", arrayName: specialCharacters },
    ],
  getUserChoices: function () {
    this.passLength = prompt("Please enter a character length for your generated password (min. 8, max. 128)");

    if (this.passLength >= 8 && this.passLength <= 128) { // Validate password length selection
      for (item in this.charChoices) { // Prompt for character type options
        this.charChoices[item].chosen = confirm(this.charChoices[item].prompt)

        if (this.charChoices[item].chosen) {
          this.charTypes++;
        } else {
          this.charChoices[item].chosen = false;
        }
        this.checkCharTypes(); // Invoke to check if at least 1 char type was selected
      }
    } else {
      alert("Incorrect password length. Please click 'Generate Password' to try again.")
    }
  },
  checkCharTypes: function () {
    // Validate char types selection
    if (this.charTypes === 0) {
      alert("Please select at least 1 character type. Click 'Generate Password' to try again.")
    }
  }
}

// Function for getting one or more random elements from an array (elems is number of chars to return)
function getRandom(arr, elems = 1) {
  var randomElem = "";
  for (var i = 0; i < elems; i++) {
    randomElem += arr[Math.floor(Math.random() * arr.length)];
  }
  return randomElem;
}

// Function to generate password with user input
function generatePassword() {
  userInput.getUserChoices();

  var combinedArrays = [];

  // Concat arrays containing chosen char types
  for (var i = 0; i < userInput.charChoices.length; i++) {
    if (userInput.charChoices[i].chosen) {
      console.log(userInput.charChoices[i].arrayName)
      combinedArrays = combinedArrays.concat(userInput.charChoices[i].arrayName);
    }
  }
  // Return a string of specified length containing random combinedArrays chars
  return getRandom(combinedArrays, userInput.passLength);
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;


  // Log length and char types
  console.log(`Length: ${password.length} Char types: ${userInput.charTypes}`);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
