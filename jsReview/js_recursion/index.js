// A recursive function is a function that calls itself

// All recursive functions must have a termination condition. 
// When this condition is true, the function will not call itself again
// and allows us to exit recursion

// Return sum of all elements in the array

const numbers = [1, 2, 3, 4, 5]

// Using a loop
function sum(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}

// Using reduce
function sum(arr) {
  return arr.reduce((acc, num) => {
    return acc + num 
  })
}

function sum(arr) {
  // termination case
  if (arr.length === 0) {
    // do not call the recursive function again
    return 0  // no more numbers in the array so we can add zero
  }

  // in the return statement, we call the recursive function again
  // every recursive case we call must get closer
  // to the termination case
  return arr[0] + sum(arr.slice(1))
}

// sum([1, 2, 3, 4, 5])
// 1 + sum([2, 3, 4, 5])
// 1 + 2 + sum([3, 4, 5])
// 1 + 2 + 3 + sum([4, 5])
// 1 + 2 + 3 + 4 + sum([5])
// 1 + 2 + 3 + 4 + 5 + sum([])
// 1 + 2 + 3 + 4 + 5 + 0
// 1 + 2 + 3 + 4 + 5
// 1 + 2 + 3 + 9 
// 1 + 2 + 12
// 1 + 14
// 15

// Factorial using loop
function iterativeFactorial(n) {
  let output = 1
  for (let i = 1; i <= n; i++) {
      output *= i 
  }
  return output
}

// Recursive factorial
function factorial(n) {
  // termination condition
  if (n === 0) return 1
  return n * factorial(n - 1)
}

// factorial(4)
// 4 * factorial(3)
// 4 * 3 * factorial(2)
// 4 * 3 * 2 * factorial(1)
// 4 * 3 * 2 * 1 * factorial(0)
// 4 * 3 * 2 * 1 * 1
// 4 * 3 * 2 * 1
// 4 * 3 * 2
// 4 * 6
// 24

console.time('recursive');
factorial(10000);
console.timeEnd('recursive');

console.time('iterative');
iterativeFactorial(10000);
console.timeEnd('iterative');

function recursiveReverseString(str) {
  if (str.length === 0) return ""
  return str[str.length - 1] + recursiveReverseString(str.slice(0, -1))
}

// recursiveReverseString("word")
// "d" + recursiveReverseString("wor")
// "d" + "r" + recursiveReverseString("wo")
// "d" + "r" + "o" + recursiveReverseString("w")
// "d" + "r" + "o" + "w" + recursiveReverseString("")
// "d" + "r" + "o" + "w" + ""
// "d" + "r" + "o" + "w"
// "d" + "r" + "ow"
// "d" + "row"
// "drow"

function iterativeReverseString(str) {
  let output = ''
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i]
  }
  return output
}

