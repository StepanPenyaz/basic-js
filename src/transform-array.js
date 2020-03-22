module.exports = function transform(arr) {
  if (Array.isArray(arr) == false)
    throw new Error();
  var resultArray = [];
  for (let index = 0; index < arr.length; index++) {
    switch (arr[index]) {
      case "--discard-next":
        index++;
        break;
      case "--discard-prev":
        resultArray.pop();
        break;
      case "--double-next":
        if (index < arr.length - 1) {
          resultArray.push(arr[index + 1]);
        }
        break;
      case "--double-prev":
        if (index > 0) {
          resultArray.push(arr[index - 1]);
        }
        break;
      default:
        resultArray.push(arr[index]);
        break;
    }
  }
  return resultArray;
};
