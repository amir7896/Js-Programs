const sumOfTwoLargest = (arr) => {
  if (arr.length < 2) {
    throw new Error("Array must contain at least two elements");
  }

  let max1 = arr[0] > arr[1] ? arr[0] : arr[1];
  let max2 = arr[0] > arr[1] ? arr[1] : arr[0];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }
  }

  return max1 + max2;
};

// Example usage:
const array = [3, 7, 1, 5, 11, 19];
console.log(sumOfTwoLargest(array));
