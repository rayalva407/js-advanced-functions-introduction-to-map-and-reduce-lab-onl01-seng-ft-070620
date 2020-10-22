function mapToNegativize(sourceArray) {
  const newArray = []
  sourceArray.forEach(element => {
    let negativized = element * -1
    newArray.push(negativized)
  })
  return newArray;
}

function mapToNoChange(sourceArray){
  const newArray = []
  sourceArray.forEach(element => {
    newArray.push(element)
  })
  return newArray;
}

let mapToDouble = function(sourceArray){
  const newArray = []
  sourceArray.forEach(element => {
    let result = element * 2
    newArray.push(result)
  })
  return newArray
}

let mapToSquare = function(sourceArray){
  const newArray = [];
  sourceArray.forEach(element => {
    let result = element**2
    newArray.push(result)
  })
  return newArray;
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let total = startingPoint;
  sourceArray.forEach(element => {
    total += element
  })
  return total;
}

function reduceToAllTrue(sourceArray){
  let result = false
  sourceArray.forEach(element => {
    if (element === false) {
      result = false
    }
    else {
      result = true
    }
  })
  return result
}

function reduceToAnyTrue(sourceArray) {
  let result = false
  sourceArray.forEach(element => {
    if (element === true) {
      result = true
    }
    else {
      result = false
    }
  })
  return result;
}