// // A callback is a function passed into 
// // another function as an argument (often asynchronously)

// const callback = () => {
//   console.log('callback starting...') // 3rd
//   setTimeout(() => {
//     console.log('first setTimeout') // 4th
//     setTimeout(() => {
//       console.log('second setTimeout') // 5th
//     }, 3000)
//   }, 4000)
// }

// console.log('Before setTimeout') // 1st

// setTimeout(callback, 0)

// console.log('After setTimeout') // 2nd

// // Synchronous callback example
// const medals = ["gold", "silver", "bronze"]

// function printElements(array) {
//   console.log("Before forEach") // 1st

//   array.forEach(element => {
//     console.log(element) // 2nd
//   })

//   console.log("After forEach") // 3rd

// }

// printElements(medals)



const fs = require('fs')
const path = process.argv[2]

console.log('Before readdir') // 1st

fs.readdir(path, (err, files) => { // reads a directory
  if (err) { // check for errors
    console.log(err)
  } else {
    files.forEach(file => { // loop through each file name inside the directory
      fs.readFile(`${path}/${file}`, {encoding: 'utf8'}, (err, data) => { // read the contents of the file
        if (err) {
          console.log(err)
        } else {
          console.log(data) // 3rd
        }
      })
    })
  }
})

console.log('After readdir') // 2nd
