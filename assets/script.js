// create a button to generate password in HTML
// add a click event listener that starts app/create prompts for each password criteria
// when prompt comes up user can select the criteria
// create a prompt for length at least 8 characters and no more than 128
// create a prompt to choose character type of lowercase, uppercase, numeric, and/or special character
// allow user to answer and validate and at least one character should be selected
// password is generated to match selected criteria and displayed in alert or written to page
// Forloop - length of pw and get random criteria

// AlERT user of new pw

// -->this is week 4 knowledge -->
// get id of html where test will be displayed
// generated pw shows on page --ALERT

var generatedPassword = ""
var charToChooseFrom = []

// prompt variables
var numberArr = "0123456789";
var lowerArr = "abcdefghijklmnopqrstuvwxyz";
var upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charArr = "~!@#$%^&*()_+=";
var lengthArr = "";

var button = document.getElementById("generate");

// create object for user selection
var userType = {};

// promt user to select character length
var charLength = parseInt(prompt("Please type in a number between 8 and 128"));

// prompt user to get input
function promptUser() {
    // var lengthChar = parseIn(prompt("How long would you like your password to be?"));
    var lowerChar = prompt("Would you like lowercase letters?");
    var upperChar = prompt("Would you like uppercase letters?");
    var numberChar = prompt("Would you like numbers?");
    var specialChar = prompt("Would you like special characters?");

    // if (lengthChar) {
    //     userType[lengthArr] = lengthArr;
    // }
    if (lowerChar) {
        userType[lowerArr] = lowerArr;
    }
    if (upperChar) {
        userType[upperArr] = upperArr;
    }
    if (numberChar) {
        userType[numberArr] = numberArr;
    }
    if (specialChar) {
        userType[charArr] = charArr;
    }

promptUser();

