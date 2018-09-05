// PROGRAM STRUCTURE

// 1. Looping a Triangle
function buildTriangle(n) {
  for (let i = 0; i < n; i++) {
    console.log("#".repeat(i + 1));
  }
}

// 2. FizzBuzz
function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    }
  }
}

// 3. Chessboard
function buildChessboard(n) {
  let board = "";
  let space = true;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (space) {
        row += " ";
      } else {
        row += "#";
      }
      space = !space;
    }
    row += "\n";
    board += row;
    space = !space;
  }
  return board;
}

// FUNCTIONS

// 1. Minimum
function minimum(a, b) {
  if (a <= b) {
    return a;
  }
  return b;
}

// 2. Recursion
function isEven(num) {
  if (num === 0) {
    return true;
  }
  if (num === 1) {
    return false;
  }
  return isEven(num - 2);
}

// 3. Bean Counting
function countBs(str) {
  let numBs = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "B") {
      numBs += 1;
    }
  }
  return numBs;
}

function countChars(str, char) {
  let numChars = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      numChars += 1;
    }
  }
  return numChars;
}

// DATA STRUCTURES

// 1. Sum of a range
function range(start, end, step = 1) {
  let result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

function sum(arr) {
  return arr.reduce((acc, num) => {
    return acc + num;
  }, 0);
}

// 2. Reverse and array
function reverseArray(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}

// 3. A list


