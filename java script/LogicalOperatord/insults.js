var bodyParts = ['Muscle','Head','Legs']
var randomBodyParts = bodyParts[Math.floor(Math.random()*bodyParts.length)]
var adjectives = ['Smelly','Boring','Stupid']
var randomAdj = adjectives[Math.floor(Math.random()*adjectives.length)]
var Animals = ['Lion','Cheetah','Jaguar','Black Mamba']
var randomAnimals = Animals[Math.floor(Math.random()*Animals.length)]
console.log(animals.shift());
console.log(animals);
console.log(animals.unshift('Lion'));
console.log(animals);
console.log(randomAnimals);
console.log(randomBodyParts);
console.log("Your "  + bodyParts.pop() + "  is as " + adjectives.pop() + " as a" + Animals.pop());
// bodyParts.shift[3]=('arms')
// bodyParts[4]=('mouth')
// bodyParts[5]=('Eyes')
// bodyParts.push('eyes')
// bodyParts.push('Ears')
// console.log(bodyParts.length);
// bodyParts.pop(3);
// console.log(bodyParts);
// console.log(bodyParts);



