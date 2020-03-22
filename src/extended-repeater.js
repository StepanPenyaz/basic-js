module.exports = function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = "+";
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }

  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }

  if (options.addition === undefined) {
    options.addition = "";
  }

  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }

  const additionArray = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionArray.push(String(options.addition));
  }

  const addition = additionArray.join(`${options.additionSeparator}`);

  const resultArray = [];

  for (let i = 0; i < options.repeatTimes; i++) {
    resultArray.push(`${String(str)}${addition}`);
  }

  return resultArray.join(options.separator);
};
