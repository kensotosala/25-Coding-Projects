// DOM Manipulation
const passwordText = document.querySelector(".password-text h2");

const sliderValue = document.querySelector(".length-value");

const rangeInput = document.getElementById("range-input");

const copyText = () => {
  navigator.clipboard.writeText(passwordText.textContent);
};

function displayPassword() {
  const password = document.getElementById("displayPassword");
  password.textContent = generatePassword();
}

// ==> Functions
const updateValue = () => {
  sliderValue.textContent = rangeInput.value;
  displayPassword();
};

function generatePassword() {
  let strPsw = "";
  let ABC = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  let abc = "abcdefghijklmnñopqrstuvwxyz";
  let numbers = "0123456789";
  let symbols = "'!°|#$%&/()=?¡¿-.,;:_[*]{+}´¨";

  let passwordLength = rangeInput.value / 4;

  for (let i = 0; i < passwordLength; i++) {
    strPsw += getRandomChar(ABC);
    strPsw += getRandomChar(abc);
    strPsw += getRandomChar(numbers);
    strPsw += getRandomChar(symbols);
  }

  return strPsw;
}

function getRandomChar(charset) {
  return charset.charAt(Math.floor(Math.random() * charset.length));
}
