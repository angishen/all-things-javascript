// Chapter 5: Higher Order Functions

// Higher order functions are functions that operate on other functions
// Allow abstraction over actions

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log); // 0; 1; 2

// ex: function that creates new functions
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
greaterThan10(11); // true

// ex: functions that change other functions
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", "args", ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1); // calling with [3,2,1]; called with [3,2,1], returned 1

// ex: function that provides new type of control flow
function unless(test, then) {
  if (!test) then();
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

// 0 is even; 2 is even

// reduce function examples
// Find script with most characters
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  });
}

// find script with greatest number of characters
console.log(
  SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
  })
);

// codePointAt() - gives code of full unicode character (including for 2-unit chars)
// also, for/of loop gives real characters rather than code units when looping over a str





