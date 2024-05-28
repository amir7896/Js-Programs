const mostRepeatedNumber = (arr) => {
  const countMap = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (countMap[num]) {
      countMap[num]++;
    } else {
      countMap[num] = 1;
    }
  }

  let maxCount = 0;
  let mostRepeatedNum = null;

  for (const num in countMap) {
    if (countMap[num] > maxCount) {
      maxCount = countMap[num];
      mostRepeatedNum = num;
    }
  }

  return `${mostRepeatedNum} is repeated ${maxCount} times`;
};

// Example usage:
const array = [4, 3, 3, 3, 6, 4, 7, 9, 2, 6, 6, 3, 8, 5, 1, 5, 3];
console.log(mostRepeatedNumber(array));
