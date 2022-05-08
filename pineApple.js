const pineApple = (start_num, end_num) => {
 const numbers = []
 for(let num = start_num; num <= end_num; num++) {
     numbers.push(num)
 }
 return numbers
}

console.log(pineApple(1,100))
module.exports = pineApple