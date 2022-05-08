const pineApple = () => {
 const numbers = []
 for(let num = 1; num <= 100; num++) {
     numbers.push(num)
 }
 return numbers
}

console.log(pineApple())
module.exports = pineApple