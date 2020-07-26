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

// prompt variables
var numberEl = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
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
function promptUser() {
var charLength = parseInt(prompt("Please type in a number between 8 and 128"));

if (isNaN(charLength)===true) {
    alert("Character length has to be a number.")
    return
}
if (charLength < 8){
    alert("Character length needs to be more than 8.")
    return
}

if (charLength > 128) {
    alert("Character length needs to be less than 128.")
    return    
}

var lowerChar = confirm("Would you like lowercase letters?");
var upperChar = confirm("Would you like uppercase letters?");
var numberChar = confirm("Would you like numbers?");
var specialChar = confirm("Would you like special characters?");

if (lowerChar===false && upperChar===false && numberChar===false && specialChar===false) {
    alert("Please select at least one character.")
    return
}

// create object for user selection
var userType = {
    charLength:charLength,
    lowerChar:lowerChar,
    upperChar:upperChar,
    numberChar:numberChar,
    specialChar:specialChar,
};
    
}

promptUser();

function generatePassword (numberEl, lowerEl, upperEl, charEl) {
    var pass = "";

    for (let i = 0; i < generatePassword; i++) {
        var i = Math.floor(Math.random())
        
    }
}
    
}