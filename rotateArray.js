const rotateArrayRight = (arr) => {
  if (arr.length === 0) {
    return arr;
  }

  const n = arr.length;
  const lastElement = arr[n - 1];

  for (let i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = lastElement;

  return arr;
};

const array = [3, 8, 9, 7, 6];
console.log(rotateArrayRight(array));
