// task 1
function oddAndEvenArrays(arr) {
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? odd.push(arr[i]) : even.push(arr[i]);
  }
  return [odd, even];
}

console.log(oddAndEvenArrays([45, 12, 3, 6, 17, 0]));

//task2

function filterRange(arr, start, end) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= start && arr[i] <= end) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filterRange([1, 10, 20, 30], 9, 23));

//task3

const frameworks = [
  { id: 1, title: "react" },
  { id: 2, title: "angular" },
  { id: 3, title: "vue" },
];

function findId(frameworks, id) {
  for (let i = 0; i < frameworks.length; i++) {
    if (frameworks[i].id === id) {
      return frameworks[i];
    }
    return `No Data`;
  }
}

console.log(findId(frameworks, 39));

//task4

const arr = [`Godfather`, `Whiplash`, `Social Network`];

function obbGenerator(arr) {
  let obb = {};
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push({ title: arr[i], idx: i });
  }
  return newArr;
}

console.log(obbGenerator(arr));

//task5

const arrInput = [`Godfather`, `Game of thrones`, `Social Network`];

function removeByLetter(arrInput, letter) {
  let newArr = [];
  for (let i = 0; i < arrInput.length; i++) {
    if (arrInput[i][0].toLowerCase() !== letter) {
      newArr.push(arrInput[i]);
    }
  }
  return newArr;
}

console.log(removeByLetter(arrInput, `g`));

//task 6 V1 (using .padEnd)

function repeat(str1, str2) {
  let shortStr = str1.length < str2.length ? str1 : str2;
  let longStr = str1.length > str2.length ? str1 : str2;
  shortStr = shortStr.padEnd(longStr.length, shortStr)
  
  return shortStr  
}

console.log(repeat( "abcdefg", "ab"));

//task 6 V2

function repeat2(str1, str2) {
  let result = "";
  let shortStr = str1.length < str2.length ? str1 : str2;
  let longStr = str1.length > str2.length ? str1 : str2;

  for (let i = 0; result.length < longStr.length; i++) {
    if (i === shortStr.length) {
      i = 0;
    }
    result += shortStr[i];
  }
  return result;
}

console.log(repeat2("abcdefg", "ab"));
