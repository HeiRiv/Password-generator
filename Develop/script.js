// Assignment Code

var generateBtn = document.querySelector("#generate");

function getRandomNumber(min, max) {
  var randomNumber = Math.random();
  var randomNumberUpToMax = randomNumber * max;
  var randomNumberInRange = min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange);
}

function getRandomValueFromArray(array) {
  var randomArrayPosition = getRandomNumber(0, array.length);
  return array[randomArrayPosition];
}

function getRandomSpecialCharacter() {
  var specChar = ["!", "@", "#", "$", "*", "(", ")", "_", "-", "?", "+"];
  return getRandomValueFromArray(specChar);
}

function getRandomDigit() {
  var NumChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return getRandomValueFromArray(NumChar);
}

function getRandomLower() {
  var LowChar = [
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
  return getRandomValueFromArray(LowChar);
}

function getRandomUpper() {
  var UppChar = [
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
    "Y",
    "Z",
  ];
  return getRandomValueFromArray(UppChar);
}

function generatePassword() {
  var charactersAmount = prompt(
    "How many characters would you like your password to contain?"
  );

  if (charactersAmount < 8 || charactersAmount > 128) {
    alert("Please select a character count between 8 and 128");
    return;
  }

  var password = "";

  var specialCharacters = confirm(
    "Click OK to confirm including special characters"
  );
  console.log(specialCharacters);

  if (specialCharacters) {
    password += getRandomSpecialCharacter();
    charactersAmount--;
  }

  var numericCharacters = confirm(
    "Click OK to confirm including numeric characters"
  );
  console.log(numericCharacters);

  if (numericCharacters) {
    password += getRandomDigit();
    charactersAmount--;
  }

  var lowerCaseChar = confirm(
    "Click OK to confirm including lowercase characters"
  );
  console.log(lowerCaseChar);

  if (lowerCaseChar) {
    password += getRandomLower();
    charactersAmount--;
  }

  var upperCaseChar = confirm(
    "Click OK to confirm including uppercase characters"
  );
  console.log(upperCaseChar);

  if (upperCaseChar) {
    password += getRandomUpper();
    charactersAmount--;
  }

  // Based on the user's answers to the questions
  // Create a big array of all the possible options

  var allPossibleOptions = [];

  if (specialCharacters) {
    allPossibleOptions = allPossibleOptions.concat([
      "!",
      "@",
      "#",
      "$",
      "*",
      "(",
      ")",
      "_",
      "-",
      "?",
      "+",
    ]);
  }

  if (numericCharacters) {
    allPossibleOptions = allPossibleOptions.concat([
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ]);
  }

  if (lowerCaseChar) {
    allPossibleOptions = allPossibleOptions.concat([
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
    ]);
  }

  if (upperCaseChar) {
    allPossibleOptions = allPossibleOptions.concat([
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
    ]);
  }

  for (let i = 0; i < charactersAmount; i++) {
    password += getRandomValueFromArray(allPossibleOptions);
  }

  return password;
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
