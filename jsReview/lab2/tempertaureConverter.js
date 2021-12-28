//Stretch 1
let tempInC = [23, 26, 30];
let changeToF = function(input) {
  const array = []
  for (let temp of input) {
  array.push(temp * 9/5 + 32)
  }
  return array;
}
console.log(changeToF(tempInC)
);

// //Stretch 2
 tempInC = {vancouver: 23, burnaby: 26, seattle: 30 };
for (let place in tempInC) {
  tempInC[place] = tempInC[place] * 9/5 + 32
}
console.log(tempInC)

// //Stretch 3
tempInC = [23, 26, 30] 
 changeToF = function(input) {
  if (input.constructor === Object) {
    for (let place in input) {
    input[place] = input[place] * 9/5 + 32
  }
  console.log(input);
} else if (input.constructor === Array) {
  const array = []
  for (let temp of input) {
  array.push(temp * 9/5 + 32)
  }
  return array;
  }
}
console.log(changeToF(tempInC));
