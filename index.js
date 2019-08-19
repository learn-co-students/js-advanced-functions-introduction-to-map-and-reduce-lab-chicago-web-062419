// Your code here

const mapToNegativize = (sourceArray) => {
    let negArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        negArray.push(-1 * sourceArray[i])
    }   
    return negArray
}

const mapToNoChange = (sourceArray) => {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(sourceArray[i])
    }   
    return newArray
}

const mapToDouble = (sourceArray) => {
    let doubleArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        doubleArray.push(2 * sourceArray[i])
    }   
    return doubleArray
}

const mapToSquare = (sourceArray) => {
    let squaredArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        squaredArray.push(sourceArray[i] **2)
    }   
    return squaredArray
}

const reduceToTotal = (sourceArray, startPoint=0) => {
    let total = startPoint
    for (let i = 0; i < sourceArray.length; i++ ) {
        total = total + sourceArray[i]
    } 
    return total 
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
      if (!sourceArray[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
      if (sourceArray[i]) return true
    }
    return false
  }
  