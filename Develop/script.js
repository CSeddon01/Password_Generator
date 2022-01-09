// Assignment variables for new password
var numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("nums", numsArray.length);

var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
console.log("lowerCase", lowerCaseArray.length);

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log("uppercase", upperCaseArray.length)

var symbolsArray = ["!", "?", "@", "#", "$", "%", "^", "*", "(", ")"];
console.log("symbols", symbolsArray.length);



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
  // alert(passLength, lowercase, uppercase, numeric);


//Password Generation Function
newPassword = function (length, masterPassword) {
  var passwordEl = document.getElementById("display");
  //Initialize final password as blank string
  let userPassword = '';

  //Apend random character form masterPassword
  for (let i = 0; i < length; i++) {
      userPassword += masterPassword.charAt(Math.floor(Math.random() * masterPassword.length))
  };
  passwordEl.innerHTML = userPassword;
}



