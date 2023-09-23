function findMissingNumber(arr) {
  if (!arr?.length) return undefined;
  if (arr.length < 2) return 1;
  const length = arr.length + 1;
  const sum = (length * (length + 1)) / 2;

  let actualSum = arr.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
