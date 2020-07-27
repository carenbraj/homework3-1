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

var generateBtn = document.querySelector("#generate")
var passwordText = document.querySelector("#password")
var generatedPassword = ""
var characters = []
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
function generatePassword () {
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

   
if (lowerChar || upperChar || numberChar || specialChar){
    if (inLowCase){
      characters = characters.concat(lowerEl);
    }
  if(inUpCase){
    characters = characters.concat(upperEl)
  }
  if(inNum){
    characters = characters.concat(numberEl)
  }
  if(inSpeChar){
    characters = characters.concat(charEl)
}


for (var i = 0; i < charLength.length; i++) {
    var genIndex =  characters[Math.floor(Math.random() * characters.length)];
    generatedPassword = generatePassword + genIndex
   }  
    passwordText.textContent = generatedPassword
   }
   else {
     console.log("choose an option")
   } 
  }
generateBtn.addEventListener("click", generatePassword)

// function getText() {
//   var txt =document.getElementById("txtWord").innerHTML
// }



