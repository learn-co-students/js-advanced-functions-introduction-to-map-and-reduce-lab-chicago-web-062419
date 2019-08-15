// Your code here
let testArr = [1,2,3,4,5,56]

const mapToNegativize = (arr) => {
    let newArr = [] 
    arr.forEach(e => {
        newArr.push(-e)    
    })
    return newArr
}
// const x1 = mapToNegative(testArr)
// console.log(x1)
// console.log(testArr)
const mapToNoChange = (arr) => {
    let newArr = []
    arr.forEach(e => {newArr.push(e)})
    return newArr
}
// const x2 = mapToNoChange(testArr)
// console.log(x2)
// console.log(testArr)

const mapToDouble = (arr) => {
    let newArr = []
    arr.forEach(e => {newArr.push(e*2)})
    return newArr
}
const mapToSquare = (arr) => {
    let newArr = []
    arr.forEach(e => {newArr.push(e**2)})
    return newArr
}

const reduceToTotal = (arr, sum = 0) => {
    // let sum = 
    arr.forEach(e => {sum += e})
    return sum
}
let trueTest = [1,2,3,4,5]
let falseTest = [1,2,false,4,5,false]

const reduceToAllTrue = (arr) => {
    let bool
    arr.forEach(e => { 
        e ? bool = true : bool = false 
        // console.log(e + ' ' + bool)
    })
    return bool
}

const reduceToAnyTrue = (arr) => {
    let bool = false
    arr.forEach(e => { if (e) {bool = true } })
    return bool
}

// console.log(reduceToAnyTrue(trueTest))
// console.log(reduceToAnyTrue(falseTest))