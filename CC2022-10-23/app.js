// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum (numbers) {
  
    if (numbers.length === 0){
      return 0
    } else {
      return numbers.reduce((acc, cur) => acc + cur, 0)
    }
    
    
}

console.log(sum([5,12,13]))