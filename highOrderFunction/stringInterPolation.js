let name='Bhagwant'
let profession='Student'
let phoneNumber=911
 console.log('My name is ' + name + ' and I am a' + profession);


//console.log(`My name is ${name} and I am ${profession}.My Phone number is ${phoneNumber}`);

let myDetails=(name,profession,phoneNumber=0)=>`My name is ${name} and I am ${profession}.My Phone number is ${phoneNumber}`
console.log(myDetails('Bhagwant','CEO'));
