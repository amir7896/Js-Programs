const findMissingValues = (arr) => {
  var count = 9;
  var missingVal = [];

  for (let i = 0; i <= count; i++) {
    if (arr.indexOf(i) == -1) {
      missingVal.push(i);
    }
  }
  return missingVal;
};

const arr = [3, 4, 9, 1, 7, 3, 2, 6];

console.log(findMissingValues(arr));
