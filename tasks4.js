// task 1

function removeEl(arr, i = 0) {
  if (arr.length <= 1) {
    return [];
  }
  if (i === arr.length - 1) {
    arr.pop();
    return arr;
  }
  arr[i] = arr[i + 1];
  return removeEl(arr, i + 1);
}

console.log(removeEl([6, 78, "n", 0, 1]));

// task 2

function invertKey(obj) {
  let newObj = {};
  for (let key in obj) {
    let val = obj[key];
    if (newObj.hasOwnProperty(val)) {
      if (Array.isArray(newObj[val])) {
        newObj[val].push(key);
      } else {
        newObj[val] = [newObj[val], key];
      }
    } else {
      newObj[val] = key;
    }
  }
  return newObj;
}

console.log(invertKey({ a: "1", b: "2", c: "2", z: "2" }));


// task 3

function sortBooks(arr) {
  let newArr = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].readStatus){
      newArr.push(arr[i])
    }
  }
  for(let i = 0; i<newArr.length; i++) {
    for(let j = 0;j<newArr.length;j++){
      if(j+1 < newArr.length){
      if(newArr[j].percent > newArr[j+1].percent){
        let sort = newArr[j].percent
        newArr[j].percent = newArr[j+1].percent
        newArr[j+1].percent = sort
      }
    }
  }
    
  }
  return newArr
}




[
  { book: "Catcher in the Rye", readStatus: true, percent: 40},
  { book: "Animal Farm", readStatus: true, percent: 20},
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 } ,
  
  { book: "After Dark", readStatus: true, percent: 70 }
  ];

// Task 4

function rotate(arr, num) {
  if (num > 0) {
    arr.push(arr[0]);
    arr.shift();
    num -= 1;
    return rotate(arr, num);
  }
  if (num < 0) {
    arr.unshift(arr[arr.length - 1]);
    arr.pop();
    num += 1;
    return rotate(arr, num);
  }
  return arr;
}

console.log(rotate([1, 2, 3, 4], -2));

// Task 7

function FunctionConstructor(...args) {
  this.mapik = function(callBack) {
      return args.map(callBack)
  }
}

new FunctionConstructor(1,2,3,4,5)


