function sumUpTo(n) {
  if (n === 1) return 1;
  const result = n + sumUpTo(n - 1);
  return result;
}

module.exports = sumUpTo;
