// Your code here
const mapToNegativize = (sourceArray) => {
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++){
        newArray.push(-1 * sourceArray[i])
    }
    return newArray
}

const mapToNoChange = (sourceArray) => {
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i])
    }
    return newArray

}

const mapToDouble = (sourceArray) => {
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++){
        newArray.push(2 * sourceArray[i])
    }
    return newArray
}

const mapToSquare = (sourceArray) => {
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] * sourceArray[i])
    }
    return newArray
}

const reduceToTotal = (sourceArray, startingPoint = 0) => {
    let x = startingPoint
    for(let i = 0; i < sourceArray.length; i++){
        x += sourceArray[i]
    }
    return x
}

const reduceToAllTrue = (sourceArray) => {
    for(let i = 0; i < sourceArray.length; i++){
        if(sourceArray[i] == false){
            return false
        }
    }
    return true
}

const reduceToAnyTrue = (sourceArray) => {
    for(let i = 0; i < sourceArray.length; i++){
        if(sourceArray[i] == true){
            return true
        }
    }
    return false
}