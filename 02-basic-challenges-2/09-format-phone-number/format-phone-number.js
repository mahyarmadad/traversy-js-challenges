function formatPhoneNumber(numbers) {
  if (numbers.lenght !== 10) return "invalid lenght";
  if (numbers.every((number) => typeof number !== "number"))
    return "invalid number";
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}

module.exports = formatPhoneNumber;
