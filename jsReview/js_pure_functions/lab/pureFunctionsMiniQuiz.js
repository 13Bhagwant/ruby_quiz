console.log('Math.random(): ',Math.random());//No this is not a Pure Function 
console.log('Math.random(): ',Math.random());
console.log('Math.random(): ',Math.random());

console.log('Math.floor(5.3333)', Math.floor(5.3333));//Yes its a Pure Function
console.log('Math.floor(5.3333)', Math.floor(5.3333));

console.log('Math.floor(5.8999)', Math.floor(5.8999));
console.log('Math.floor(5.8999)', Math.floor(5.8999));//yes 

console.log('Math.floor(8.3333)', Math.floor(8.3333));//YEs
console.log('Math.floor(8.3333)', Math.floor(8.3333));

const arr = [1,2,3,4,5,6];//No it is not a Pure Function
function getLast(arr) {
return arr.pop();
}

console.log('getLast(arr)', getLast(arr));
console.log('getLast(arr)', getLast(arr));//No it is not a Pure Function
console.log('getLast(arr)', getLast(arr));

const GLOBAL_VARIABLE = 4

function multiplyByGlobal(x) {
return x * GLOBAL_VARIABLE;
}//Yes it is  a Pure Function

console.log('multiplyByGlobal(3)', multiplyByGlobal(3));//Yes it is  a Pure Function
console.log('multiplyByGlobal(3)', multiplyByGlobal(3));
console.log('multiplyByGlobal(3)', multiplyByGlobal(3));
