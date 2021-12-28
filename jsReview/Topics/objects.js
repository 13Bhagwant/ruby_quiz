// JS: Objects

// key/property - value pairs
// keys are strings
// values can be any data-type
const myObj = {
    a: 1,
    b: '2',
    c: true,
    d: [2, 3, 4],
  }
  
  myObj.a // 1
  
  const car = {
    doors: 5, 
    color: 'blue',
    // pre ES6:
    run: function() {
      console.log('Running...')
    },
    // post ES6 shorthand
    openTrunk() {
      console.log('trunk opened')
    }
  }
  
  car.openTrunk() // Logs 'trunk opened'
  car.seats // undefined
  //
  const obj = {
    "with space": 'hi'
  }
  
  const key = "with space"
  obj.key // undefined
  obj["with space"] // hi
  obj[key] // hi
  
  function getWordLengths(sentence) {
    const words = sentence.split(' ')
    const wordLengths = {}
    for (let word of words) {
        wordLengths[word] = word.length
    }
    return wordLengths
  }
  
  // Object keys have to be unique
  const obj = {
    i: 1, 
    j: 2, 
    i: 3,
  }
  
  obj // { i: 3, j: 2 }
  
  // Delete a key/value pair by using the delete keyword
  delete car.doors
  
  // Check if an object has a property on itself
  // (not inheriting it)
  car.hasOwnProperty("doors")
  
  // Use a for..in loop to loop through the keys of an object
  
  const user = {
    name: process.argv[2],
    age: process.argv[3],
  }
  
  function printProperties(obj) {
    for (let property in obj) {
        console.log(`person's ${property} is ${obj[property]}`)
    }
  }
  
  printProperties(user)
  
  // Get an array of all the keys in an object:
  Object.keys(obj)
  // Get an array of all the values in an object:
  Object.values(obj)
  
  // Shallow copy an object
  const car2 = {...car}
  const car3 = Object.assign({}, car)
  