function highestScoringWord(str) {
  if (!str) return "";
  let words = str.split(" ");
  let scores = words.map((word) => {
    let score = 0;
    for (let letter of word) score += letter.charCodeAt(0) - 96;
    return score;
  });

  let highScore = 0;
  let highIndex = 0;

  for (let index in scores) {
    if (scores[index] > highScore) {
      highScore = scores[index];
      highIndex = index;
    }
  }
  return words[highIndex];
}

module.exports = highestScoringWord;
