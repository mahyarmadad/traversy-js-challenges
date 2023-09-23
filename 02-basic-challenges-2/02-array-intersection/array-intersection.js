function arrayIntersection(arr1, arr2) {
  let result = [];
  if (!arr1?.length || !arr2?.length) return result;

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}

module.exports = arrayIntersection;
