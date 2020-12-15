// task 1
function isIsogram(str) {
  let lether = str[0]
  str = str.slice(1, str.length)
  if(str.length <= 1) return true
  if(str.search(lether) === -1) {
    lether = str[0]
    str = str.slice(1, str.length)
    return isIsogram(str)
  }
  return false
}
console.log(isIsogram("abacd"));

//task2
function oddFinder(num) {
  let digit = num %10 
  if(num < 10) return num % 2 !== 0
  if(digit % 2 !== 0) {
    num = (num - digit)/ 10
    return oddFinder(num)
  }
  return false
}

console.log(oddFinder(7491))

//task3
function arrayConcat(arr) {
  let newArr = [] 
  if(arr.length < 1) return newArr
  if(Array.isArray(arr[0])){
    newArr = newArr.concat(arrayConcat(arr[0]));
  }  else {
    newArr.push(arr[0]);
}

  newArr =  newArr.concat(arrayConcat(arr.slice(1)));
  return newArr
}

console.log(arrayConcat([1, [3, 4, [1, 2]], 10]))

//task4
function sumOfDigits(num, sum = 0) {
  let digit = num % 10 
  if(num <= 9){
    sum += num
    if(sum > 9) {
      num = sum
      sum = 0
      return sumOfDigits(num, sum)
    }
  }
  if(num > 9) {
    sum += digit 
    num = (num - digit)/10 
    return sumOfDigits(num, sum)
  }
  return sum
}

console.log(sumOfDigits(4567))

// task 5

function binarySearch(arr, num, newArr = arr){
  let mid = Math.floor(arr.length/2)
  if(num === arr[mid]) return newArr.indexOf(arr[mid])
  if(num < arr[mid]) {
     return binarySearch(arr.slice(0, mid), num, newArr)
  }
  if(num > arr[mid]) {
    return binarySearch(arr.slice(mid), num, newArr)
  }
}

console.log(binarySearch([1, 2, 3, 4 ,5, 6, 7, 8, 9, 20, 50], 50))


