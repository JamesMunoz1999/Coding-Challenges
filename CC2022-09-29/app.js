// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray (arr1, arr2) {
    let var1 = arr1.reduce((acc, cur) => acc + cur)
    let var2 = arr2.reduce((acc, cur) => acc + cur)
    return var1 + var2
}

console.log (arrayPlusArray([1,3,5], [1,3,5]))