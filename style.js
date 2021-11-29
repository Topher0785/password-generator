// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  debugger;
  var passwordlength = window.prompt("Enter Password Between 8 and 128");

  if (passwordlength > 8 && passwordlength < 128) {
    var number = confirm("Do you want numbers in your password?");
    var special = confirm("Do you want special characters?");
    var bigletter = confirm("Do you want to add upper case characters?");
    var littleletter = confirm("Do you want to add lower case characters?");

    // Create Array
    var numbchoice = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialcharacter = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "_",
      "-",
      "=",
      "+",
      "?",
      "/",
    ];
    var uppercaseletter = [
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
      "Z",
    ];
    var lowercaseletter = [
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
      "z",
    ];

    var resultsArray = [];
    var userInputArray = [];

    //Conditions for Array to work
    if (special) {
      resultsArray = resultsArray.concat(specialcharacter);
    }
    if (number) {
      resultsArray = resultsArray.concat(numbchoice);
    }
    if (bigletter) {
      resultsArray = resultsArray.concat(uppercaseletter);
    }
    if (littleletter) {
      resultsArray = resultsArray.concat(lowercaseletter);
    }
    console.log(resultsArray);

    for (var i = 0; i < passwordlength; i++) {
      userInputArray.push(
        resultsArray[Math.floor(Math.random() * resultsArray.length)]
      );
    }
    return userInputArray.join("");
  } else {
   return generatePassword();
  }
}

// Write  #password input
function writePassword() {
  debugger;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
