const pineApple = (start_num, end_num) => {
  const numbers = [];
  for (let num = start_num; num <= end_num; num++) {
    if (isMultiple(num, 3) && isMultiple(num, 5)) {
      numbers.push("PineApple");
    } else if (isMultiple(num, 3)) {
      numbers.push("Pine");
    } else if (isMultiple(num, 5)) {
      numbers.push("Apple");
    } else {
      numbers.push(num);
    }
  }
  return numbers;
};

const isMultiple = (val, div) => {
  return val % div === 0;
};

console.log(pineApple(1, 100));
module.exports = pineApple;
