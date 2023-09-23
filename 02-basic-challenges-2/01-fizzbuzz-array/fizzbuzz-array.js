function fizzBuzzArray(num) {
  if (num < 1) return 0;
  let arr = [];
  for (let i = 0; i <= num; i++) {
    if (num % 3 === 0 && num % 5 === 0) arr.push("FizzBuzz");
    else if (num % 3 === 0) arr.push("Fizz");
    else if (num % 5 === 0) arr.push("Buzz");
    else arr.push(i);
  }
  return arr;
}

module.exports = fizzBuzzArray;
