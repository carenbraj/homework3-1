// create a button to generate password in HTML
// add a click event listener that starts app/create prompts for each password criteria
// when prompt comes up user can select the criteria
// create a prompt for length at least 8 characters and no more than 128
// create a prompt to choose character type of lowercase, uppercase, numeric, and/or special character
// allow user to answer and validate and at least one character should be selected
// password is generated to match selected criteria and displayed in alert or written to page
// Forloop - length of pw and get random criteria

// AlERT user of new

// -->this is week 4 knowledge -->
// get id of html where test will be displayed
// generated pw shows on page --ALERT


var numberEl = [0,1,2,3,4,5,6,7,8,9];
var lowerEl = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",];
var upperEl = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",];
var charEl = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",];



// prompt user to get input
function getPasswordOptions () {
var charLength =parseInt(prompt("How many characters would you like your password to be?"))

    if (charLength <8 || charLength > 128 || isNaN(charLength)){
        alert(" Your password must be a number between 8 and 128")
        charLength =parseInt(prompt("How many characters do you want your password to be?"))
    
      }
   
// var charLength = parseInt(prompt("Please type in a number between 8 and 128"));

var lowerChar = confirm("Would you like lowercase letters?");
var upperChar = confirm("Would you like uppercase letters?");
var numberChar = confirm("Would you like numbers?");
var specialChar = confirm("Would you like special characters?");

if (lowerChar=== false && upperChar=== false && numberChar=== false && specialChar=== false) {
  alert("You must select at least one character type.")
  return  
}  
var passwordOption = {
  charLength: charLength,
  lowerChar: lowerChar,
  upperChar: upperChar,
  numberChar: numberChar,
  specialChar: specialChar
}

return passwordOption;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}


function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  if (options.specialChar) {
    possibleCharacters = possibleCharacters.concat(charEl);
    guaranteedCharacters.push(getRandom(charEl));
  }
  if (options.numberChar) {
    possibleCharacters = possibleCharacters.concat(numberEl);
    guaranteedCharacters.push(getRandom(numberEl));
  }
  if (options.lowerChar) {
    possibleCharacters = possibleCharacters.concat(lowerEl);
    guaranteedCharacters.push(getRandom(lowerEl));
  }
  if (options.upperChar) {
    possibleCharacters = possibleCharacters.concat(upperEl);
    guaranteedCharacters.push(getRandom(upperEl));
  }
  for (var i = 0; i < options.charLength; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  return result.join('');
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword)





