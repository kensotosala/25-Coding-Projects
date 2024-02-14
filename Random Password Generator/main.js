// DOM Manipulation
const passwordText = document.querySelector(".password-text h2");

const sliderValue = document.querySelector(".length-value");

const rangeInput = document.getElementById("range-input");

const copyText = () => {
  navigator.clipboard.writeText(passwordText.textContent);
};

// => Checkboxes
const cbUpperCase = document.getElementById("cb-uppercase");
const cbLowerCase = document.getElementById("cb-lowercase");
const cbNumbers = document.getElementById("cb-numbers");
const cbSymbols = document.getElementById("cb-symbols");

// ==> Functions

function displayPassword() {
  const password = document.getElementById("displayPassword");
  password.textContent = generatePassword();
}

function updateValue() {
  sliderValue.textContent = rangeInput.value;
  displayPassword();
}

function generatePassword() {
  let strPsw = "";
  let abc = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let charset = "";

  if (cbUpperCase.checked) {
    charset += abc;
  } else if (cbLowerCase.checked) {
    charset += abc.toLowerCase();
  } else if (cbNumbers.checked) {
    charset += numbers;
  } else if (cbSymbols.checked) {
    charset += symbols;
  } else {
    charset = abc + numbers + symbols + abc.toLowerCase();
    cbUpperCase.checked = true;
    cbNumbers.checked = true;
    cbSymbols.checked = true;
    cbLowerCase.checked = true;
  }

  let passwordLength = rangeInput.value;

  // for (let i = 0; i < passwordLength; i++) {
  //   if (cbUpperCase.checked) strPsw += getRandomChar(ABC);
  //   if (cbLowerCase.checked) strPsw += getRandomChar(ABC.toLowerCase());
  //   if (cbNumbers.checked) strPsw += getRandomChar(numbers);
  //   if (cbSymbols.checked) strPsw += getRandomChar(symbols);
  // }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    strPsw += charset[randomIndex];
  }

  return strPsw;
}
