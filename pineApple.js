const pineApple = (start_num, end_num) => {
  const numbers = [];
  for (let num = start_num; num <= end_num; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      numbers.push("PineApple");
    } else if (num % 3 === 0) {
      numbers.push("Pine");
    } else if (num % 5 === 0) {
      numbers.push("Apple");
    } else {
      numbers.push(num);
    }
  }
  return numbers;
};

console.log(pineApple(1, 100));
module.exports = pineApple;
