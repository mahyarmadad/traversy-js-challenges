function findFirstNonRepeatingCharacter(str) {
  let charMap = new Map();

  for (let char of str) charMap.set(char, (charMap.get(char) || 0) + 1);
  for (let char of str) if (charMap.get(char) === 1) return char;
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
