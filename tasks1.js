function oddOrEven (num) {
  if(num % 2 === 0) {
    return "even"
  } 
  
  return "odd";
}

function newFunc(num) {
  const sym = num % 10;
  if (num <= 10 || sym === 0) {
    return num;
  }

  return parseInt(sym + "" + Math.floor(num / 10));
}


function average (num1 , num2 , num3 , num4 , num5) {

  return (num1+num2+num3+num4+num5)/arguments.length
}

function multiple (num) {
  const isDividableBy3 = num % 3 === 0;
  const isDividableBy5 = num % 5 === 0;
  const isDividableBy7 = num % 7 === 0;
  const valu = num + " "
  if(!(isDividableBy3 || isDividableBy5 || isDividableBy7)) {
    return valu + "is not a multiple of 3, 5 or 7."
  }

  if(isDividableBy3 && isDividableBy5 && isDividableBy7) {
    return valu + "is a multiple of 3, 5 and 7."
  }

  if(isDividableBy3 && isDividableBy7) {
    return valu + "is a multiple of 3 and 7."
  }

  if(isDividableBy5 && isDividableBy7) {
    return valu + "is a multiple of 5 and 7."
  }

  if(isDividableBy3) {
    return valu + "is a multiple of 3."
  }

  if(isDividableBy5) {
    return valu + "is a multiple of 5."
  }

  if(isDividableBy7) {
    return valu + "is a multiple of 7."
  }
}




  function starType (num) {

  for (let i = 0 ; i < num ; i++) {
    let s = "";
    for (let j = 0 ; j < num ; j++) {
      if (i === j || i + j === num - 1) {
        s += "*";
      } else { 
        s += " ";
      }
    }
    console.log(s)
  }
}

function calc (num1 , sym , num2) {
  if (sym === "+") {
    return num1 + num2
  }

  if (sym === "-") {
    return num1 - num2
  }

  if (sym === "*") {
    return num1 * num2
  }

  if (sym === "/") {
    if (num2 !== 0){
      return num1 / num2
    } else {
      console.log("can't divide by 0!")
    }
  }
}

function intWithinBounds (num1 , num2 , num3) {
  if(num1 > num2 && num1 < num3 && num1 % 10 === 0) {
    return true
  } else {
    return false
  }
}

function hasKey (obb , str) {
  if(obb[str] !== undefined) {
    return true
  } else 
  {
    return false
  }
}

function addSuffix (str) { 
  return function (suf) {
    return str+suf;
  }
}