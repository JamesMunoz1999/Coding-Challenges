//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function greaterThan (a, b) {

    let newArrA = []
    newArrA = a.map(element => Math.pow(element, 2))
    let newArrASum = newArrA.reduce((acc, cur) => acc + cur)

    let newArrB = []
    newArrB = b.map(element => Math.pow(element, 3))
    let newArrBSum = newArrB.reduce((acc, cur) => acc + cur)

    if ( newArrASum > newArrBSum) {
        return true
    }else {
        return false
    }
}

console.log (greaterThan([2,2,2], [2,1,1]))