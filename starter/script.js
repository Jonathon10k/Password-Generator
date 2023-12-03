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

  charChoices: {
    lowerCase: { choice: false, prompt: "Include lowercase characters?" },
    upperCase: { choice: false, prompt: "Include uppercase characters?" },
    numeric: { choice: false, prompt: "Include numeric characters?" },
    specialChars: { choice: false, prompt: "Include special characters?" },
  },

  getUserChoices: function () {
    this.passLength = prompt("Please enter a password length (min. 8 characters)");

    if (this.passLength >= 8) {
      for (item in this.charChoices) {
        this.charChoices[item].choice = confirm(this.charChoices[item].prompt)

        if (this.charChoices[item].choice) {
          this.charTypes++;
        } else {
          console.log(`${this.charChoices[item]}: User selected false`)
        }
      }
    }
  }
}


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  userInput.getUserChoices();
  console.log(userInput.charOptions);

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// 1. WHEN user clicks button THEN show LENGTH prompt. IF input is < 8 characters or undefined THEN repeat prompt.
// 2. IF character type 