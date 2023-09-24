function sumOfEvenSquares(numbers) {
  if (numbers?.length < 1) return 0;
  let evenNumber = numbers.filter((num) => num % 2 === 0);
  return evenNumber.reduce((a, b) => a + b ** 2, 0);
}
module.exports = sumOfEvenSquares;
