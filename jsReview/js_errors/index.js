// Pseudo code is not actual code
// It is a description of the problem
// You can write it in steps
// The developer can focus on the logic of the problem
// without worrying about the syntax

function triangle(n) {
    // n will be the number of rows
    // n will also be the number of columns
    // we'll need to use iteration n number of times to log to the console
  
    // The string can be broken up into two parts:
    // we need 4 extra spaces for the indent on every row above the bottom row
    // we need 7 spaces between every column
  
    for (let i = 1; i <= n; i++) {
      let indent = " ".repeat((n - i) * 4)
      let stars = "*       ".repeat(i)
      console.log(indent + stars)
    }
  }
  
  // try...catch...finally
  try {
    console.log('Before error')
    printNames() // function doesn't exist so we get ReferenceError
    console.log('After error, will not run')
  } catch (error) {
    console.log(error)
  } finally { 
    console.log('Code that will run no matter what')
  }
  
  console.log('The script continues')
  
  const debuggingVariable = 'test'
  