// task 1 
//i have a problem in this task,i will try fix.

function correctAnagrams(word, arr, newArr = []) {
  for (let el of arr) {
    for (let i = 0; i < word.length; i++) {
      if (el.search(word[i]) === -1) {
        arr.shift();
        return correctAnagrams(word, arr);
      }
    }
    newArr.push(el);
  }
  return newArr
}

console.log(correctAnagrams("listen", ["enlists", "google", "inlets", "banana"]))

//task 2

function sub(str, num, arr = []) {
  if (str.length < num) return arr;
  arr.push(str.substring(0, num));
  return sub(str.slice(1), num, arr);
}

console.log(sub('495215', 3))


//task 3

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let swipe = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = swipe;
  }
  return arr;
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7]))

//task4


function concat(...args) {
  let newArr = [];
  for (let el of args) {
    if (Array.isArray(args[el])) {
      newArr.push(...args[el]);
    }
  }
  return newArr;
}

console.log(concat([1, 2], [3, 4], [5, 6]))



// task 5
// filter
function arrayFilter(arr, callBack) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(arrayFilter([1, 2, 3, 3, 3],(elem)=> elem === 2))

//map

function map(arr, callBack) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callBack(arr[i], i, arr));
  }
  return newArr;
}

console.log(map([1, 2, 3], (el) => el * 2))

//forEach

function forEach(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    callBack(arr[i], i, arr);
  }
}

console.log(forEach(forEach(['ACA', 'JS', 'Hayko'], (el) => el === 'Hayko'? console.log('true name'): console.log('false name'))))

//reduce

function reduce(arr, callBack, acc) {
  for (let el of arr) {
    acc.push(callBack(acc, el));
  }
  return acc;
}

console.log(reduce(reduce([1, 2, 3, 4], (acc, el) => el * 2, [])));

// task6

function User(userData) {
  this.name = userData.name;
  this.password = userData.password;
  this.balance = userData.balance;
}

User.prototype.getName = function () {
  return this.name;
};

User.prototype.deposit = function (amount) {
  this.balance + amount;
};

User.prototype.resetPassword = function (newPassord, oldPassword) {
  if (this.password === oldPassword) {
    this.password = newPassord;
    return;
  }
  return "access denied";
};

User.prototype.getBalance = function (password) {
  if (this.password === password) {
    return this.balance;
  }
  return "access denied";
};

const newUser = new User({
  name: "John",
  password: "itsnotyourbusiness",
  balance: 100,
});
