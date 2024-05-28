const descendingSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let maxIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIdx]) {
        maxIdx = j;
      }
    }
    if (maxIdx !== i) {
      let temp = arr[i];
      arr[i] = arr[maxIdx];
      arr[maxIdx] = temp;
    }
  }
  return arr;
};

const array = [3, 2, 7, 4, 6, 9];
console.log(descendingSort(array));
