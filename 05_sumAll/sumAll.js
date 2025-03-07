function validInput(num1, num2) {
  return (
    Number.isInteger(num1) && Number.isInteger(num2) && num1 > 0 && num2 > 0
  );
}

function sumAll(min, max) {
  if (!validInput(min, max)) return "ERROR";
  if (min > max) [min, max] = [max, min];

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

// Do not edit below this line
module.exports = sumAll;
