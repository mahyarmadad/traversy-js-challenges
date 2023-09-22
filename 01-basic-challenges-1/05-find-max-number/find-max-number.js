function findMaxNumber(arr) {
  if (arr?.length < 1) return 0;
  if (arr?.length === 1) return arr[0];
  let max = arr[0];
  for (let number of arr) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

module.exports = findMaxNumber;
