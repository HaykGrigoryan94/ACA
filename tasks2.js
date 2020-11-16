function whichAreLarger (arr , num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > num) {
          newArr.push(arr[i]);
        }
    }
    if(newArr.length) {
      return newArr
    }
    return "Such values do not exist."
}

//console.log(whichAreLarger([10, 25, 16, -5, 30, 15, 24] , 16))

function eachDigitEven(num1, num2) {
  let newArr = [];
  for (let i = num1; i <= num2; i++) {
    const arr = i.toString().split("");
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % 2 !== 0) {
        break;
      }
      if (j === arr.length - 1) {
        newArr.push(i);
      }
    }
  }
return  newArr.length ? newArr : "Such numbers does not exist.";
}

console.log(eachDigitEven(99, 199));

function findINdex(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > arr[i+1]) {
      return i + 1
    }
  }
  return -1
}

console.log(findINdex([-9, -4, -4, 3, 12, 4, 5]))


// task 4

function productOfInt(arr) {
  let sum = 1
  for(let i = 0; i < arr.length; i++) {
    const mult = arr[i] * arr[i + 1]
    if(sum < mult) {
      sum = mult
    }
  }
  return sum
}

console.log(productOfInt([2, 4, 6, 88]))



function missingItems(arr) {
  let result = 0
  let newArr = []
  let min = Math.min.apply(Math, arr)
  let max = Math.max.apply(Math, arr)
  for(let i = min; i<=max; i++ ){
    newArr.push(arr[i])
  }
  return result = newArr.length - arr.length
}

console.log(missingItems([1 , 5 , 8]))



function arrSum(arr) {
  let newArr = []
  for(let i = 0; i < arr.length; i++) {
    let sum =0
    for(j = 0; j < arr[i].length; j++){
      sum += arr[i][j]
    }
    newArr.push(sum)
  }
  return newArr
}

console.log(arrSum([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]))


function newArrLenghtMultiple(arr) {
  newArr = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0){
      newArr.push(arr[i])
    }
  }
  for(let j = 0; j < newArr.length ; j++) {
    newArr[j] = newArr[j] * newArr.length
  }
  return newArr
}

console.log(newArrLenghtMultiple([2, 4, 6, 88]))



 