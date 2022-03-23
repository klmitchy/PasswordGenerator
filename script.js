
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//1. create variables to save user input from prompts
// passwordLength (how to turn string into an integer)
// specialCharacters boolean
// numericCharacters boolean
// lowercaseCharacters boolean
// uppercaseCharacters
//alert, confirm, prompt
//use conditionals to validate 
  //inputs "if (pwdlength <8){alert(pls enters at least 8")}


//2. create arrays for each type of character
  // specialCharacters, upperCase, lowercase, numeric

//3.  generatePassword function -- take values from arrays
      //and generate a pwd.

//4. Use random function to select characters from each array

//5. create empty array that represents final password

//6. join those arrays together based on user input

//7. randomizer characters from the joined arrays.

//8. join the elements of an array into a single string: 
// TRANSFORMING or JOIN the array into a string []
//Array.join('')

//start

function generatePassword(){
    return "password";
}

