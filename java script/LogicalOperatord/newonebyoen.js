let bodyParts=['head','nose','legs']
let animals=['lion','dog','cheetah']
let adj=['what','the','fantastic']

console.log(bodyParts.length + ' '+ adj.length+ ' '+ animals.length);
 console.log("Your "  + bodyParts.pop() + "  is as " + adj.pop() + " as a" + animals.pop());

 console.log(bodyParts.length + ' '+ adj.length+ ' '+ animals.length);
 console.log("Your "  + bodyParts.pop() + "  is as " + adj.pop() + " as a" + animals.pop());

 console.log(bodyParts.length + ' '+ adj.length+ ' '+ animals.length);
 console.log("Your "  + bodyParts.pop() + "  is as " + adj.pop() + " as a" + animals.pop());

 console.log(bodyParts.length + ' '+ adj.length+ ' '+ animals.length);
 //will give undefned values beacuse arrays are now empty
 bodyParts.push('head')
 adj.push('the') 
 animals.push('Lion')
 console.log(bodyParts.length + ' '+ adj.length+ ' '+ animals.length);
 console.log("Your "  + bodyParts.pop() + "  is as " + adj.pop() + " as a" + animals.pop());
 console.log(bodyParts.length + ' '+ adj.length+ ' '+ animals.length);
 bodyParts.push('head')
 adj.push('the') 
 animals.push('Lion')
 bodyParts.push('head')
 adj.push('the') 
 animals.push('Lion')
 console.log(bodyParts.length + ' '+ adj.length+ ' '+ animals.length);
 //console.log("Your "  + bodyParts.pop() + "  is as " + adj.pop() + " as a" + animals.pop());
//  console.log(bodyParts.length + ' '+ adj.length+ ' '+ animals.length);
console.log(bodyParts);
