function findMissingLetter(arr) {
  if (!arr?.length) return;
  let start = arr[0].charCodeAt(0);
  let end = arr[arr.length - 1].charCodeAt(0);
  for (let i = start; i <= end; i++) {
    if (!arr.includes(String.fromCharCode(i))) {
      return String.fromCharCode(i);
    }
  }
}

module.exports = findMissingLetter;
