function sumAll(num1, num2) {
  let sum = 0;
  if (typeof num2 === "number" && typeof num1 === "number") {
    if (num1 < num2 && Math.sign(num1) === 1) {
      for (let i = 0; num1 <= num2; i++, num1++) {
        sum = sum + num1;
      }
      return sum;
    } else if (num1 > num2 && Math.sign(num2) === 1) {
      for (let i = 0; num1 >= num2; i++, num2++) {
        sum = sum + num2;
      }
      return sum;
    } else {
    }
    return "ERROR";
  } else {
    return "ERROR";
  }
}

// Do not edit below this line
module.exports = sumAll;
