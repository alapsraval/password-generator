// Assignment Code
var generateBtn = document.querySelector("#generate");
let passwordLength = 0;
let isLowerCase = false;
let isUpperCase = false;
let isNumeric = false;
let isSpecialChar = false;
// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// join all characters in one array
let selectedCharacters = [];
let password = [];

// Generate password using selected criteria
function generatePassword() {
  getPasswordCriteria();

  for (i = 0; i < passwordLength; i++) {
    password.push(getRandom(selectedCharacters));
  }
  return password.join('');
}

function getPasswordCriteria() {
  passwordLength = prompt("Please enter desired password length between 8 and 128");
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) == true) {
    passwordLength = prompt("You must enter desired password length between 8 and 128");
    if (passwordLength === null) {
      alert("You must enter desired password length. Please try again when you are ready.")
      break;
    }
  }
  if (passwordLength !== null) {
    //if(passwordLength < 8 || passwordLength > 128 ) prompt("Please enter your password length");
    isLowerCase = confirm("Do you want to use lowercase?");
    isUpperCase = confirm("Do you want to use uppercase?");
    isNumeric = confirm("Do you want to use numeric?");
    isSpecialChar = confirm("Do you want to use special character?");

    if (isLowerCase || isUpperCase || isNumeric || isSpecialChar) {
      if (isLowerCase) {
        selectedCharacters.push(...lowerCasedCharacters);
      }
      if (isUpperCase) {
        selectedCharacters.push(...upperCasedCharacters);
      }
      if (isNumeric) {
        selectedCharacters.push(...numericCharacters);
      }
      if (isSpecialChar) {
        selectedCharacters.push(...specialCharacters);
      }
    } else {
      alert("You must select at least one criteria. Please try again when you are ready.");
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  resetAll();
}

function getRandom(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function resetAll() {
  passwordLength = 0;
  password = [];
  selectedCharacters = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
