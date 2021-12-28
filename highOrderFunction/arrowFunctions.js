let a=parseInt(process.argv[2]);
let b=parseInt(process.argv[3]);
let methodToPerform=process.argv[4];
let add=(num1,num2)=> num1+num2;
let substract=(num1,num2)=> num1-num2;
let multiply=(num1,num2)=>num1*num2;
let divide=(num1,num2)=> num1/num2;
console.log(add(a,b));
// console.log(subtract(a,b));
// console.log(multiply(a,b));
// console.log(divide(a,b));
let calculator=function(method,num1,num2){
    return method(num1,num2);
}
if('add'===methodToPerform){
    console.log(calculator(add,a,b));
}
if('substract'===methodToPerform){console.log(calculator(substract,a,b));
}
if('multiply'===methodToPerform){console.log(calculator(multiply,a,b));
}
if('divide'===methodToPerform){console.log(calculator(divide,a,b));
}
