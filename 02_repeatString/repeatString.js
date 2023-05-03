const repeatString = function (string, num) {
  counter = "";
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      counter += string;
    }
    return counter;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
