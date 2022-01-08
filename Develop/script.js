// Assignment code here
var numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("nums", numsArray.length);

var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
console.log("lowerCase", lowerCaseArray.length);

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log("uppercase", upperCaseArray.length)

var symbols = ["!", "?", "@", "#", "$", "%", "^", "*", "(", ")"];
console.log("symbols", symbols.length);



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

function generatePassword() {
  // selects password length
  var passLength = parseInt(prompt("How long would you like the password to be? Pick between 8 - 128 characters."));
if (passLength < 8) {
  alert("Pick a number between 8 and 128.");
    return "";
  }
if (passLength > 128) {
  alert("Pick a number between 8 and 128.");
    return "";
  }
// Confirm other password requirements
  var lowercase = confirm("Would you like to include lowercase characters in the password?")
if (lowercase) {
  passLength += lowercase;
}
  var uppercase = confirm("Would you like to include uppercase characters?")
if (uppercase) {
  passLength += uppercase;
}
  var numeric = confirm("Would you like to include numbers?")
if (numeric) {
  passLength += numeric;
}
  var specChar = confirm("Would you like to include special characters")
if (specChar) {
  passLength += specChar;
}
  console.log (passLength, lowercase, uppercase, numeric, specChar);
}
  alert(passLength, lowercase, uppercase, numeric);


var newPassword(passLength, lowercase, uppercase, numeric) {
  var length = passLength;
  var ch
}
// var i;
//   for (i = 0; i = passLength; i++ ) {
//     newPassword.push(low)
//   }
 


//   var item = items[Math.floor(Math.random()*items.length)];
// alert(password);
// }



