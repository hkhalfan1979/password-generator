// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
function generatePassword() {
  var NumChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var UpperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var LowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var SpecialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCombinations = [];

  // User input 

  numberOfCharacters = prompt("Enter desired length of password (8 to 128 characters)");

  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
      return "Please select valid number of characters";
  } else if (isNaN(numberOfCharacters)) {
      numberOfCharacters = prompt("Please enter a valid number");
  }
  else {
    alert("Your password will be " + numberOfCharacters + " characters long.");
    
  }

  loadLowerChars = confirm("include LOWERCASE characters in your password?");
  if (loadLowerChars) {
    var turnToLowercase = alert("LOWERCASE characters will be included in your password.");
  }
  else {
    alert("Password will not include LOWERCASE characters.");
  }

  loadUpperChars = confirm("Do you want uppercase characters?");
  if (loadUpperChars) {
    alert("UPPERCASE characters will be included in your password.");
  }
  else {
    alert("Password will not include UPPERCASE characters.");
  }

  loadNumbers = confirm("include NUMBER characters in your password?");
  if (loadNumbers) {
    alert("NUMBER characters will be included in your password.");
  }
  else {
    alert("Password will not include NUMBER characters.");
  }

  loadSpecialChars = confirm("include SPECIAL characters in your password?");
  if (loadSpecialChars) {
    alert("SPECIAL characters will be included in your password.");
  }
  else {
    alert("Password will not include SPECIAL characters.");
  }

  if (loadLowerChars === false && loadUpperChars === false && loadNumbers === false && loadSpecialChars === false) {
    return "you must select at least one character type!";
  };

  // Adding all the selected password criteria

  if (loadLowerChars) {
    possibleCombinations = possibleCombinations.concat(LowerChars);
    console.log(possibleCombinations);
  }
  if (loadUpperChars) {
    possibleCombinations = possibleCombinations.concat(UpperChars);
    console.log(possibleCombinations);
  }
  if (loadNumbers) {
    possibleCombinations = possibleCombinations.concat(NumChars);
    console.log(possibleCombinations);
  }
  if (loadSpecialChars) {
    possibleCombinations = possibleCombinations.concat(SpecialChars);
    console.log(possibleCombinations);
  }

  // generates random password
  var password = "";
  for (let i = 0; i < numberOfCharacters; i++) {
    randomizer =[Math.floor(Math.random() * possibleCombinations.length)];    
    password = password + possibleCombinations[randomizer];
  }
  return password;
};




