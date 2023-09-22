let vowels = ["a", "e", "i", "o", "u"];

function countVowels(str) {
  let count = 0;
  if (str === "") return count;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

module.exports = countVowels;
