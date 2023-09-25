const isValidIPv4 = (input) => {
  if (!input) return false;
  let str = input.split(".");
  if (str.length !== 4) return false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "") return false;
    let num = parseInt(str[i]);
    if (num < 0 || num > 255) return false;
    if (isNaN(num)) return false;
  }
  return true;
};

module.exports = isValidIPv4;
