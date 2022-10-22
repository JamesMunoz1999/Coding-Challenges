// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainder(a, b){
  if(b>a)
    return b%a;
  else
    return a%b;
}

console.log(remainder (0, 1))