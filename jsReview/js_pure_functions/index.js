// JS Pure Functions
// A pure funtion will always return the same output given the same input
// They don't mutate anything outside of its scope

const two = 2

function double(n) {
  return n * 2
} 

addTwo(two) // returns 4
console.log(two) // is still 2
// Javascript copied the value of the variable 'two' when passing it to the function

// non-pure
Math.random() // a different output given the input (in this case no arguments)

// Not all data types are immutable
let str = "Bob"
str[0] = "J"
str // "Bob"

const numbers = [1, 2, 3, 4, 5]

// not a pure function
function doubleAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2 
  }
  return arr
}

// returns an array with doubled values
// we're taking the value of numbers and passing it into the function (pass by value)
doubleAll(numbers) 

console.log(numbers) // the original array was also doubled

// pure doubleAll
function doubleAll(arr) {
  const output = []
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i] * 2)
  }
  return output
}

// Non mutating array methods
// .slice()
// .map()
// .filter()
// .forEach()

// pure doubleAll using .map()
function doubleAll(arr) {
  return arr.map(element => element * 2)
}

const numbers2 = numbers
numbers.push(6)

// both variables point to the same array in memory
numbers // [1, 2, 3, 4, 5, 6]
numbers2 // [1, 2, 3, 4, 5, 6]

// The main way we prevent mutation is by copying an array/object

// spread operator (...)
function doubleAll(arr) {
  const arrCopy = [...arr]
  for (let i = 0; i < arrCopy.length; i++) {
    arrCopy[i] *= 2
  }
  return arrCopy
}

// Object.assign(target, source)
function doubleAll(arr) {
  const arrCopy = Object.assign([], arr)
  for (let i = 0; i < arrCopy.length; i++) {
    arrCopy[i] *= 2
  }
  return arrCopy
}

// Shallow vs. deep copy
// All methods in JS used to create/copy arrays/objects only do a shallow copy
// This means that only the first level is copied

const nestedArray = [[1,2,3], [4,5,6]]
const nestedArray2 = [...nestedArray] 
nestedArray[0][0] = 100
nestedArray // [[100,2,3], [4,5,6]]
nestedArray2 // [[100,2,3], [4,5,6]]

const car = {
  doors: 4,
  run: function() {
    console.log('running...')
  },
  driver: {
    name: 'Anson',
    experience: 2
  }
}

const carCopy = {...car}
carCopy.doors = 5
car.doors // 4
carCopy.doors // 5

carCopy.driver.name = 'Joe'
car.driver.name // 'Joe'

// We can deepclone in the following ways:

// Turn the object into JSON and the turn it back into a JS object
const carCopyJSON = JSON.stringify(car)
const car2 = JSON.parse(carCopyJSON)

// JSON.stringify did not copy the run() function because
// it's not allowed as a JSON property
// JSON ignores functions, undefined, null, Infinity, -Infinity, Nan
// JSON can only made up of arrays, objects, strings, numbers, booleans

// Other ways:
// - Do it manually by creating a recursive function that will copy every level
// - Use a deep clone method from a 3rd party library such as Lodash.cloneDeep()
