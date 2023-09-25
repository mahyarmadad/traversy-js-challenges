function countDown(num) {
  if (num <= 0) return "Done";
  console.log("counting:", num);
  num--;
  countDown(num);
}

module.exports = countDown;
