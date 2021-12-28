let a = parseInt(prompt('Enter a number')) 
let b = parseInt(prompt('Enter a another number')) 
​
for (let i = 1; i <= 100; i++) {
    let str = ''
    if (i % 3 === 0) str += 'Fizz' 
    if (i % 5 === 0) str += 'Buzz' 
​
    console.log(str || i)
}
