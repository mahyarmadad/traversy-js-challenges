function titleCase(str) {
  if (str === "") return "";
  let words = str.split(" ");
  let result = [];
  for (let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
  return result.join(" ");
}

module.exports = titleCase;
