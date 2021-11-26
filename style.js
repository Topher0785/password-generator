// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){




var passwordlength= prompt("Enter Password Character less than 8 and greater than 128");
if(passwordlength > 7 && passwordlength < 129){
  var number= confirm("Do you want numbers in your password?");
  var special= confirm("Do you want special characters?");
  var bigletter= confirm("Do you want to add upper case characters?");
  var littleletter= confirm("Do you want to add lower case characters?");
}



//Conditions for Arry to work
if (special) {
  resultsArray=resultsArray.concat(specialcharacter);
}
if (number) {
  resultsArray=resultsArray.concat(numchoice);
}
if (bigletter) {
  resultsArray=resultsArray.concat(uppercharacter);
}
if (littleletter) {
  resultsArray=resultsArray.concat(lowercharacter);
}
console.log(resultsArray);
for (var i = 0; i < passwordlength; i++) {
  userInputArray.push (resultsArray[Math.floor(Math.random() * resultsArray.length)]); 
  }
return userInputArray.join("") ;
}

// Write  #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);