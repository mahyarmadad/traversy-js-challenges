function validatePassword(password) {
  let hasLength = password?.length < 8;
  let hasUppercase = password
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());
  let hasLowercase = password
    .split("")
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());
  let hasDigit = password.split("").some((char) => !isNaN(parseInt(char, 10)));

  return hasLength && hasUppercase && hasLowercase && hasDigit;
}

module.exports = validatePassword;
