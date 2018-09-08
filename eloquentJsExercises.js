// PROGRAM STRUCTURE

// 1. Looping a Triangle
function buildTriangle(n) {
  for (let i = 0; i < n; i++) {
    console.log("#".repeat(i + 1));
  }
}

// Book solution
function buildTriangleBook() {
  for (let line = "#"; line.length < 8; line += "#") {
    console.log(line);
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

// Book solution
function fizzBuzzBook() {
  for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
  }
  console.log(output || n);
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

// Book Solution
function buildChessboardbook() {
  let size = 8;
  let board = "";
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }
  console.log(board);
}

// FUNCTIONS

// 1. Minimum
function minimum(a, b) {
  if (a <= b) {
    return a;
  }
  return b;
}

// Book solution
function minBook(a, b) {
  if (a < b) return a;
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

// Book solution
function isEvenBook(n) {
  if (n == 0) return true;
  if (n == 1) return false;
  if (n < 0) return isEvenBook(-n);
  return isEvenBook(n - 2);
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

// Book solution
// This is a case where you write a general function
// and then have a more specific function call that general
// function with specialized params
function countCharBook(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBsBook(string) {
  return countCharBook(string, "B");
}

// DATA STRUCTURES

// 1. Sum of a range
function range(start, end, step = 1) {
  let result = [];
  if (start < end) {
    for (let i = start; i <= end; i += step) result.push(i);
  } else {
    for (let i = start; i >= end; i -= step) result.push(i);
  }
  return result;
}

function sum(arr) {
  return arr.reduce((acc, num) => {
    return acc + num;
  }, 0);
}

// Book solution
function rangeBook(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
}

function sumBook(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
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

// Book solution
// Damn...my solutions for these were letter for letter same as the book's :D
function reverseArrayBook(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlaceBook(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = old;
  }
  return array;
}

// 3. A list
// yay recursion w/ ..rest
// YASSS I'm super proud of this solution
function arrayToList([first, ...rest]) {
  if (!first) return null;
  return { value: first, rest: arrayToList(rest) };
}

//  fxn(1, [2,3])
//    return {value: 1, rest: fxn(2, [3])}
//                              return {value: 2, rest: fxn(3, [] (null)}
//                                                        base case: return null

function listToArray(list, array = []) {
  if (!list.rest) {
    return [...array, list.value];
  }
  return listToArray(list.rest, [...array, list.value]);
}

//  let list = {
//    value: 1,
//    rest: {
//      value: 2,
//      rest: {
//        value: 3,
//        rest: null
//      }
//    }
//  }

//  fxn({value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}, [])
//    fxn({value: 2, rest: {value: 3, rest: null}, [1])
//      fxn({value: 3, rest: null}, [1, 2])
//        base case: return

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, n) {
  if (!list) {
    return undefined;
  }
  if (n === 0) {
    return list.value;
  }
  return nth(list.rest, n - 1);
}

// Book solution
function arrayToListBook(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArrayBook(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prependBook(value, list) {
  return { value, rest: list };
}

function nthBook(list, n) {
  if (!list) return undefined;
  if (n === 0) return list.value;
  return nth(list.rest, n - 1);
}

// 4. Deep comparison
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (
    a === null ||
    typeof a != "object" ||
    b === null ||
    typeof b != "object"
  ) {
    return false;
  }

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

// HIGHER ORDER FUNCTIONS

// 1. Flattening
// nesting =  recursion?
function flatten(array) {
  return array.reduce((flattened, current) => flattened.concat(current), []);
}

// 2. Your own loop
function loop(start, test, body, update) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

// loop(3, n => n > 0, n => n - 1, console.log)

// 3. Everything
function every(array, test) {
  for (let element of array) {
    if (!test(array)) return false;
  }
  return true;
}

// 4. Dominant writing direction
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known === -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name !== "none");

  if (counted.length === 0) return "ltr";

  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

