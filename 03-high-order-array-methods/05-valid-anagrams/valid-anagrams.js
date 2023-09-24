function validAnagrams(str1, str2) {
  if (!str1 || !str2) return false;
  if (str1.length !== str2.length) return false;
  let charStr1 = str1.split("");
  let charStr2 = str2.split("");
  let objChar1 = charStr1.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});
  let objChar2 = charStr2.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});

  console.log("objChar1", objChar1);
  return Object.keys(objChar1).every(
    (char) => objChar1[char] === objChar2[char]
  );
}

module.exports = validAnagrams;
