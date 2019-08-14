// Your code here
function mapToNegativize(sourceArray){
    let newArray = []
    sourceArray.forEach(num => newArray.push(-num))
    return newArray
}

function mapToNoChange(array){
    let newArray = []
    array.forEach(num => newArray.push(num))
    return newArray
}

function mapToDouble(array){
    let doubled = []
    array.forEach(num => doubled.push(num * 2))
    return doubled
}

function mapToSquare(array){
    let squared = []
    array.forEach(num => squared.push(num**2))
    return squared
}

function reduceToTotal(sourceArray, start = 0){
    let total = start
    sourceArray.forEach(num => total += num)
    return total
}

function reduceToAllTrue(array){
    let test = true
    array.forEach(value => value? test:test = false)
    return test
}

function reduceToAnyTrue(array){
    let test = false
    array.forEach(value => value? test=true: test)
    return test
}