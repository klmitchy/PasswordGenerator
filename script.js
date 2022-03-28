
var generateBtn = document.querySelector("#generate");
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specChar = ["!", "@", "#", "$", "%", "&"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function getOptions() {
  var userChoicepwdlength = parseInt(prompt("How many characters would you like your password to be? (Choose between 8 and 128)"));
  if( userChoicepwdlength < 8 || userChoicepwdlength > 128) {
    alert('Passwords must be between 8 and 128 characters long');
  }
  // checking if length is a number
  if(Number.isNaN(userChoicepwdlength)){
    alert("Please enter a number between 8 and 128");
    return null;
  }

  var userChoiceSpecChar = window.confirm("Do you want your password to include special characters?");
  var userChoiceNum = window.confirm ("Do you want your password to include numbers?");
  var userChoiceLower = window.confirm ("Do you want your password to include lowercase letters?");
  var userChoiceUpper = window.confirm ("Do you want your password to contain uppercase letters?");
  
  // checking that user selected atleast one option
  if(
    userChoiceSpecChar === false &&
    userChoiceNum === false &&
    userChoiceLower === false &&
    userChoiceUpper === false
    ) {
      alert('Must choose at least one character type');
      return null;
    }
    // object that stores user password options
  var passOptions = {
    userChoicepwdlength: userChoicepwdlength,
    userChoiceSpecChar: userChoiceSpecChar,
    userChoiceUpper: userChoiceUpper,
    userChoiceLower: userChoiceLower,
    userChoiceNum: userChoiceNum
  };

  return passOptions;
}

// helper function to get random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

function generatePassword() {

  var passOptions = getOptions();
  // console.log(passOptions);

  var resultPassword = [];
  var possibleCharacters = [];
  var specifiedCharacters = [];

  //check if object exists
  if(!passOptions) {
    return null;
  }

  // adds array of spec chars into array of possible chars
  // push one random spec char into specified chars
  if(passOptions.userChoiceSpecChar) {
    possibleCharacters = possibleCharacters.concat(specChar);
    specifiedCharacters.push(getRandom(specChar));
  }

  if(passOptions.userChoiceLower) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    specifiedCharacters.push(getRandom(lowerCase));
  }

  if(passOptions.userChoiceUpper) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    specifiedCharacters.push(getRandom(upperCase));
  }

  if(passOptions.userChoiceNum) {
    possibleCharacters = possibleCharacters.concat(numbers);
    specifiedCharacters.push(getRandom(numbers));
  }
  // gets random char out of possible char array and pushes to final password
  for(var i = 0; i < passOptions.userChoicepwdlength; i++) {
    var randomCharacter = getRandom(possibleCharacters);

    resultPassword.push(randomCharacter);
  }

  // make sure at least one specified chracters ends up in the final password
  for(var i = 0; i < specifiedCharacters.length; i++) {
    resultPassword[i] = specifiedCharacters[i];
  }
  // converts array back into string
  return resultPassword.join('');
 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);


//First draft psuedo coding (mostly from class)
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



