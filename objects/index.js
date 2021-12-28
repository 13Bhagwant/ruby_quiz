// let guests={
//     "Jeff Bezos":{
//         name:"jeff Bezos",
//         email:"jeff22@gmail.com",
//         Phone:7678997333,
//         meetingTime:"8:15"
//     }}
//     "Bill Gates":{
//         name:"Bill Gates",
//         email:"Gates445@hotmail.com",
//         Phone:79879879897,
//         meetingTime:"8:30"
//     },
//     "Tim Cock":{
//         name:"TIm Cock",
//         email:"Tim45@gmail.com",
//         Phone:79879844555,
//         meetingTime:"9:00"
//     }
// };
//     console.log(guests);



// guests={
    
//         name:"jeff Bezos",
//         email:"jeff22@gmail.com",
//         Phone:7678997333,
//         meetingTime:"8:15"
//     }
//     const keys = Object.keys(guests); // ['name', 'email', 'phone', 'visit-time']

//     for (let i = 0; i < keys.length; i++) {
//         console.log(`key: ${keys[i]} => value: ${guests[keys[i]]}`);
//     }

const array = [1, 2, 3, 4, 5, 6, 2, 3, 1]; // length 9
const arrayToObject = array => {
  // type your code here to return an object of that array
  const outputObject = {};
  for (let i = 0; i < array.length; i++) {                          // i: 3
    if (outputObject.hasOwnProperty(array[i])) {                    // array[3]: 4
    // (outputObject.hasOwnProperty('1')) {                         // outputObject = {1: 1, 2: 1,  
        outputObject[array[i]] += 1;                                // 3: 1, }
        // outputObject['1'] = outputObject['1'] + 1;
    } else {
      outputObject[array[i]] = 1;
    //   outputObject['1'] = 1;
    }
  }

  return outputObject;
};
console.log(arrayToObject(array));
