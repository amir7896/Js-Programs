const isPlindrom = (str) => {
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str.charAt(i);
  }
  return str == reverseString;
};

console.log(isPlindrom("test"));
