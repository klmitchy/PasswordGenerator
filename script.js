
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("clicked the button is working");
var userChoicepwdlength = window.prompt("How many characters would you like your password to be? (Choose between 8 and 128)");
var userChoiceSpecChar = window.confirm("Do you want your password to include special characters?");
var userChoiceNum = window.confirm ("Do you want your password to include numbers?");
var userChoiceLower = window.confirm ("Do you want your password to include lowercase letters?");
var userChoiceUpper = window.confirm ("Do you want your password to contain uppercase letters?");

numbers = [1,2,3,4,5,6,7,8,9,0];
specChar = ["!", "@", "#", "$", "%", "&"];
lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


if (userChoicepwdlength < 8 & > 128) {window.alert("Please choose a number between 8 and 128") {
  else{//generate password this LENGTH}
}
  
if (userChoiceSpecChar = true) {//join special characters array to pile  }{
  else {// do not add this array to the pile}
}

if (userChoiceNum = true) {//add numbers to the pile}{
  else {//do not add numbers}
}

if (userChoiceLower = true) {//add Lowercase}{
  else {//do not add}
}

if (userChoiceUpper = true) {//add Uppercase}{
  else {//do not add uppercase}
}

passWordArr.concat(numbers, specChar, lowerCase, upperCase);

}

Math.floor(Math.random()*());


  return "Generated password will go here";
}

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



